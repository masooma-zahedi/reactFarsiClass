import React, { useState, useEffect, useRef, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { words9 } from "./dataAlpha"; // مطمئن شو که آرایه words9 در این فایل وجود داره

const emojis = ["🚗", "🦄", "🐥", "🐸", "🐱", "🐵", "🛸", "🌈", "🚀", "🧸", "🎈"];

const getRandomColor = () => {
  const colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#e2e3e5", "#fce4ec", "#e8f5e9"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const WordBox = ({ wordB = words9 }) => {
  const [words, setWords] = useState([...wordB]);
  const [currentWord, setCurrentWord] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState(getRandomEmoji());
  const [isRunning, setIsRunning] = useState(true);
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [highlightLetter, setHighlightLetter] = useState("ک");
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && words.length > 0) {
      intervalRef.current = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setCurrentWord(words[randomIndex]);
        setCurrentEmoji(getRandomEmoji());
        setBgColor(getRandomColor());
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, words]);
  

const handleBoxClick = useCallback(() => {
  if (isRunning) {
    setIsRunning(false);
    setWords(prev => prev.filter(w => w !== currentWord));
  } else if (words.length > 0) {
    setIsRunning(true);
  }
}, [isRunning, words, currentWord]);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault(); // از اسکرول پیش‌فرض جلوگیری می‌کنه
      handleBoxClick();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [handleBoxClick]);

  const resetGame = () => {
    setWords([...wordB]);
    setIsRunning(true);
    setCurrentWord("");
    setCurrentEmoji(getRandomEmoji());
    setBgColor(getRandomColor());
  };

  const getHighlightedWord = (word, letter) => {
    if (!letter) return word;
    const regex = new RegExp(`(${letter})`, "g");
    return word.replace(regex, '<span style="color: red;">$1</span>');
  };

  return (
    <div className="container mt-5 text-center">
      <style>
        {`
          .emoji {
            font-size: 2.5rem;
            margin-top: 10px;
            animation: float 1s infinite ease-in-out;
          }

          .paused {
            animation-play-state: paused;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>

      <div
        className="d-flex flex-column align-items-center justify-content-center mx-auto shadow"
        style={{
          width: "400px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: bgColor,
          fontSize: "2rem",
          cursor: "pointer",
          transition: "background-color 0.5s",
        }}
        onClick={handleBoxClick}
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              words.length > 0
                ? getHighlightedWord(currentWord, highlightLetter)
                : "پایان",
          }}
        />
        <div className={`emoji ${isRunning ? "" : "paused"}`}>{currentEmoji}</div>
      </div>

      <p className="mt-3 text-muted">برای توقف روی کلمه کلیک کن!</p>

      <button className="btn btn-primary mt-3" onClick={resetGame}>
        شروع دوباره
      </button>

      <div className="mt-4">
        <label htmlFor="letterInput" className="form-label">
          حرف مورد نظر برای رنگی شدن:
        </label>
        <input
          type="text"
          id="letterInput"
          maxLength={1}
          className="form-control text-center"
          style={{ width: "60px", margin: "0 auto" }}
          value={highlightLetter}
          onChange={(e) => setHighlightLetter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default WordBox;
