import React, { useState } from "react";

export default function SunWords() {
  const words = [
    "خورشید","موج","نور","دو","مرز","نوبت","خوش","جو","بعد","روشنی"
  ];

  const [rotationDeg, setRotationDeg] = useState(0);
  const [rotating, setRotating] = useState(false);
  const [selected, setSelected] = useState(null);

  const norm = (x) => ((x % 360) + 360) % 360;

  const handleClick = () => {
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
      setRotating(false);
    }, durationMs);
  };

  const radius = 160;

  return (
    <div style={styles.wrap}>
      {/* حلقه کلمات */}
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
            translate(${radius +80}px , 220px)
            rotate(${ 150}deg)
          `;

          const finalTransform = isSel
            ? `${baseTransform} translate(0,-18px) scale(1.5)`
            : baseTransform;

          return (
            <div
              key={i}
              style={{
                ...styles.wordBox,
                ...(isSel ? styles.wordBoxSelected : {}),
                transform: finalTransform,
              }}
            >
              {w}
            </div>
          );
        })}
      </div>

      {/* دایره وسط */}
      <div style={styles.center} onClick={handleClick}>
        و
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
  center: {
    width: 120,
    height: 120,
    background: "#ffd54f",
    color: "#222",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 48,
    fontWeight: 700,
    position: "absolute",
    cursor: "pointer",
    zIndex: 3,
    boxShadow: "0 6px 16px rgba(0,0,0,.15)",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
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
    background: "#ffa726",
    borderRadius: 12,
    fontSize: 20,
    boxShadow: "0 4px 10px rgba(0,0,0,.12)",
    transition: "transform .4s ease, background .3s ease",
    whiteSpace: "nowrap",
    transformOrigin: "0 0", // این باعث می‌شود حلقه دقیقاً دور مرکز بچرخد
  },
  wordBoxSelected: {
    background: "#ff6f61",
    zIndex: 2,
    fontWeight: 700,
  },
};
