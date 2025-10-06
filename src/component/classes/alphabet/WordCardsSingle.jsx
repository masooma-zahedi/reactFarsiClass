// WordCardsSingleComponent.jsx (نسخهٔ اصلاح‌شده: پر شدن RTL و حذف/برگشت درست کاشی‌ها)
import React, { useEffect, useState } from "react";


export default function WordCardsSingle({  onFinishedAll = () => {} }) {
    const words = [
    { id: 1, word: "سیب", image: "https://img.freepik.com/premium-vector/red-hat-with-yellow-ribbon_1234738-585219.jpg?semt=ais_hybrid&w=740&q=80", title: "Apple", direction: "horizontal", extraTiles: ["گ"] },
    { id: 2, word: "عسل", image: "https://img.freepik.com/free-vector/cute-honey-bee-hug-honeycomb-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6880.jpg?semt=ais_hybrid&w=740&q=80", title: "Honey", direction: "horizontal", extraTiles: ["ک","پ"] },
    // ...
  ];
  const [index, setIndex] = useState(0);

  // state کارت جاری
  const [tiles, setTiles] = useState([]);       // کاشی‌های جاری (instances)
  const [placed, setPlaced] = useState([]);     // آرایه‌ای با طولِ کلمه؛ index 0 => **سمت چپ**، index n-1 => **سمت راست**
  const [wrongMask, setWrongMask] = useState([]);// خانه‌های غلط (bool per index)
  const [solved, setSolved] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showFinished, setShowFinished] = useState(false)
  const [gameOver, setGameOver] = useState(false);

  

  useEffect(() => {
    loadWord(index);
    setShowSurprise(false);
  }, [index]);

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function loadWord(i) {
    const w = words[i];
    if (!w) return;
    const letters = Array.from(w.word); // letters[i] corresponds to placed[i]
    const extras = Array.isArray(w.extraTiles) ? w.extraTiles : [];
    const all = shuffle([...letters, ...extras]);
    setTiles(all);
    setPlaced(Array(letters.length).fill(null)); // index mapping: 0..n-1 (left->right)
    setWrongMask(Array(letters.length).fill(false));
    setSolved(false);
  }

  // پیدا کردن اولین خانهٔ خالی از سمت راست (اندیس منطقی)
  const firstEmptyFromRight = (placedArr) => {
    for (let i = placedArr.length - 1; i >= 0; i--) {
      if (!placedArr[i]) return i;
    }
    return -1;
  };

  // کلیک روی یک کاشی: آن را در اولین خانهٔ خالی از سمت راست قرار می‌دهد (اگر وجود داشته باشد)
  const handleTileClick = (tileIdx) => {
    if (solved) return;
    const tile = tiles[tileIdx];
    const targetIdx = firstEmptyFromRight(placed);
    if (targetIdx === -1) {
      // هیچ جا خالی نیست — می‌توانیم صدای خطا یا افکت بدهیم؛ فعلاً هیچ کاری نمی‌کنیم
      return;
    }
    // قرار دادن در خانهٔ targetIdx
    setPlaced((prev) => {
      const np = [...prev];
      np[targetIdx] = tile;
      return np;
    });
    // حذف همان instance از tiles با استفاده از index (نه مقدار)
    setTiles((prev) => {
      const nt = [...prev];
      nt.splice(tileIdx, 1);
      return nt;
    });
  };

  // کلیک روی خانه: اگر پر باشد -> آن حرف برداشته و به tiles اضافه می‌شود (append + shuffle)
  const handleCellClick = (underlyingIdx) => {
    if (solved) return;
    if (!placed[underlyingIdx]) return; // خالی است — کاری نکن
    const removed = placed[underlyingIdx];
    setPlaced((prev) => {
      const np = [...prev];
      np[underlyingIdx] = null;
      return np;
    });
    // برگشتن حرف به tiles (append سپس shuffle تا موقعیت تغییر کند)
    setTiles((prev) => shuffle([...prev, removed]));
  };

  // وقتی همه خانه‌ها پر شد، بررسی صحت انجام می‌شود
