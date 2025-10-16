import { nanoid } from "nanoid";
import React, {useEffect, useState } from "react";

// اگر WordCardsSingle نسخهٔ فعلی‌ت رو داری، آن را ایمپورت کن.
// در این مثال فرض می‌کنیم WordCardsSingle یک prop به نام `initialWords` می‌پذیرد.
// اگر کامپوننت فعلی‌ات از آرایهٔ داخلی استفاده می‌کند، لازم است آن را طوری تغییر دهی
// که از prop استفاده کند (نمونه‌ای پایین می‌دهم).

const collections = {
  "میوه‌ها": [
    { id: nanoid(), word: "سیب", image: "https://media.istockphoto.com/id/686309840/vector/sticker-red-apple-with-stem.jpg?s=612x612&w=0&k=20&c=4QPpObM-Ya-FtLxi3VPeQ-LTno8c0KgWrJknfLNhEro=", title: "Apple", direction: "horizontal", extraTiles: ["گ"] },
    { id: nanoid(), word: "عسل", image: "https://img.freepik.com/free-vector/cute-honey-bee-hug-honeycomb-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6880.jpg?semt=ais_hybrid&w=740&q=80", title: "Honey", direction: "horizontal", extraTiles: ["ک","پ"] },
  ],
  "وسایل مدرسه": [
    { id: nanoid(), word: "قیچی", image: "https://charatoon.com/photo/10081.png", title: "Scissors", direction: "horizontal", extraTiles: ["ل","م"] },
    { id: nanoid(), word: "خط کش", image: "https://i.pinimg.com/736x/07/04/cd/0704cda084fddf29a8d40a447977d422.jpg", title: "Ruler", direction: "horizontal", extraTiles: ["ف","س","ا"] },
    { id: nanoid(), word: "صندلی", image: "https://thumbs.dreamstime.com/b/d-rendering-school-chair-isolated-white-background-ideal-education-classroom-furniture-related-themes-cartoon-366915616.jpg", title: "Chair", direction: "horizontal", extraTiles: ["گ","ب"] },
    { id: nanoid(), word: "کاغذ", image: "https://img.freepik.com/premium-vector/hand-drawn-paper-cartoon-illustration_23-2151474658.jpg", title: "Paper", direction: "horizontal", extraTiles: ["ش","ک"] },
    { id: nanoid(), word: "چسب", image: "https://png.pngtree.com/png-clipart/20250531/original/pngtree-cute-cartoon-glue-bottle-school-supplies-adhesive-craft-png-image_21103651.png", title: "Glue", direction: "horizontal", extraTiles: ["ل","ر"] },
    { id: nanoid(), word: "خودکار", image: "https://img.pixers.pics/pho_wat(s3:700/FO/24/26/87/32/700_FO24268732_c18e5e8a5fd6dafd334266cad5337614.jpg,358,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,138,650,jpg)/wall-murals-pen-cartoon.jpg.jpg", title: "Pen", direction: "horizontal", extraTiles: ["ه","ن"] },
    { id: nanoid(), word: "ماژیک", image: "https://cdn.vectorstock.com/i/500p/19/21/cheerful-cartoon-marker-pen-vector-51341921.jpg", title: "Whiteboard Marker", direction: "horizontal", extraTiles: ["ح","د"] },
    { id: nanoid(), word: "پاک‌کن", image: "https://thumbs.dreamstime.com/z/cartoon-happy-eraser-illustration-53892555.jpg", title: "Eraser", direction: "horizontal", extraTiles: ["ز","ط"] },
    { id: nanoid(), word: "کیف", image: "https://t4.ftcdn.net/jpg/15/14/49/97/360_F_1514499759_4ws45WRpsZvVJvGmbCP5iE5jNXoYgrbj.jpg", title: "Bag", direction: "horizontal", extraTiles: ["ض","و"] },
    { id: nanoid(), word: "مداد", image: "https://i.etsystatic.com/40533556/r/il/b58af9/6112668721/il_1080xN.6112668721_qfn0.jpg", title: "Pencil", direction: "horizontal", extraTiles: ["ه","ص"] },
    { id: nanoid(), word: "کتاب", image: "https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700423/83227038-vector-illustration-of-book-cartoon-on-pile-book.jpg", title: "Book", direction: "horizontal", extraTiles: ["ش","گ"] },
    { id: nanoid(), word: "جامدادی", image: "https://previews.123rf.com/images/clairev/clairev1807/clairev180700082/114771248-pencil-case-theme-image-2-eps10-vector-illustration.jpg", title: "Pencil Case", direction: "horizontal", extraTiles: ["ط","پ"] },
    { id: nanoid(), word: "دفتر", image: "https://charatoon.com/photo/3626.png", title: "Notebook", direction: "horizontal", extraTiles: ["ص","چ"] },
    { id: nanoid(), word: "میز", image: "https://www.shutterstock.com/image-vector/school-desk-chair-260nw-613913594.jpg",title: "Desk / Table", direction: "horizontal", extraTiles: ["ط","ظ"] },
    { id: nanoid(), word: "تراش", image: "https://thumbs.dreamstime.com/b/pencil-sharpener-15057545.jpg",title: "Sharpener", direction: "horizontal", extraTiles: ["ل","ی"] },
  ],
};

