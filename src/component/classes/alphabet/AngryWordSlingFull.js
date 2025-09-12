import React, { useEffect, useRef, useState } from "react";

/**
 * AngryWordSlingFull.jsx
 * - همه در یک فایل
 * - قابلیت کشیدن/رها کردن توپ (pointer events)
 * - فیزیک ساده: گرانش، اصطکاک هوا، برخورد با زمین
 * - تشخیص برخورد با هدف
 * - نمایش کلمه فارسی و TTS (fa-IR)
 * - امتیاز، تعداد شلیک، ریست و تنظیم سختی
 *
 * استفاده: <AngryWordSlingFull />
 */

export default function AngryWordSlingFull({ initialWords }) {
  const WIDTH = 900;
  const HEIGHT = 480;

  // داستان مهمانی شادی
  // const defaultWords = ["مِهمانی","شاد","بادکُنَک","چِراغ","رَنگی","دوست","بازی","کِیک","شُکُلاتی","آب‌میوِه","خُوشحال","لَذَت","تَشَكُر"]

  // داستان من و ماکارانی
  // const defaultWords = ['قابلَمه','بویِ','بابا','خوشمَزه','کُمَک','آفَرین','هَمِه','خَندیدیم','خوردیم']

  // داستان طوفان بزرگ
  const defaultWords = ['آسمان','باد','بَرق','مادَر','طوفان','شَمع','صُبح','دِرَخت','بابا','کُمَک','هَمسایه','زُبالِه','هَمدِلی'];

  // داستان پدر و سبد
  // const defaultWords = ['پِدَر','چای','سارا','سَبَد','سِیب','شاد','خُورد','خُوشحال'];








  const words = initialWords && initialWords.length ? initialWords : defaultWords;

  // --- UI state
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);
  const [shots, setShots] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [message, setMessage] = useState("توپ را بگیر، بکش و رها کن!");
  const [soundOn, setSoundOn] = useState(true);

  // --- refs
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pointerIdRef = useRef(null);

// for background ball
  const ballImgRef = useRef(null);

useEffect(() => {
  const img = new Image();
  img.src = "/images/assetAlpha/gamePage/angryBird-3.webp"; // مسیر عکس توپ (داخل public/images بزار)
  ballImgRef.current = img;
}, []);

//for background game
const bgImgRef = useRef(null);

