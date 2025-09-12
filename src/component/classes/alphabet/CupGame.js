import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CupGame() {
  // 📌 دسته‌های کلمات مختلف
  const categories = {
    "کلاس G": ["دَر","بَر","پَر","بَد","پَد","تاب","رَد","اَد","باد","بار","پا","را","دار"],
    "گلدان نازنین": ["گُلدان","باغچِه","دانِه","لَبخَند","ساقِه","رُشد","مُشت","آواز","نِگاه","گُذَشت"],
    "مهمانی شادی": ["مِهمانی","شاد","بادکُنَک","چِراغ","رَنگی","دوست","بازی","کِیک","شُکُلاتی","آب‌میوِه","خُوشحال","لَذَت","تَشَكُر"],
    "سفر با کشتی": ["سَفَر","کَشتی","دَریا","آب","ماهی","خُوشحال","مُرغِ دَریایی","پَرَنده","جَزیره","نارگِیل","دَرَخت","شَب","سِتاره","آسمان","خـانِه"],
    "لیلا و درخت جادویی": ["دِه","لِیلا","بِن","دِرَخت","زَمین","دانِه","باغ","آب","مُراقِبَت","رُشد","جادویی","هَوا","شاد","دُنیا","بِهتَر"],
    "من و ماکارونی": ['مَن','ماکارونی','مادَر','نورا','شام','گُفتَم','باشِه','دُرُست','قابلَمه','بویِ','بابا','خوشمَزه','کُمَک','آفَرین','هَمِه','خَندیدیم','خوردیم'],
    "طوفان بزرگ" :  ['آسمان','باد','بَرق','مادَر','طوفان','شَمع','صُبح','دِرَخت','بابا','کُمَک','هَمسایه','زُبالِه','هَمدِلی'],
  };

  // 📌 حالت انتخابی
  const [selectedCategory, setSelectedCategory] = useState("کلاس G");
  const [words, setWords] = useState(categories[selectedCategory]);

  // تغییر دسته → کلمات جدید
  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setSelectedCategory(cat);
    handleResetGame(categories[cat]); // ریست بازی با لیست جدید
  };

  // 🎮 stateهای بازی
  const [positions, setPositions] = useState([0, 1, 2]);
  const [ballPos, setBallPos] = useState(Math.floor(Math.random() * 3));
  const [selected, setSelected] = useState(null);
  const [wrongWord, setWrongWord] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showBall, setShowBall] = useState(true);
  const [movingCup, setMovingCup] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [difficulty, setDifficulty] = useState(800);

  // شروع یک راند
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

  // جابه‌جایی لیوان‌ها
  const shuffleCups = () => {
    setIsShuffling(true);
    let count = 0;

    const interval = setInterval(() => {
      setPositions((prev) => {
        const newPositions = [...prev];
        const i = Math.floor(Math.random() * 3);
        let j = Math.floor(Math.random() * 3);
        while (i === j) j = Math.floor(Math.random() * 3);

        setMovingCup(i);
        setTimeout(() => setMovingCup(null), 600);

        [newPositions[i], newPositions[j]] = [newPositions[j], newPositions[i]];
        return newPositions;
      });

      count++;
      if (count > 7) {
        clearInterval(interval);
        setIsShuffling(false);
      }
    }, difficulty);
  };

  // شروع راند بعدی
  const startNextRound = (consumeWord = false) => {
    if (consumeWord && words.length > 0) {
      setWords(words.slice(1));
    }

    setAttempts(0);
    setSelected(null);
    setWrongWord(null);
    setShowBall(false);
    setBallPos(Math.floor(Math.random() * 3));
    setPositions([0, 1, 2]);
    setGameStarted(false);
  };

  const handleChoice = (index) => {
    if (isShuffling || !gameStarted) return;

    setSelected(index);
    const ballIndex = positions.indexOf(ballPos);

    if (index === ballIndex) {
      setShowBall(true);
      setTimeout(() => {
        startNextRound(false);
      }, 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts === 1) {
        if (words.length > 0) setWrongWord(words[0]);
      } else if (newAttempts >= 2) {
        setShowBall(true);
        setTimeout(() => {
          startNextRound(true);
        }, 500);
      }
    }
  };

  const handleContinueAfterWrong = () => {
    startNextRound(true);
  };

  const handleResetGame = (newWords = words) => {
    setWords(newWords);
    setBallPos(Math.floor(Math.random() * 3));
    setPositions([0, 1, 2]);
    setSelected(null);
    setWrongWord(null);
    setGameStarted(false);
    setAttempts(0);
    setShowBall(true);
  };

  return (
    <div className="text-center container rounded-3 p-5 mt-5" style={{backgroundColor:" #bded989e"}}>

      {/* 📌 انتخاب دسته */}
      <div className=" text-end">
        <div className="mb-4">
          <label className="fw-bold">انتخاب دسته کلمات: </label>
          <select
            className="form-select w-auto d-inline-block ms-2"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

      </div>

      {/* 🎚️ سختی */}
      <div className="mb-2 text-start" style={{opacity:"0.6"}}>
        <label>سختی بازی: </label>
        <input
          type="range"
          min="100"
          max="1200"
          step="50"
          value={difficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
          style={{ width: "300px", marginLeft: 10 }}
        />
        <span style={{ marginLeft: 10 }}>{difficulty} ms</span>
      </div>

      {/* 🎩 ناحیه لیوان‌ها */}
      <div className="container text-center d-flex justify-content-center mt-5">
        <div className="my-5" style={{width:"600px"}}>
          <div className="cups-area">
            {[0, 1, 2].map((pos) => {
              const index = positions.indexOf(pos);
              const isBallHere = ballPos === pos;
              const isSelected = selected === index;

              return (
                <div
                  key={pos}
                  className={`cup-wrapper ${isSelected ? "lift" : ""} ${movingCup === index ? "moving" : ""}`}
                  style={{ left: `${index * 210}px` }}
                  onClick={() => handleChoice(index)}
                >
                  {isSelected && wrongWord && !showBall && (
                    <span className="word" style={{color:' #0b46aaff'}}>{wrongWord}</span>
                  )}
                  {showBall && isBallHere && <div className="ball"></div>}
                  <img
                    src="/images/assetAlpha/gamePage/cupGame-1.png"
                    alt="cup"
                    style={{ width: "200px", height: "220px", pointerEvents: "none" , zIndex: 1}}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🎮 دکمه‌ها */}
      <div className="mt-5">
        {!gameStarted && words.length > 0 && (
          <button className="btn btn-primary" onClick={startGame}>
            شروع بازی ▶
          </button>
        )}

        {wrongWord && words.length > 0 && (
          <div className="mt-3">
            <h4>بخون: {wrongWord}</h4>
            <button className="btn btn-success mt-2" onClick={handleContinueAfterWrong}>
              ادامه ▶
            </button>
          </div>
        )}

        {!gameStarted && words.length === 0 && (
          <button className="btn btn-danger" onClick={() => handleResetGame(categories[selectedCategory])}>
            ریست بازی 🔄
          </button>
        )}
      </div>

      {/* 🎨 استایل */}
      <style>{`
        .cups-area {
          position: relative;
          height: 200px;
          margin-top: 40px;
        }
        .cup-wrapper {
          position: absolute;
          bottom: 0;
          transition: left 0.6s ease, transform 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .cup-wrapper.lift {
          transform: translateY(-70px);
        }
        .cup-wrapper.moving {
          transform: translateY(-120px);
        }
        .ball {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #b330c5ff;
          position: absolute;
          bottom: -35px;
        }
        .word {
          position: absolute;
          top: 220px;
          font-size: 40px;
          font-weight: bold;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
