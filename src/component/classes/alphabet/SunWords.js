import React, { useState, useEffect } from "react";

export default function SunWords() {
  const categories = {
    تست: {
      circle: "معصومه",
      boxes: ["mujtaba", "fatima", "zahra"]
    },
    ریست: {
      circle: "2معصومه",
      boxes: ["mujtaba2", "fatima2", "zahra2"]
    }
  };

  const colors = [
    "#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#2196f3",
    "#009688", "#4caf50", "#ff9800", "#795548", "#607d8b"
  ];

  const [category, setCategory] = useState("تست"); // دسته انتخابی
  const [words, setWords] = useState(categories["تست"].boxes);
  const [circleText, setCircleText] = useState(categories["تست"].circle);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [rotating, setRotating] = useState(false);
  const [selected, setSelected] = useState(null);
  const [circleColor, setCircleColor] = useState("#ffd54f");
  const [finished, setFinished] = useState(false);
  const [showListSun, setShowListSun] = useState(false);

  const norm = (x) => ((x % 360) + 360) % 360;

  const handleClick = () => {
    if (finished) {
      setWords(categories[category].boxes);
      setRotationDeg(0);
      setSelected(null);
      setCircleColor("#ffd54f");
      setFinished(false);
      return;
    }

    if (selected !== null) {
      const newWords = words.filter((_, i) => i !== selected);
      setWords(newWords);
      setSelected(null);
      setCircleColor("#ffd54f");

      if (newWords.length === 0) {
        setFinished(true);
      }
      return;
    }

    if (words.length === 0) return;

    setRotating(true);
    const anglePer = 360 / words.length;
    const idx = Math.floor(Math.random() * words.length);
    const angleOfIdx = idx * anglePer;

    const base = norm(rotationDeg);
    const deltaToTop = norm(-90 - angleOfIdx - base);

    const extraTurns = 2;
    const target = rotationDeg + extraTurns * 360 + deltaToTop;

    setRotationDeg(target);

    const durationMs = 2200;
    setTimeout(() => {
      setSelected(idx);
      setCircleColor(colors[idx % colors.length]);
      setRotating(false);
    }, durationMs);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const radius = 160;

  return (
    <div className="border border-danger container" style={{ display: "flex", gap: "20px" }}>
      {/* فهرست دسته‌ها */}
        <div style={styles.sidebar}>
          <h3 className="btn btn-success" onClick={()=>setShowListSun(!showListSun)}>دسته‌بندی‌ها</h3>
      {showListSun && 
          <ul>
            {Object.keys(categories).map((cat) => (
              <li key={cat} style={{ marginBottom: "10px" }}>
                <button
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    background: category === cat ? "#4caf50" : "#ddd",
                    color: category === cat ? "#fff" : "#000",
                    width: "100%",
                  }}
                  onClick={() => {
                    setCategory(cat);
                    setWords(categories[cat].boxes);
                    setCircleText(categories[cat].circle);
                    setSelected(null);
                    setRotationDeg(0);
                    setFinished(false);
                    setCircleColor("#ffd54f");
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
      }
      </div>

      {/* بخش اصلی */}
      <div style={styles.wrap}>
        <div
          style={{
            ...styles.ring,
            transform: `rotate(${rotationDeg}deg)`,
            transition: rotating ? "transform 2.2s ease-out" : "none",
          }}
        >
          {words.map((w, i) => {
            const angle = (i / words.length) * 360;
            const isSel = selected === i;

            const baseTransform = `
              rotate(${angle - 60}deg)
              translate(${radius + 80}px , 220px)
              rotate(150deg)
            `;

            const finalTransform = isSel
              ? `${baseTransform} translate(0,-18px) scale(2.5)`
              : baseTransform;

            return (
              <div
                key={i}
                style={{
                  ...styles.wordBox,
                  background: colors[i % colors.length],
                  ...(isSel ? styles.wordBoxSelected : {}),
                  transform: finalTransform,
                  opacity: selected !== null && !isSel ? 0.4 : 1,
                }}
              >
                {w}
              </div>
            );
          })}
        </div>

        <div
          style={{ ...styles.center, background: circleColor }}
          onClick={handleClick}
        >
          {finished ? "آفرین! 🎉" : circleText}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    width: 480,
    height: 680,
    position: "relative",
    margin: "24px auto",
    userSelect: "none",
    fontFamily: "Tahoma, Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebar: {
    width: "200px",
    background: "#f9f9f9",
    padding: "12px",
    borderRadius: "12px",
    fontFamily: "Tahoma",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,.1)",
  },
  center: {
    width: 160,
    height: 160,
    color: "#222",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
    position: "absolute",
    cursor: "pointer",
    zIndex: 3,
    boxShadow: "0 6px 16px rgba(0,0,0,.15)",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "background .4s ease",
    padding: "10px",
  },
  ring: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wordBox: {
    position: "absolute",
    left: "50%",
    top: "50%",
    padding: "19px 14px",
    borderRadius: 12,
    fontSize: 20,
    boxShadow: "0 4px 10px rgba(0,0,0,.12)",
    transition: "transform .4s ease, background .3s ease, opacity .3s ease",
    whiteSpace: "nowrap",
    transformOrigin: "0 0",
    color: "#fff",
    fontWeight: 600,
  },
  wordBoxSelected: {
    zIndex: 2,
    transform: "scale(1.5)",
  },
};
