import React, { useRef, useEffect, useState } from "react";

export default function PoolWordGame() {
  const canvasRef = useRef(null);
  const ballRef = useRef({
    x: 300,
    y: 200,
    vx: 0,
    vy: 0,
    visible: true,
    word: null,
  });

  const [aim, setAim] = useState(null);
  const [message, setMessage] = useState(null);
  const [scale, setScale] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  // لیست اصلی کلمات
  const words = [
    "مُجتَبی","فاطِمه","زَهرا","عَلی","حَسَن","حُسَین",
    "سَجّاد","باقِر","صادِق","کاظِم","رِضا","جَواد","هادی","عَسکَری","مَهدی"
  ];

  const [remainingWords, setRemainingWords] = useState([...words]);

  const ballRadius = 15;
  const pocketRadius = 25;

  const pockets = [
    { x: 0, y: 0 },
    { x: 300, y: 0 },
    { x: 600, y: 0 },
    { x: 0, y: 400 },
    { x: 300, y: 400 },
    { x: 600, y: 400 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // سوراخ‌ها
      ctx.fillStyle = "black";
      pockets.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, pocketRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // توپ
      if (ballRef.current.visible) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(ballRef.current.x, ballRef.current.y, ballRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // خط نشونه
      if (aim && ballRef.current.visible) {
        ctx.strokeStyle = "red";
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(ballRef.current.x, ballRef.current.y);
        ctx.lineTo(aim.x, aim.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    function update() {
      const b = ballRef.current;

      if (b.visible) {
        b.x += b.vx;
        b.y += b.vy;

        // اصطکاک
        b.vx *= 0.98;
        b.vy *= 0.98;
        if (Math.abs(b.vx) < 0.01) b.vx = 0;
        if (Math.abs(b.vy) < 0.01) b.vy = 0;

        // برخورد با دیواره‌ها
        if (b.x - ballRadius < 0 || b.x + ballRadius > canvas.width) {
          b.vx *= -1;
          b.x = Math.max(ballRadius, Math.min(canvas.width - ballRadius, b.x));
        }
        if (b.y - ballRadius < 0 || b.y + ballRadius > canvas.height) {
          b.vy *= -1;
          b.y = Math.max(ballRadius, Math.min(canvas.height - ballRadius, b.y));
        }

        // بررسی گل شدن
// بررسی گل شدن
for (let p of pockets) {
  const dist = Math.hypot(b.x - p.x, b.y - p.y);

  if (dist < pocketRadius && b.visible && !b.word && remainingWords.length > 0) {
    b.visible = false;
    b.vx = 0;
    b.vy = 0;

    // انتخاب یک کلمه تصادفی از remainingWords و حذف آن
    const wordsCopy = [...remainingWords];
    const randomIndex = Math.floor(Math.random() * wordsCopy.length);
    const nextWord = wordsCopy.splice(randomIndex, 1)[0]; // حذف و گرفتن کلمه
    b.word = nextWord;
    setRemainingWords(wordsCopy);

    setMessage(nextWord);
    setScale(0.5);
    setGameOver(true);

    // انیمیشن بزرگ شدن
    let s = 0.5;
    function animateScale() {
      s += 0.03;
      if (s <= 2) {
        setScale(s);
        requestAnimationFrame(animateScale);
      }
    }
    animateScale();
  }
}
      }
    }

    function loop() {
      update();
      draw();
      requestAnimationFrame(loop);
    }

    loop();
  }, [remainingWords, aim]);

  const handleMouseDown = (e) => {
    if (!ballRef.current.visible || gameOver) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const d = Math.hypot(x - ballRef.current.x, y - ballRef.current.y);
    if (d < ballRadius + 5) setAim({ x, y });
  };

  const handleMouseMove = (e) => {
    if (!aim) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setAim({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseUp = () => {
    if (!aim) return;
    const dx = ballRef.current.x - aim.x;
    const dy = ballRef.current.y - aim.y;
    ballRef.current.vx = dx * 0.05;
    ballRef.current.vy = dy * 0.05;
    setAim(null);
  };

  const handleContinue = () => {
    if (remainingWords.length === 0 && !ballRef.current.word) {
      setMessage("🎉 همه‌ی کلمات نمایش داده شدند!");
      return;
    }

    ballRef.current.x = 300;
    ballRef.current.y = 200;
    ballRef.current.vx = 0;
    ballRef.current.vy = 0;
    ballRef.current.visible = true;

    // پاک کردن کلمه جاری
    ballRef.current.word = null;
    setMessage(null);
    setScale(1);
    setGameOver(false);
  };

  const handleReset = () => {
    setRemainingWords([...words]);
    handleContinue();
  };

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{ border: "2px solid green", borderRadius: "10px", background: "#075E12" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />

      {/* نمایش کلمه */}
      {message && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) scale(${scale})`,
            transition: "transform 0.2s linear",
            fontSize: "36px",
            fontWeight: "bold",
            color: "#FFD700",
            textShadow: "3px 3px 8px black, 0 0 20px #ff0",
            background: "rgba(0,0,0,0.3)",
            padding: "10px 20px",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        >
          {message}
        </div>
      )}

      {gameOver && remainingWords.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleContinue}
            style={{
              margin: "5px",
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "orange",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ادامه بازی
          </button>
          <button
            onClick={handleReset}
            style={{
              margin: "5px",
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ریست کامل
          </button>
        </div>
      )}
    </div>
  );
}
