import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * CuckooClockGame.jsx
 * - بازی آموزشی تنظیم ساعت با انیمیشن پرندهٔ کوکو
 * - همه‌چیز در یک فایل (بدون تصاویر خارجی)
 * - پشتیبانی از ماوس و لمس
 * - نمایش کلمهٔ فارسی بدون تکرار پس از برد
 */

export default function CuckooClockGame() {
  // ===== تنظیمات قابل تغییر =====
  const WORDS = useMemo(
    () => [
      "مدرسه",
      "کتاب",
      "دوچرخه",
      "گربه",
      "صبحانه",
      "دانش‌آموز",
      "بازی",
      "دوست",
      "باران",
      "خورشید",
      "قلم",
      "هواپیما",
      "سیب",
      "دفتر",
      "پارک",
    ],
    []
  );

  // دقیقه‌ها را روی مضارب 5 نگه داریم تا برای کودک ساده‌تر باشد
  const MINUTE_STEPS = 12; // 12 * 5 = 60 دقیقه
  const ANGLE_TOLERANCE_MIN = 1; // تحمل خطا: 1 دقیقه

  // ===== وضعیت بازی =====
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  const [target, setTarget] = useState(() => randomTarget());
  const [minuteAngle, setMinuteAngle] = useState(0); // 0 بالای ساعت
  const [hourAngle, setHourAngle] = useState(0);

  const [dragging, setDragging] = useState(null); // 'minute' | 'hour' | null
  const clockRef = useRef(null);

  const [cuckooOpen, setCuckooOpen] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [usedWords, setUsedWords] = useState(new Set());

  const [message, setMessage] = useState("");

  // ===== ابزار =====
  function randomTarget() {
    // ساعت 1..12 ، دقیقه مضرب 5
    const hour = 1 + Math.floor(Math.random() * 12);
    const minuteStep = Math.floor(Math.random() * MINUTE_STEPS); // 0..11
    const minute = minuteStep * 5;
    return { hour, minute };
  }

  function polarAngleFromCenter(clientX, clientY) {
    const rect = clockRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // زاویه‌ی ریاضی: 0 در راست، اما برای ساعت می‌خواهیم 0 در بالا
    const angleRad = Math.atan2(clientY - cy, clientX - cx); // -PI..PI (0=راست)
    let deg = (angleRad * 180) / Math.PI; // -180..180 (0=راست)
    deg = deg + 90; // 0 را به بالا منتقل کنیم
    if (deg < 0) deg += 360;
    return deg % 360; // 0..359.999
  }

  function nearestMinuteFromAngle(angle) {
    // هر دقیقه 6 درجه
    let minute = Math.round(angle / 6);
    minute = ((minute % 60) + 60) % 60;
    return minute;
  }

  function hourFromAngles(hAngle, mAngle) {
    // عقربه‌ی ساعت با دقیقه حرکت می‌کند: 30*hour + 0.5*minute
    const total = hAngle;
    let approxHour = Math.floor(((total / 30) + 0.5) % 12);
    if (approxHour === 0) approxHour = 12;
    // از دقیقه برای دقت بیشتر
    const minute = nearestMinuteFromAngle(mAngle);
    const exactHour = Math.round(((total - 0.5 * minute) / 30) % 12);
    let h = exactHour;
    if (h <= 0) h += 12;
    if (h === 0) h = 12;
    // fallback
    return h || approxHour || 12;
  }

  function minutesDiff(a, b) {
    // اختلاف دقیقه روی دایره (0..59) با کمترین فاصله
    let d = Math.abs(a - b);
    if (d > 30) d = 60 - d;
    return d;
  }

  function isCorrect() {
    const m = nearestMinuteFromAngle(minuteAngle);
    const h = hourFromAngles(hourAngle, minuteAngle);

    const okMinute = minutesDiff(m, target.minute) <= ANGLE_TOLERANCE_MIN;
    // ساعت را نیز با توجه به دقیقه بسنجیم
    const targetHourAngle = ((target.hour % 12) * 30 + 0.5 * target.minute) % 360;
    const hourMinuteAngle = ((h % 12) * 30 + 0.5 * m) % 360;
    const hourDiffDeg = Math.abs(((hourMinuteAngle - targetHourAngle + 540) % 360) - 180);
    const okHour = hourDiffDeg <= 15; // حدود نیم ساعت خطا نکنه

    return okMinute && okHour;
  }

  function setHandsToTarget(t) {
    const mAngle = (t.minute % 60) * 6;
    const hAngle = (((t.hour % 12) * 30) + 0.5 * t.minute) % 360;
    setMinuteAngle(mAngle);
    setHourAngle(hAngle);
  }

  // ===== شروع راند جدید =====
  function nextRound() {
    const t = randomTarget();
    setTarget(t);
    // برای جذابیت: با زمان تصادفی شروع کنیم
    setMinuteAngle(Math.floor(Math.random() * 60) * 6);
    setHourAngle(Math.floor(Math.random() * 360));
    setCuckooOpen(false);
    setShowWord(false);
    setCurrentWord("");
    setMessage("");
    setRound((r) => r + 1);
  }

  // ===== رویدادهای کشیدن =====
  function onPointerDown(which) {
    setDragging(which);
  }

  function onPointerMove(e) {
    if (!dragging || !clockRef.current) return;
    const isTouch = e.touches && e.touches.length > 0;
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;
    const angle = polarAngleFromCenter(clientX, clientY);

    if (dragging === "minute") {
      // دقیقه هر 5 دقیقه اسنپ شود تا ساده باشد
      const minute = Math.round(angle / 6 / 5) * 5;
      setMinuteAngle(((minute % 60) + 60) % 60 * 6);
      // حرکت جزئی به ساعت هم بدهیم
      const h = (((hourAngle + 0.5 * 5) % 360) + 360) % 360;
      setHourAngle((prev) => prev); // ساعت را مستقیم تغییر ندهیم؛ در پایان بررسی می‌کنیم
    } else if (dragging === "hour") {
      setHourAngle(angle);
    }
  }

  function onPointerUp() {
    setDragging(null);
    // هر بار رها شد، درست بودن را بررسی کن
    if (isCorrect()) {
      handleWin();
    }
  }

  // لمس‌های موبایل
  useEffect(() => {
    function touchMove(e) {
      onPointerMove(e);
    }
    function touchEnd() {
      onPointerUp();
    }
    window.addEventListener("touchmove", touchMove, { passive: true });
    window.addEventListener("touchend", touchEnd);
    return () => {
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging, hourAngle, minuteAngle, target]);

  // ماوس
  useEffect(() => {
    function mouseMove(e) {
      onPointerMove(e);
    }
    function mouseUp() {
      onPointerUp();
    }
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging, hourAngle, minuteAngle, target]);

  // ===== برد =====
  function handleWin() {
    setCuckooOpen(true);
    setScore((s) => s + 1);
    // انتخاب کلمه بدون تکرار
    let choice = "";
    const available = WORDS.filter((w) => !usedWords.has(w));
    if (available.length === 0) {
      choice = "آفرین! همهٔ کلمه‌ها را خواندی 👏";
    } else {
      choice = available[Math.floor(Math.random() * available.length)];
    }
    setCurrentWord(choice);
    setShowWord(true);
    setUsedWords((prev) => {
      const n = new Set(prev);
      if (choice && choice.indexOf("آفرین!") !== 0) n.add(choice);
      return n;
    });

    // بگو «کوکو» (اگر مرورگر اجازه دهد)
    try {
      if ("speechSynthesis" in window) {
        const u1 = new SpeechSynthesisUtterance("کوکو");
        const u2 = new SpeechSynthesisUtterance("کوکو");
        u1.lang = "fa-IR";
        u2.lang = "fa-IR";
        window.speechSynthesis.speak(u1);
        window.speechSynthesis.speak(u2);
      } else {
        setMessage("کوکو! کوکو!");
      }
    } catch {
      setMessage("کوکو! کوکو!");
    }
  }

  // ===== متن هدف برای کودک =====
  const targetLabel = useMemo(() => {
    const mm = target.minute.toString().padStart(2, "0");
    return `ساعت را روی ${toPersianDigits(target.hour)}:${toPersianDigits(mm)} بگذار`;
  }, [target]);

  // ===== استایل‌ها =====
  const styles = {
    container: {
      direction: "rtl",
      fontFamily: "Vazirmatn, IranSans, Segoe UI, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      padding: "16px",
    },
    board: {
      width: "320px",
      maxWidth: "90vw",
      background: "linear-gradient(180deg,#f7f2e9,#efe2c6)",
      border: "8px solid #8b5e34",
      borderRadius: "16px",
      boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
      padding: "14px",
      position: "relative",
    },
    header: { textAlign: "center", fontWeight: 700, fontSize: "18px" },
    clockWrap: {
      position: "relative",
      width: "100%",
      paddingBottom: "100%", // مربع → دایره
    },
    clock: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background:
        "radial-gradient(circle at 50% 45%, #fff 0 58%, #f7f7f7 58% 100%)",
      border: "10px solid #c9a27b",
      boxShadow: "inset 0 0 0 2px #f2d2a9, 0 4px 12px rgba(0,0,0,0.15)",
    },
    tick: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "2px",
      height: "12%",
      transformOrigin: "50% 90%",
      background: "#333",
      borderRadius: "1px",
    },
    number: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      fontWeight: 700,
      fontSize: "14px",
      userSelect: "none",
    },
    hand: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transformOrigin: "50% 90%",
      borderRadius: "4px",
      cursor: "grab",
      touchAction: "none",
    },
    minuteHand: { width: "4px", height: "38%", background: "#222" },
    hourHand: { width: "6px", height: "28%", background: "#444" },
    pin: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "14px",
      height: "14px",
      background: "#8b5e34",
      border: "2px solid #fff",
      borderRadius: "50%",
      transform: "translate(-50%,-50%)",
      boxShadow: "0 0 0 2px rgba(0,0,0,0.1)",
    },
    door: {
      position: "absolute",
      left: "50%",
      top: "5%",
      width: "36px",
      height: "24px",
      transform: "translateX(-50%)",
      perspective: "200px",
    },
    doorLeaf: {
      position: "absolute",
      inset: 0,
      background: "#8b5e34",
      border: "2px solid #5f3d22",
      borderRadius: "4px",
      transformOrigin: "left center",
      transition: "transform 500ms ease",
      boxShadow: "inset 0 0 0 2px #b98d64",
    },
    bird: {
      position: "absolute",
      left: "50%",
      top: "100%",
      width: "28px",
      height: "18px",
      transform: "translate(-50%, -50%)",
      transition: "transform 500ms ease 120ms",
    },
    beak: {
      position: "absolute",
      left: "100%",
      top: "50%",
      width: 0,
      height: 0,
      borderTop: "4px solid transparent",
      borderBottom: "4px solid transparent",
      borderLeft: "6px solid #e6a31a",
      transform: "translateY(-50%)",
    },
    wordOverlay: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      background: "rgba(255,255,255,0.96)",
      border: "3px dashed #8b5e34",
      borderRadius: "12px",
      padding: "16px 18px",
      textAlign: "center",
      minWidth: "70%",
      boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
    },
    btn: {
      marginTop: "10px",
      padding: "10px 14px",
      border: "none",
      borderRadius: "10px",
      background: "#8b5e34",
      color: "#fff",
      fontWeight: 700,
      cursor: "pointer",
    },
    footer: { display: "flex", justifyContent: "space-between", marginTop: 10 },
    helper: {
      fontSize: "13px",
      opacity: 0.8,
      textAlign: "center",
    },
    message: { textAlign: "center", fontWeight: 700 },
  };

  // در شروع، یک بار ساعت را روی هدف نگذاریم تا کودک بازی کند
  useEffect(() => {
    // شروع تصادفی را بالاتر انجام دادیم
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>🕰️ بازی ساعت کوکو</div>

      <div style={styles.board}>
        {/* متن راهنما */}
        <div style={{ textAlign: "center", fontWeight: 600, marginBottom: 6 }}>
          {targetLabel}
        </div>

        {/* جعبه‌ی ساعت */}
        <div ref={clockRef} style={styles.clockWrap}>
          <div style={styles.clock}>
            {/* درِ بالا و پرنده */}
            <div style={styles.door}>
              <div
                style={{
                  ...styles.doorLeaf,
                  transform: cuckooOpen ? "rotateY(-95deg)" : "rotateY(0deg)",
                }}
                aria-label="cuckoo-door"
              />
              <div
                style={{
                  ...styles.bird,
                  transform: cuckooOpen
                    ? "translate(-50%, -120%)"
                    : "translate(-50%, -50%)",
                }}
                aria-label="cuckoo-bird"
              >
                {/* بدن پرنده */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle at 30% 40%, #5bb5e8, #2f86b9)",
                    borderRadius: "10px",
                    position: "relative",
                  }}
                >
                  {/* چشم */}
                  <div
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "6px",
                      width: "6px",
                      height: "6px",
                      background: "#fff",
                      borderRadius: "50%",
                      boxShadow: "inset 0 0 0 1px #000",
                    }}
                  />
                  <div style={styles.beak} />
                </div>
              </div>
            </div>

            {/* دقیقه‌شمارها (تیک‌ها) */}
            {Array.from({ length: 60 }).map((_, i) => {
              const isHourTick = i % 5 === 0;
              const a = i * 6;
              return (
                <div
                  key={i}
                  style={{
                    ...styles.tick,
                    height: isHourTick ? "14%" : "8%",
                    width: isHourTick ? "3px" : "2px",
                    background: isHourTick ? "#111" : "#666",
                    transform: `translate(-50%,-90%) rotate(${a}deg)`,
                  }}
                />
              );
            })}