useEffect(() => {
  const w = words[index];
  if (!w) return;
  const letters = Array.from(w.word);
  const filled = placed.length > 0 && placed.every((p) => p !== null);
  if (filled && !solved) {
    let userAnswer = placed;
    let shouldReverseMask = false;
    if (w.direction === "horizontal") {
      userAnswer = [...placed].reverse();
      shouldReverseMask = true;
    }
    const mask = letters.map((ch, i) => userAnswer[i] === ch);
    const allGood = mask.every(Boolean);
    if (allGood) {
      setSolved(true);
      setTimeout(() => setShowSurprise(true), 120);
    } else {
      const finalMask = mask.map((m) => !m);
      setWrongMask(shouldReverseMask ? finalMask.reverse() : finalMask);
    }
  } else {
    setWrongMask((prev) => prev.map(() => false));
  }
}, [placed, index, solved, words]);

  const onNext = () => {
    setShowSurprise(false);
    if (index + 1 < words.length) {
      setIndex(index + 1);
    } else {
      onFinishedAll();
      setShowFinished(true)
    //   setIndex(0)
    //   alert("خوب کار کردی — همهٔ کلمات تمام شد! 🎉");
    }
  };
   const restGame = ()=>{
        setIndex(0);
        setShowFinished(false)
   }

  const onResetCard = () => {
    loadWord(index);
  };

  // render
  const cellSize = 56;
  const w = words[index];
  if (!w) return <div className="container py-4">هیچ کلمه‌ای تعریف نشده است.</div>;

  return (
    <div className="container py-3" style={{ direction: "rtl" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", background: "#fff", padding: 12, borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
          {/* تصویر */}
          <div style={{ flexShrink: 0 }}>
            {w.image ? (
              <img src={w.image} alt={w.title || w.word} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10 }} />
            ) : (
              <div style={{ width: 80, height: 80, borderRadius: 10, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>{w.title || w.word}</div>
            )}
          </div>

          {/* عنوان و جهت */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{w.title || w.word}</div>
            <div style={{ color: "#6b7280", marginTop: 6 }}>{w.direction === "vertical" ? "جهت: عمودی ↕" : "جهت: افقی ↔"}</div>

            {/* سلول‌ها (ما DOM را طوری می‌سازیم که سلولِ راست‌ترین، ابتدا رندر شود) */}
            <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {w.direction === "horizontal" ? (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {
                    // رندر از راست به چپ: ابتدا idx = n-1 سپس n-2 ... 0
                    Array.from({ length: placed.length }).map((_, visIndex) => {
                      const underlyingIdx = placed.length - 1 - visIndex; // تبدیل index دیداری -> اندیس منطقی
                      const p = placed[underlyingIdx];
                      const isWrong = wrongMask[underlyingIdx];
                      return (
                        <div
                          key={underlyingIdx}
                          onClick={() => handleCellClick(underlyingIdx)}
                          style={{
                            width: cellSize,
                            height: cellSize,
                            borderRadius: 8,
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                            cursor: solved ? "default" : "pointer",
                            border: isWrong ? "2px solid #ef4444" : "1px solid #e6e7eb",
                            color: isWrong ? "#ef4444" : "#111827",
                            fontSize: 26,
                            fontWeight: 900,
                            fontFamily: "'Vazirmatn', Tahoma, sans-serif",
                          }}
                        >
                          <div style={{ direction: "rtl" }}>{p || ""}</div>
                        </div>
                      );
                    })
                  }
                </div>
              ) : (
                <div style={{ display: "flex", gap: 8, flexDirection: "column", alignItems: "center" }}>
                  {placed.map((p, i) => (
                    <div
                      key={i}
                      onClick={() => handleCellClick(i)}
                      style={{
                        width: cellSize,
                        height: cellSize,
                        borderRadius: 8,
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                        cursor: solved ? "default" : "pointer",
                        border: wrongMask[i] ? "2px solid #ef4444" : "1px solid #e6e7eb",
                        color: wrongMask[i] ? "#ef4444" : "#111827",
                        fontSize: 26,
                        fontWeight: 900,
                        fontFamily: "'Vazirmatn', Tahoma, sans-serif",
                      }}
                    >
                      <div style={{ direction: "rtl" }}>{p || ""}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* نوار کاشی‌ها */}
            <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              {tiles.length === 0 && <div style={{ color: "#6b7280" }}>کاشی‌ای باقی نمانده</div>}
              {tiles.map((t, ti) => (
                <div
                  key={ti}
                  onClick={() => handleTileClick(ti)}
                  style={{
                    minWidth: 48,
                    height: 48,
                    borderRadius: 8,
                    background: "#ffd57e",
                    color: "#111827",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 800,
                    cursor: solved ? "default" : "pointer",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ direction: "rtl" }}>{t}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 8, justifyContent: "center" }}>
              <button className="btn btn-sm btn-outline-secondary" onClick={onResetCard}>دوباره</button>
              {solved ? (
                <button className="btn btn-sm btn-primary" onClick={onNext}>بعدی</button>
              ) : null}
            </div>

          </div>
        </div>

        {/* سورپرایز */}
        {showSurprise && (
          <div style={{ position: "fixed", left: 0, top: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <div style={{ pointerEvents: "auto", background: "rgba(255,255,255,0.98)", padding: 20, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.15)", textAlign: "center" }}>
              <ConfettiSVG />
              <div style={{ fontSize: 22, fontWeight: 900, marginTop: 8 }}>آفرین! درست نوشتی 🎉</div>
              <div style={{ marginTop: 10 }}>
                <button className="btn btn-sm btn-success" onClick={() => { setShowSurprise(false); setSolved(true); }}>باشه</button>
                <button className="btn btn-sm btn-primary ms-2" onClick={onNext}>بعدی</button>
              </div>
            </div>
          </div>
        )}
        {/* پیام پایان بازی */}
        {showFinished && (
          <div style={{ position: "fixed", left: 0, top: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <div style={{ pointerEvents: "auto", background: "rgba(255,255,255,0.98)", padding: 20, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.15)", textAlign: "center" }}>
              <ConfettiSVG />
              <div style={{ fontSize: 22, fontWeight: 900, marginTop: 8 }}> بازی تمام شد. 🎉</div>
              <div style={{ marginTop: 10 }}>
                {/* <button className="btn btn-sm btn-success" onClick={() => { setShowSurprise(false); setSolved(true); }}>باشه</button> */}
                <button className="btn btn-sm btn-primary ms-2" onClick={restGame}>شروع بازی </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// افکت سادهٔ کنفتی
function ConfettiSVG() {
  return (
    <div style={{ width: 220, height: 120, margin: "0 auto", position: "relative" }}>
      <div style={{ position: "absolute", left: 20, top: 10, animation: "floatUp 1.6s ease-out forwards" }}>🎈</div>
      <div style={{ position: "absolute", left: 80, top: 20, animation: "floatUp 1.8s ease-out .1s forwards" }}>✨</div>
      <div style={{ position: "absolute", left: 140, top: 10, animation: "floatUp 1.7s ease-out .05s forwards" }}>🎉</div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(30px) scale(0.7); opacity: 0 }
          40% { opacity: 1 }
          100% { transform: translateY(-20px) scale(1.05); opacity: 1 }
        }
      `}</style>
    </div>
  );
}
