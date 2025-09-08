import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CuckooClockGame() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [showBird, setShowBird] = useState(false);
  const [word, setWord] = useState("");
  const [turn, setTurn] = useState(0);
  const [targetHour, setTargetHour] = useState(null);

  const students = ["علی", "زهرا", "مریم", "رضا"]; // اسم بچه‌ها
  const words = ["سیب", "مدرسه", "دوست", "کتاب", "بازی"]; // کلمات فارسی

  // وقتی بازی شروع یا سوال جدید می‌شود
  useEffect(() => {
    setNewQuestion();
  }, []);

  const setNewQuestion = () => {
    const randomHour = Math.floor(Math.random() * 12) + 1;
    setTargetHour(randomHour);
  };

  const handleChoice = (choice) => {
    if (choice === targetHour) {
      // جواب درست
      setHour(choice);
      setMinute(0);
      setShowBird(true);
      setWord(words[Math.floor(Math.random() * words.length)]);

      // بعد از چند ثانیه سوال جدید و نوبت بعدی
      setTimeout(() => {
        setShowBird(false);
        setWord("");
        setTurn((prev) => (prev + 1) % students.length);
        setNewQuestion();
      }, 4000);
    } else {
      alert("❌ دوباره امتحان کن!");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h3 className="mb-2">🎯 ساعت چند است؟</h3>
      <h4 className="mb-3 text-info">نوبت {students[turn]}</h4>

      {targetHour && (
        <h5 className="mb-3 text-primary">
          لطفاً ساعت <b>{targetHour}:00</b> را انتخاب کن
        </h5>
      )}

      {/* ساعت */}
      <div
        style={{
          width: "250px",
          height: "250px",
          border: "8px solid goldenrod",
          borderRadius: "50%",
          position: "relative",
          background: "linear-gradient(#fffbe7, #fdf2d0)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        {/* اعداد ساعت */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30 - 90; // شروع از بالا
          const x = 110 + 95 * Math.cos((angle * Math.PI) / 180);
          const y = 110 + 95 * Math.sin((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${x+7}px`,
                top: `${y+5}px`,
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {i + 1}
            </div>
          );
        })}

        {/* عقربه ساعت */}
        <div
          style={{
            position: "absolute",
            width: "6px",
            height: "70px",
            background: "black",
            top: "55px",
            left: "112px",
            transformOrigin: "bottom center",
            transform: `rotate(${hour * 30}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        />
        {/* عقربه دقیقه */}
        <div
          style={{
            position: "absolute",
            width: "4px",
            height: "90px",
            background: "red",
            top: "37px",
            left: "113px",
            transformOrigin: "bottom center",
            transform: `rotate(${minute * 6}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        />
        {/* پرنده */}
        {showBird && (
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "70px",
              fontSize: "36px",
              background: "#fff8dc",
              border: "2px solid brown",
              borderRadius: "12px",
              padding: "5px 10px",
              boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            🐦 کوکو!
          </div>
        )}
      </div>

      {/* کلمه فارسی */}
      {word && (
        <h2 className="mt-3 text-success">
          📖 کلمه: <b>{word}</b>
        </h2>
      )}

      {/* گزینه‌ها */}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {[...Array(12)].map((_, i) => (
          <button
            key={i}
            className="btn btn-warning m-2 px-3 py-2"
            style={{ borderRadius: "20px", fontSize: "16px", fontWeight: "bold" }}
            onClick={() => handleChoice(i + 1)}
          >
            {i + 1}:00
          </button>
        ))}
      </div>
    </div>
  );
}