{/* اعداد 1..12 */}
{Array.from({ length: 12 }).map((_, i) => {
  const n = i + 1;
  const angle = (n * 30) * (Math.PI / 180); // هر عدد 30 درجه
  const r = 42; // فاصله از مرکز (درصد)
  const x = 50 + r * Math.sin(angle); // محور X
  const y = 50 - r * Math.cos(angle); // محور Y
  return (
    <div
      key={n}
      style={{
        ...styles.number,
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {toPersianDigits(n)}
    </div>
  );
})}

            {/* عقربه دقیقه */}
            <div
              role="slider"
              aria-label="minute-hand"
              onMouseDown={() => onPointerDown("minute")}
              onTouchStart={() => onPointerDown("minute")}
              style={{
                ...styles.hand,
                ...styles.minuteHand,
                transform: `translate(-50%,-90%) rotate(${minuteAngle}deg)`,
              }}
              title="عقربه دقیقه (بکشید)"
            />

            {/* عقربه ساعت */}
            <div
              role="slider"
              aria-label="hour-hand"
              onMouseDown={() => onPointerDown("hour")}
              onTouchStart={() => onPointerDown("hour")}
              style={{
                ...styles.hand,
                ...styles.hourHand,
                transform: `translate(-50%,-90%) rotate(${hourAngle}deg)`,
              }}
              title="عقربه ساعت (بکشید)"
            />

            {/* پین وسط */}
            <div style={styles.pin} />

            {/* لایهٔ کلمه پس از برد */}
            {showWord && (
              <div style={styles.wordOverlay}>
                <div style={{ fontSize: "20px", marginBottom: 6 }}>کوکو! 🐤</div>
                <div style={{ fontSize: "28px", fontWeight: 800 }}>
                  {currentWord || "آفرین!"}
                </div>
                <button
                  style={styles.btn}
                  onClick={() => {
                    setShowWord(false);
                    setCuckooOpen(false);
                    // اگر همهٔ کلمات تمام شده، فقط زمان هدف جدید بده
                    nextRound();
                  }}
                >
                  خواندم، بعدی →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* پیام و راهنمای تعامل */}
        {message && <div style={styles.message}>{message}</div>}
        <div style={styles.helper}>عقربه‌ها را با انگشت یا ماوس بچرخان.</div>

        {/* نوار پایین */}
        <div style={styles.footer}>
          <div>امتیاز: {toPersianDigits(score)}</div>
          <div>مرحله: {toPersianDigits(round)}</div>
          <button
            onClick={() => {
              setHandsToTarget(target);
            }}
            style={{
              ...styles.btn,
              padding: "8px 10px",
              fontSize: "12px",
              background: "#6c8b3b",
            }}
            title="نمایش راه‌حل روی ساعت"
          >
            نشان بده
          </button>
          <button
            onClick={() => nextRound()}
            style={{ ...styles.btn, padding: "8px 10px", fontSize: "12px" }}
            title="راند جدید با زمان تازه"
          >
            زمان جدید
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===== ابزار تبدیل رقم به فارسی ===== */
function toPersianDigits(input) {
  const map = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
  return String(input).replace(/\d/g, (d) => map[d]);
}
