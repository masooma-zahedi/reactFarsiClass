import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CupGame() {
  const wordList = [
    "سیب", "درخت", "مدرسه", 
  ];

  const [positions, setPositions] = useState([0, 1, 2]);
  const [ballPos, setBallPos] = useState(Math.floor(Math.random() * 3));
  const [selected, setSelected] = useState(null);
  const [wrongWord, setWrongWord] = useState(null);
  const [words, setWords] = useState(wordList);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showBall, setShowBall] = useState(true);
  const [movingCup, setMovingCup] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [difficulty, setDifficulty] = useState(800);

  const startGame = () => {
    setGameStarted(true);
    setShowBall(true);
    setSelected(null);
    setWrongWord(null);
    setAttempts(0);

    setTimeout(() => {
      setShowBall(false);
      shuffleCups();
    }, 1500);
  };

  const shuffleCups = () => {
    setIsShuffling(true);
    let count = 0;
    const interval = setInterval(() => {
      let newPositions = [...positions];
      const i = Math.floor(Math.random() * 3);
      let j = Math.floor(Math.random() * 3);
      while (i === j) j = Math.floor(Math.random() * 3);

      setMovingCup(i);
      setTimeout(() => setMovingCup(null), 600);

      [newPositions[i], newPositions[j]] = [newPositions[j], newPositions[i]];
      setPositions(newPositions);

      count++;
      if (count > 5) {
        clearInterval(interval);
        setIsShuffling(false);
      }
    }, difficulty);
  };

const handleChoice = (index) => {
  if (isShuffling || !gameStarted) return;

  setSelected(index);
  const ballIndex = positions.indexOf(ballPos);

  if (index === ballIndex) {
    // جواب درست → توپ را نشان بده
    setShowBall(true);
    setTimeout(() => {
      handleNextWord();
    }, 1500);
  } else {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts === 1) {
      // بار اول اشتباه → کلمه‌ی اول را نشان بده
      if (words.length > 0) {
        setWrongWord(words[0]);
      }
    } else if (newAttempts >= 2) {
      // بار دوم اشتباه → توپ را نشان بده و برو کلمه بعدی
      setShowBall(true);
      setTimeout(() => {
        handleNextWord();
      }, 1500);
    }
  }
};



  const handleNextWord = () => {
    const newWords = words.slice(1);
    setWords(newWords);
    setAttempts(0);
    setSelected(null);
    setWrongWord(null);
    setShowBall(false);

    if (newWords.length > 0) {
      setBallPos(Math.floor(Math.random() * 3));
      setGameStarted(false);
    } else {
      setGameStarted(false);
    }
  };

  const handleResetGame = () => {
    setWords(wordList);
    setBallPos(Math.floor(Math.random() * 3));
    setPositions([0, 1, 2]);
    setSelected(null);
    setWrongWord(null);
    setGameStarted(false);
    setAttempts(0);
  };

  return (
    <div className="text-center mt-5">
      {/* Slider سختی */}
      <div className="mb-3">
        <label>سختی بازی: </label>
        <input
          type="range"
          min="200"
          max="1200"
          step="50"
          value={difficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
          style={{ width: "300px", marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>{difficulty} ms</span>
      </div>

      <div className="text-center d-flex justify-content-center border border-danger">
        <div className="cups-area">
          {[0, 1, 2].map((pos) => {
            const index = positions.indexOf(pos);
            const isBallHere = ballPos === pos;
            const isSelected = selected === index;

            return (
              <div
                key={pos}
                className={`cup bg-info ${isSelected ? "lift" : ""} ${
                  movingCup === index ? "moving" : ""
                }`}
                style={{ left: `${index * 140}px` }}
                onClick={() => handleChoice(index)}
              >
                {showBall && isBallHere && <div className="ball"></div>}
                {isSelected && wrongWord && (
                  <span className="word">{wrongWord}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        {!gameStarted && words.length > 0 && (
          <button className="btn btn-primary" onClick={startGame}>
            شروع بازی ▶
          </button>
        )}

        {wrongWord && words.length > 0 && (
          <div className="mt-3">
            <h4>بخون: {wrongWord}</h4>
            <button className="btn btn-success mt-2" onClick={handleNextWord}>
              ادامه ▶
            </button>
          </div>
        )}

        {!gameStarted && words.length === 0 && (
          <button className="btn btn-danger" onClick={handleResetGame}>
            ریست بازی 🔄
          </button>
        )}
      </div>

      <style>{`
        .cups-area {
          position: relative;
          height: 200px;
          margin-top: 40px;
        }
        .cup {
          width: 100px;
          height: 120px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 22px;
          font-weight: bold;
          color: white;
          cursor: pointer;
          position: absolute;
          bottom: 0;
          transition: left 0.6s ease, transform 0.3s ease;
        }
        .cup.lift {
          transform: translateY(-70px);
        }
        .cup.moving {
          transform: translateY(-120px);
        }
        .ball {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: red;
          position: absolute;
          bottom: -35px;
        }
        .word {
          color: black;
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