export default function SpellingGame() {

// CollectionPicker.jsx

/*
Props:
- collections: { [categoryName]: Array<{ id, word, image, title? }> }
- onPlay: function(categoryKey, items) called when user clicks "شروع بازی"
*/
// ******************************* start CollectionPicker***************************
 function CollectionPicker({ collections = {}, onPlay = () => {} }) {
  const keys = Object.keys(collections);
  const [selectedKey, setSelectedKey] = useState(keys.length ? keys[0] : null);

  const selectKey = (k) => {
    setSelectedKey(k);
  };

  const selectedItems = selectedKey ? collections[selectedKey] : [];

  return (
    <div className="container py-3" style={{ direction: "rtl" }}>
      <h5 className="text-center mb-3" style={{ fontWeight: 800 }}>انتخاب مجموعه</h5>

      {/* دکمه‌های دسته‌ها */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
        {keys.length === 0 && <div className="text-muted">مجموعه‌ای تعریف نشده است.</div>}
        {keys.map((k) => (
          <button
            key={k}
            onClick={() => selectKey(k)}
            className={`btn ${selectedKey === k ? "btn-primary" : "btn-outline-primary"}`}
            style={{ borderRadius: 999 }}
          >
            {k} <span className="badge bg-light text-dark ms-2">{collections[k].length}</span>
          </button>
        ))}
      </div>

      {/* منطقهٔ نمایش مجموعهٔ انتخاب‌شده */}
      <div className="card p-3" style={{ borderRadius: 12 }}>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div style={{ fontWeight: 700 }}>{selectedKey || "هیچ مجموعه‌ای انتخاب نشده"}</div>
          <div>
            <button
              className="btn btn-sm btn-success"
              onClick={() => onPlay(selectedKey, selectedItems)}
              disabled={!selectedKey || selectedItems.length === 0}
            >
              شروع بازی
            </button>
          </div>
        </div>

        {(!selectedKey || selectedItems.length === 0) ? (
          <div className="text-center text-muted py-4">یکی از مجموعه‌ها را از بالا انتخاب کنید.</div>
        ) : (
          <div className="d-flex gap-3 flex-wrap justify-content-center">
            {selectedItems.map((it) => (
              <div key={it.id} className="card text-center p-2" style={{ width: 120, borderRadius: 10 }}>
                <div style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {it.image ? (
                    <img src={it.image} alt={it.word} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: 6 }} />
                  ) : (
                    <div style={{ fontSize: 24, fontWeight: 700 }}>{it.word}</div>
                  )}
                </div>
                <div style={{ marginTop: 8, fontWeight: 700 }}>{it.word}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
// ******************************* End CollectionPicker*****************************


// WordCardSingle Start***********************************************************
// WordCardsSingleComponent.jsx

 function WordCardsSingle({ initialWords = null, onFinishedAll = () => {} }) {
  const defaultWords  = [
    { id: 1, word: "سیب", image: "https://media.istockphoto.com/id/686309840/vector/sticker-red-apple-with-stem.jpg?s=612x612&w=0&k=20&c=4QPpObM-Ya-FtLxi3VPeQ-LTno8c0KgWrJknfLNhEro=", title: "Apple", direction: "horizontal", extraTiles: ["گ"] },
    { id: 2, word: "عسل", image: "https://img.freepik.com/free-vector/cute-honey-bee-hug-honeycomb-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6880.jpg?semt=ais_hybrid&w=740&q=80", title: "Honey", direction: "horizontal", extraTiles: ["ک","پ"] },
    // ... اگر واژه‌های بیشتری داری اضافه کن
  ];

  const words = Array.isArray(initialWords) && initialWords.length ? initialWords : defaultWords;

  // تنظیمات
  const SURPRISE_DELAY = 550; // ms
  const MODAL_ANIM_MS = 520;  // ms

  const [index, setIndex] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [placed, setPlaced] = useState([]);
  const [wrongMask, setWrongMask] = useState([]);
  const [solved, setSolved] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    loadWord(index);
    setShowSurprise(false);
    setShowFinished(false);
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
    const letters = Array.from(w.word);
    const extras = Array.isArray(w.extraTiles) ? w.extraTiles : [];
    const all = shuffle([...letters, ...extras]);
    setTiles(all);
    setPlaced(Array(letters.length).fill(null));
    setWrongMask(Array(letters.length).fill(false));
    setSolved(false);
  }

  const firstEmptyFromRight = (placedArr) => {
    for (let i = placedArr.length - 1; i >= 0; i--) {
      if (!placedArr[i]) return i;
    }
    return -1;
  };

  const handleTileClick = (tileIdx) => {
    if (solved) return;
    const targetIdx = firstEmptyFromRight(placed);
    if (targetIdx === -1) return;
    setPlaced((prev) => {
      const np = [...prev];
      np[targetIdx] = tiles[tileIdx];
      return np;
    });
    setTiles((prev) => {
      const nt = [...prev];
      nt.splice(tileIdx, 1);
      return nt;
    });
  };

  const handleCellClick = (underlyingIdx) => {
    if (solved) return;
    if (!placed[underlyingIdx]) return;
    const removed = placed[underlyingIdx];
    setPlaced((prev) => {
      const np = [...prev];
      np[underlyingIdx] = null;
      return np;
    });
    setTiles((prev) => shuffle([...prev, removed]));
  };

  // بررسی جواب وقتی پر شد — با جلوگیری از به‌روزرسانی بی‌دلیل wrongMask
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
        setTimeout(() => setShowSurprise(true), SURPRISE_DELAY);
      } else {
        const finalMask = mask.map((m) => !m);
        const newMask = shouldReverseMask ? finalMask.reverse() : finalMask;
        // فقط اگر newMask با wrongMask فعلی متفاوت بود آپدیت کن
        const same = newMask.length === wrongMask.length && newMask.every((v, i) => v === wrongMask[i]);
        if (!same) setWrongMask(newMask);
      }
    } else {
      // فقط وقتی قبلاً یک true وجود داشته باشد، آن‌را پاک کنیم (تا از رندر بی‌پایان جلوگیری شود)
      setWrongMask((prev) => {
        const hasAnyTrue = Array.isArray(prev) && prev.some((v) => v === true);
        if (!hasAnyTrue) return prev;
        return prev.map(() => false);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placed, index, solved]); // حذف words از وابستگی تا باعث رندر اضافه نشود (words ثابت است)

  const onNext = () => {
    setShowSurprise(false);
    if (index + 1 < words.length) {
      setIndex(index + 1);
    } else {
      onFinishedAll();
      setShowFinished(true);
    }
  };

  const restGame = () => {
    setIndex(0);
    setShowFinished(false);
  };

  const onResetCard = () => {
    loadWord(index);
  };

  const cellSize = 50;
  const w = words[index];
  if (!w) return <div className="container py-4">هیچ کلمه‌ای تعریف نشده است.</div>;

  return (
    <div className="container py-3" style={{ direction: "rtl" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="row " style={{ display: "flex", gap: 12, alignItems: "center", background: "#fff", padding: 12, borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
          <div className="me-0 me-md-5 " style={{ flexShrink: 0 }}>
            {w.image ? (
              <img src={w.image} alt={w.title || w.word} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10 }} />
            ) : (
              <div style={{ width: 80, height: 80, borderRadius: 10, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>{w.title || w.word} </div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{w.title || w.word}</div>
            <div style={{ color: "#6b7280", marginTop: 6 }}>{w.direction === "vertical" ? "جهت: عمودی ↕" : "جهت: افقی ↔"}</div>

            <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {w.direction === "horizontal" ? (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {Array.from({ length: placed.length }).map((_, visIndex) => {
                    const underlyingIdx = placed.length - 1 - visIndex;
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
                          transition: "transform 260ms cubic-bezier(.2,.9,.3,1), box-shadow 260ms, background 200ms",
                          transform: p ? "scale(1.02)" : "scale(1)",
                        }}
                      >
                        <div style={{ direction: "rtl" }}>{p || ""}</div>
                      </div>
                    );
                  })}
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
                        transition: "transform 260ms cubic-bezier(.2,.9,.3,1), box-shadow 260ms",
                        transform: p ? "scale(1.02)" : "scale(1)",
                      }}
                    >
                      <div style={{ direction: "rtl" }}>{p || ""}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              {tiles.length === 0 && <div style={{ color: "#6b7280" }}>کاشی‌ای باقی نمانده</div>}
              {tiles.map((t, ti) => (
                <div
                  key={ti}
                  onClick={() => handleTileClick(ti)}
                  style={{
                    minWidth: 40,
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
                    transition: "transform 220ms ease, opacity 220ms ease",
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
          <div className="modal-overlay" style={{ animationDuration: `${MODAL_ANIM_MS}ms` }}>
            <div className="modal-card" style={{ animationDuration: `${MODAL_ANIM_MS}ms` }}>
              <div className="gif-wrap">
                <img className="gif-img" src="https://i.pinimg.com/originals/f2/58/d1/f258d1c684f9f51903d782aaa9328d3b.gif" alt="surprise" />
              </div>

              <div className="confetti-container" aria-hidden>
                <ConfettiSVG burst="small" />
              </div>

              <div style={{ fontSize: 22, fontWeight: 900, marginTop: 8 }}>آفرین! درست نوشتی 🎉</div>
              <div style={{ marginTop: 10 }}>
                <button className="btn btn-sm btn-success" onClick={() => { setShowSurprise(false); }}>باشه</button>
                <button className="btn btn-sm btn-primary ms-2" onClick={onNext}>بعدی</button>
              </div>
            </div>
          </div>
        )}

        {/* پایان بازی */}
        {showFinished && (
          <div className="modal-overlay" style={{ animationDuration: `${MODAL_ANIM_MS}ms` }}>
            <div className="modal-card" style={{ animationDuration: `${MODAL_ANIM_MS}ms` }}>
              <div className="gif-wrap">
                <img className="gif-img" src="https://www.gifcen.com/wp-content/uploads/2024/01/well-done-gif-2.gif" alt="finished" />
              </div>

              {/* <div className="confetti-container" aria-hidden>
                <ConfettiSVG burst="big" />
              </div> */}

              <div style={{ fontSize: 22, fontWeight: 900, marginTop: 8 }}>بازی تمام شد. 🎉</div>
              <div style={{ marginTop: 10 }}>
                <button className="btn btn-sm btn-primary ms-2" onClick={restGame}>شروع بازی</button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* استایل‌ها */}
      <style>{`
        .modal-overlay {
          position: fixed;
          left: 0; top: 0; right: 0; bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.28);
          z-index: 9999;
          animation-name: overlayFade;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
        .modal-card {
          pointer-events: auto;
          background: rgba(255,255,255,0.98);
          padding: 18px 20px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          text-align: center;
          max-width: 88%;
          width: 420px;
          transform-origin: center;
          animation-name: popIn;
          animation-timing-function: cubic-bezier(.12,.8,.26,1);
          animation-fill-mode: both;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @keyframes overlayFade {
          0% { background: rgba(0,0,0,0); }
          100% { background: rgba(0,0,0,0.28); }
        }
        @keyframes popIn {
          0% { transform: translateY(18px) scale(0.88); opacity: 0; filter: blur(2px); }
          60% { transform: translateY(-6px) scale(1.02); opacity: 1; filter: blur(0); }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* GIF */
        .gif-wrap {
          width: 180px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 8px;
          background: transparent;
          margin: 0 auto 14px;
        }
        .gif-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
          display: block;
        }

        /* کانتینر کنفتی */
        .confetti-container {
          width: 100%;
          max-width: 320px;
          height: 92px;
          margin: 0 auto 10px;
          position: relative;
          overflow: visible;
        }

        .confetti-piece {
          position: absolute;
          top: 8px;
          font-size: 20px;
          opacity: 0;
          animation-name: confettiFall;
          animation-timing-function: cubic-bezier(.2,.8,.25,1);
          animation-fill-mode: forwards;
          will-change: transform, opacity;
        }
        @keyframes confettiFall {
          0% { transform: translateY(-8px) rotate(0deg) scale(0.8); opacity: 0; }
          30% { opacity: 1; transform: translateY(6px) rotate(20deg) scale(1.05); }
          100% { transform: translateY(70px) rotate(280deg) scale(1); opacity: 1; }
        }

        /* ریسپانسیو کوچک */
        @media (max-width: 420px) {
          .gif-wrap { width: 140px; height: 96px; margin-bottom: 12px; }
          .confetti-container { height: 72px; margin-bottom: 8px; }
          .confetti-piece { font-size: 18px; top: 6px; }
          .modal-card { width: 92%; padding: 14px; }
        }
      `}</style>
    </div>
  );
}
// ************************************************* End WordCardSingle***********


/* Confetti: افست افقی با left: calc(50% + offset) تا با transform تداخل نکند */
function ConfettiSVG({ burst = "small" }) {
  const pieces = burst === "big" ? 10 : 6;
  const icons = ["🎈", "✨", "🎉", "⭐", "💫", "🍬", "🎀"];
  const spread = 160; // پهنای پراکندگی افقی (قابل تنظیم)

  const arr = Array.from({ length: pieces }).map((_, i) => {
    const offset = Math.round((i - (pieces - 1) / 2) * (spread / pieces));
    const delay = 0.04 * i;
    const scale = 0.9 + Math.random() * 0.4;
    const icon = icons[i % icons.length];
    return { offset, delay, scale, icon, idx: i };
  });

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {arr.map((it) => (
        <div
          key={it.idx}
          className="confetti-piece"
          style={{
            left: `calc(50% + ${it.offset}px)`,
            top:"-50px",
            animationDuration: `${700 + it.idx * 90}ms`,
            animationDelay: `${it.delay}s`,
            transform: `translateY(0) scale(${it.scale})`,
          }}
        >
          {it.icon}
        </div>
      ))}
    </div>
  );
}

// it is for Spelling Game componene
  const [playingItems, setPlayingItems] = useState(null);
  const [playingTitle, setPlayingTitle] = useState("");

  const handlePlay = (key, items) => {
    if (!key || !items || items.length === 0) return;
    setPlayingTitle(key);
    // تبدیل داده‌ها به فرمت مورد نیاز WordCardsSingle (در مثال کلمه فقط نیاز است)
    // اگر WordCardsSingle نیاز به ساختار متفاوتی دارد آن را متناسب کن
    const wordsForGame = items.map((it) => ({
      id: it.id,
      word: it.word,
      image: it.image,
      title: it.title,
      direction: "horizontal", // یا بر اساس تنظیمات خود
      extraTiles: it.extraTiles, // می‌توانی اینجا اضافه کنی
    }));
    setPlayingItems(wordsForGame);
  };

  const handleFinishedAll = () => {
    // وقتی بازی تمام شد، به لیست برگرد
    setPlayingItems(null);
    setPlayingTitle("");
  };

  return (
    <div>
      {!playingItems ? (
        <CollectionPicker collections={collections} onPlay={handlePlay} />
      ) : (
        <div className="my-5 rounded py-5" style={{ direction: "rtl", background:"linear-gradient(135deg, #84FAB0, #8FD3F4)",position:"relative" }}>
            <div className="d-none  d-lg-block" style={{position:"absolute",width:"180px",top:"45%",right:"55px"}}>
                <img className="w-100 " src="https://cdn-icons-png.flaticon.com/256/10774/10774986.png"  alt="" />
            </div>
          <div className="d-flex align-items-center justify-content-between mb-2" style={{ maxWidth: 720, margin: "8px auto" }}>
            <h5 style={{ margin: 0 }}>{playingTitle}</h5>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => { setPlayingItems(null); setPlayingTitle(""); }}>بازگشت</button>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {/* پاس دادن words به WordCardsSingle */}
            <WordCardsSingle initialWords={playingItems} onFinishedAll={handleFinishedAll} />
          </div>
        </div>
      )}
    </div>
  );
}