useEffect(() => {
  const img = new Image();
  img.src = "/images/assetAlpha/gamePage/angryBackground-2.webp";// مسیر عکس بک‌گراند
  bgImgRef.current = img;
}, []);



  const sling = useRef({ ax: 120, ay: HEIGHT - 110, r: 10 });

  const bird = useRef({
    x: sling.current.ax,
    y: sling.current.ay,
    r: 18,
    vx: 0,
    vy: 0,
    dragging: false,
    launched: false,
    resting: true,
  });

  const target = useRef({
    x: WIDTH - 180,
    y: HEIGHT - 160,
    r: 36,
  });

  const trail = useRef([]);

  function getParams() {
    switch (difficulty) {
      case "hard":
        return { gravity: 0.5, air: 0.995, power: 0.35, targetR: 15, bounce: 0.3 };
      case "medium":
        return { gravity: 0.45, air: 0.996, power: 0.35, targetR: 28, bounce: 0.35 };
      default:
        return { gravity: 0.4, air: 0.917, power: 0.58, targetR: 36, bounce: 0.4 };
    }
  }

  function getCanvasPos(evt) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = evt.clientX ?? evt.touches?.[0]?.clientX;
    const clientY = evt.clientY ?? evt.touches?.[0]?.clientY;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  }

  function dist(ax, ay, bx, by) {
    return Math.hypot(ax - bx, ay - by);
  }

  function resetBird() {
    bird.current.x = sling.current.ax;
    bird.current.y = sling.current.ay;
    bird.current.vx = 0;
    bird.current.vy = 0;
    bird.current.dragging = false;
    bird.current.launched = false;
    bird.current.resting = true;
    trail.current = [];
  }

  function randomizeTarget() {
    const p = getParams();
    const marginX = 160;
    const minX = WIDTH / 2 + 40;
    const maxX = WIDTH - marginX;
    target.current.x = minX + Math.random() * (maxX - minX);
    target.current.y = 120 + Math.random() * (HEIGHT - 220);
    target.current.r = p.targetR;
  }

  function speakFa(text) {
    if (!soundOn || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fa-IR";
      const voices = window.speechSynthesis.getVoices();
      const fa = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("fa"));
      if (fa) u.voice = fa;
      window.speechSynthesis.speak(u);
    } catch {}
  }

  function nextWordRound() {
    setShowWord(false);
    setWordIndex((i) => (i + 1) % words.length);
    resetBird();
    randomizeTarget();
    setMessage("آفرین! آماده شو تا دوباره هدف بزنی 🎯");
  }

  function missRound() {
    setShowWord(false);
    setMessage("نخورد — دوباره تلاش کن.");
    resetBird();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    randomizeTarget();
    resetBird();

function drawBackground() {
  const img = bgImgRef.current;
  if (img && img.complete) {
    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT); // کشیدن بک‌گراند
  } else {
    // حالت fallback اگر عکس هنوز لود نشده باشه
    ctx.fillStyle = "#eaf6ff";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#d7f1c9";
    ctx.fillRect(0, HEIGHT - 48, WIDTH, 48);
  }
}


    function drawSling() {
      const s = sling.current;
      ctx.fillStyle = "#222";
      ctx.beginPath();
      ctx.arc(s.ax, s.ay, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawTarget() {
      const t = target.current;
      ctx.save();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#333";
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r + 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "#111";
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#8b5a2b";
      ctx.fillRect(t.x - 40, t.y + t.r, 80, 10);
      ctx.restore();
    }

    function drawBird() {
      const b = bird.current;
      ctx.save();
      for (let i = 0; i < trail.current.length; i++) {
        const t = trail.current[i];
        ctx.globalAlpha = (i + 1) / trail.current.length;
        ctx.beginPath();
        ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      if (b.dragging) {
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(sling.current.ax - 10, sling.current.ay);
        ctx.lineTo(b.x, b.y);
        ctx.moveTo(sling.current.ax + 10, sling.current.ay);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // ctx.beginPath();
      // ctx.fillStyle = "#c64028ff";
      // ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.fillStyle = "#fff";
      // ctx.beginPath();
      // ctx.arc(b.x - b.r / 3, b.y - b.r / 3, Math.max(2, b.r / 6), 0, Math.PI * 2);
      // ctx.fill();

       // 👉 اینجا تصویر توپ رو می‌کشیم
  const img = ballImgRef.current;
  if (img && img.complete) {
    ctx.drawImage(img, b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
  } else {
    // حالت fallback (دایره ساده اگه عکس لود نشده بود)
    ctx.beginPath();
    ctx.fillStyle = "#c64028ff";
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fill();
  }
    }

    function drawHUD() {
      ctx.save();
      ctx.fillStyle = "#111";
      ctx.font = "16px ui-sans-serif, system-ui";
      ctx.textAlign = "left";
      ctx.fillText(`امتیاز: ${score}`, 18, 26);
      ctx.fillText(`شلیک‌ها: ${shots}`, 18, 46);
      ctx.fillText(`سختی: ${difficulty}`, 18, 66);

      ctx.textAlign = "center";
      ctx.fillText(message, WIDTH / 2, 28);
      ctx.restore();
    }

    function updatePhysics() {
      const p = getParams();
      const b = bird.current;

      if (b.launched) {
        b.vy += p.gravity;
        b.vx *= p.air;
        b.vy *= p.air;

        b.x += b.vx;
        b.y += b.vy;

        trail.current.push({ x: b.x, y: b.y });
        if (trail.current.length > 60) trail.current.shift();

        if (b.y + b.r > HEIGHT - 48) {
          b.y = HEIGHT - 48 - b.r;
          b.vy *= -p.bounce;
          b.vx *= 0.8;
          if (Math.abs(b.vy) < 0.6) b.vy = 0;
        }

        if (b.x - b.r < 0) { b.x = b.r; b.vx *= -0.45; }
        if (b.x + b.r > WIDTH) { b.x = WIDTH - b.r; b.vx *= -0.45; }

        const d = dist(b.x, b.y, target.current.x, target.current.y);
        if (d <= b.r + target.current.r) {
          setScore((s) => s + 1);
          setShowWord(true);
          setMessage("آفرین! خورد 🎉");
          const nx = (b.x - target.current.x) / d || 0;
          const ny = (b.y - target.current.y) / d || 0;
          b.x = target.current.x + (b.r + target.current.r + 2) * nx;
          b.y = target.current.y + (b.r + target.current.r + 2) * ny;
          b.launched = false;
          b.resting = true;
          speakFa(words[wordIndex]);
        }

        const speed = Math.hypot(b.vx, b.vy);
        if (speed < 0.25 && b.y + b.r >= HEIGHT - 48 - 0.5 && !showWord && !b.dragging) {
          setTimeout(() => { if (!showWord) missRound(); }, 300);
          b.launched = false;
          b.resting = true;
        }
      }
    }

    function loop() {
      updatePhysics();
      drawBackground();
      drawSling();
      drawTarget();
      drawBird();
      drawHUD();
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [difficulty]);

  useEffect(() => {
    const canvas = canvasRef.current;

    function onPointerDown(e) {
      const pos = getCanvasPos(e);
      const b = bird.current;
      if (b.launched) return;
      const d = dist(pos.x, pos.y, b.x, b.y);
      if (d <= b.r + 8) {
        b.dragging = true;
        b.resting = false;
        pointerIdRef.current = e.pointerId;
        if (canvas.setPointerCapture) {
          try { canvas.setPointerCapture(e.pointerId); } catch {}
        }
        setMessage("بکش و وقتی آماده‌ای رها کن");
        e.preventDefault();
      }
    }

    function onPointerMove(e) {
      const b = bird.current;
      if (!b.dragging) return;
      const pos = getCanvasPos(e);
      const maxPull = 200;
      const dx = pos.x - sling.current.ax;
      const dy = pos.y - sling.current.ay;
      const len = Math.hypot(dx, dy);
      if (len > maxPull) {
        const k = maxPull / len;
        b.x = sling.current.ax + dx * k;
        b.y = sling.current.ay + dy * k;
      } else {
        b.x = pos.x;
        b.y = pos.y;
      }
      e.preventDefault();
    }

    function onPointerUp(e) {
      const b = bird.current;
      if (!b.dragging) return;
      b.dragging = false;
      if (canvas.releasePointerCapture && pointerIdRef.current != null) {
        try { canvas.releasePointerCapture(pointerIdRef.current); } catch {}
        pointerIdRef.current = null;
      }

      const p = getParams();
      const pullX = sling.current.ax - b.x;
      const pullY = sling.current.ay - b.y;
      b.vx = pullX * p.power;
      b.vy = pullY * p.power;
      b.launched = true;
      b.resting = false;
      setShots((n) => n + 1);
      setMessage("شلیک شد!");
      e.preventDefault();
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  useEffect(() => {
    randomizeTarget();
    resetBird();
    setMessage("سختی عوض شد — آماده شو!");
  }, [difficulty]);

  return (
    <div style={{ maxWidth: 960, margin: 16, fontFamily: "IRANSans, Vazirmatn, system-ui" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 8,  }}>
        <button onClick={() => { resetBird(); setMessage("توپ ریست شد"); }} style={btnStyle}>ریست توپ</button>
        <button onClick={() => { randomizeTarget(); setMessage("هدف جابجا شد"); }} style={btnStyle}>جابجایی هدف</button>
        <label style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          سختی:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} style={selectStyle}>
            <option value="easy">آسان</option>
            <option value="medium">متوسط</option>
            <option value="hard">سخت</option>
          </select>
        </label>
        <label style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          صدا:
          <input type="checkbox" checked={soundOn} onChange={(e) => setSoundOn(e.target.checked)} />
        </label>
        <button onClick={() => { setScore(0); setShots(0); setWordIndex(0); setShowWord(false); resetBird(); randomizeTarget(); setMessage("شروعِ دوباره"); }} style={btnStyle}>شروع دوباره</button>
      </div>

      <div style={{ position: "relative", border: "1px solid #ddd", borderRadius: 8, overflow: "hidden" }}>
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} style={{ width: "100%", display: "block", background: "#eaf6ff" }} />
        {showWord && (
          <div style={wordOverlayStyle}>
            <div style={wordCardStyle}>
              <div style={{ fontSize: 48, textAlign: "center", lineHeight: 1.2 }}>{words[wordIndex]}</div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12 }}>
                <button onClick={() => speakFa(words[wordIndex])} style={btnStyle}>🔊 پخش دوباره</button>
                <button onClick={nextWordRound} style={btnStyle}>کلمه بعدی ▶</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <details style={{ marginTop: 10 }}>
        <summary>راهنما</summary>
        <div style={{ paddingTop: 8, lineHeight: 1.8 }}>
          - برای شلیک: توپ را لمس/کلیک کن، بکش به عقب و رها کن. نقطهٔ پرتاب بر اساس کشش محاسبه می‌شود. <br />
          - اگر به هدف بخوری، کلمهٔ فارسی نشان داده و خوانده می‌شود. <br />
          - "جابجایی هدف" محل هدف را تغییر می‌دهد تا تمرین متنوع باشد. <br />
        </div>
      </details>
    </div>
  );
}

// ===== استایل‌ها =====
const btnStyle = {
  border: "1px solid #111",
  background: "white",
  padding: "8px 12px",
  borderRadius: 8,
  cursor: "pointer",
};

const selectStyle = {
  padding: "6px 10px",
  borderRadius: 8,
  border: "1px solid #111",
  background: "white",
  marginLeft: 6,
};

const wordOverlayStyle = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(2px)",
};

const wordCardStyle = {
  background: "white",
  border: "1px solid #111",
  padding: "16px 20px",
  borderRadius: 12,
  minWidth: 260,
};
