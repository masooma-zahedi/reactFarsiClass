import React, { useRef, useEffect, useState } from "react";

export default function PoolWordGame() {
  const canvasRef = useRef(null);
  const ballRef = useRef({ x: 300, y: 200, vx: 0, vy: 0, visible: true });

  const [aim, setAim] = useState(null);
  const [message, setMessage] = useState(null); // پیام کلمه
  const [gameOver, setGameOver] = useState(false); // وضعیت پایان بازی

  const ballRadius = 15;
  const pocketRadius = 25;

  const pockets = [
    { x: 0, y: 0, word: "مُجتَبی" },
    { x: 300, y: 0, word: "فاطِمه" },
    { x: 600, y: 0, word: "زَهرا" },
    { x: 0, y: 400, word: "عَلی" },
    { x: 300, y: 400, word: "حَسَن" },
    { x: 600, y: 400, word: "حُسَین" },
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

      if (b.visible && !gameOver) {
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
        for (let p of pockets) {
          const dist = Math.hypot(b.x - p.x, b.y - p.y);
          if (dist < pocketRadius) {
            b.visible = false;
            b.vx = 0;
            b.vy = 0;

            // پیام کلمه در state
            setMessage(p.word);
            setGameOver(true); // بازی تمام شد
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
  }, [aim, gameOver]);

  const handleMouseDown = (e) => {
    if (!ballRef.current.visible || gameOver) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const d = Math.hypot(x - ballRef.current.x, y - ballRef.current.y);

    if (d < ballRadius + 5) {
      setAim({ x, y });
    }
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

  // شروع دوباره بازی
  const handleRestart = () => {
    ballRef.current.x = 300;
    ballRef.current.y = 200;
    ballRef.current.vx = 0;
    ballRef.current.vy = 0;
    ballRef.current.visible = true;
    setMessage(null);
    setGameOver(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{
          border: "2px solid green",
          borderRadius: "10px",
          background: "#075E12",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {message && (
        <div style={{ marginTop: "15px", fontSize: "24px", color: "blue" }}>
          {message}
        </div>
      )}
      {gameOver && (
        <button
          onClick={handleRestart}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "orange",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          شروع دوباره
        </button>
      )}
    </div>
  );
}
