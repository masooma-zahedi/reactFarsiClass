import React, { useState, useEffect, useRef } from "react";
import {words9} from "./dataAlpha"
import "bootstrap/dist/css/bootstrap.min.css";

// const initialWords = words9;

const emojis = ["🚗", "🦄", "🐥", "🐸", "🐱", "🐵", "🛸", "🌈", "🚀", "🧸", "🎈"];

const getRandomColor = () => {
  const colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#e2e3e5", "#fce4ec", "#e8f5e9"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const WordBox = ({wordB}) => {
  const [words, setWords] = useState([...wordB]);
  const [currentWord, setCurrentWord] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState(getRandomEmoji());
  const [isRunning, setIsRunning] = useState(true);
  const [bgColor, setBgColor] = useState(getRandomColor());
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

  const handleBoxClick = () => {
    if (isRunning) {
      setIsRunning(false);
      setWords(prev => prev.filter(w => w !== currentWord));
    } else if (words.length > 0) {
      setIsRunning(true);
    }
  };

  const resetGame = () => {
    setWords([...wordB]);
    setIsRunning(true);
    setCurrentWord("");
    setCurrentEmoji(getRandomEmoji());
    setBgColor(getRandomColor());
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
        <div>{words.length > 0 ? currentWord : "پایان"}</div>
        <div className={`emoji ${isRunning ? "" : "paused"}`}>{currentEmoji}</div>
      </div>

      <p className="mt-3 text-muted">برای توقف روی کلمه کلیک کن!</p>

      <button className="btn btn-primary mt-3" onClick={resetGame}>
        شروع دوباره
      </button>
    </div>
  );
};

export default WordBox;
