import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CupGame() {
  const wordList = [
    "سیب","درخت","مدرسه","خورشید","دوست",
    "معصومه","مجتبی","فاطمه","زهرا","ثنا","هلیا","ملیکا","الناز",
  ];

  // positions: آرایه‌ای از [0,1,2] که با جابه‌جایی اعضا، محل ستون هر لیوان را تعیین می‌کند
  const [positions, setPositions] = useState([0, 1, 2]);
  const [ballPos, setBallPos] = useState(Math.floor(Math.random() * 3)); // موقعیت واقعی توپ (0..2)
  const [selected, setSelected] = useState(null);        // اندیسی که کودک کلیک کرده (0..2)
  const [wrongWord, setWrongWord] = useState(null);      // کلمه‌ای که هنگام اشتباه نمایش می‌دهیم
  const [words, setWords] = useState(wordList);          // لیست کلمات باقی‌مانده برای نمایش هنگام اشتباه
  const [isShuffling, setIsShuffling] = useState(false); // آیا در حال جابه‌جایی لیوان‌ها هستیم
  const [showBall, setShowBall] = useState(true);        // نمایش توپ (برای نشان‌دادن درست/اشتباه)
  const [movingCup, setMovingCup] = useState(null);      // برای افکت حرکت عمودی یک لیوان
  const [gameStarted, setGameStarted] = useState(false);
  const [attempts, setAttempts] = useState(0);           // تعداد اشتباه‌های این راند (0,1,2)
  const [difficulty, setDifficulty] = useState(800);     // سرعت جابه‌جایی

  // شروع یک راند: اول توپ را زیر لیوان درست نشان می‌دهیم، بعد جابه‌جایی شروع می‌شود
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
      // از مقدار قبلی positions استفاده کن تا مشکل "state کهنه" پیش نیاد
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
      if (count > 5) {
        clearInterval(interval);
        setIsShuffling(false);
      }
    }, difficulty);
  };

  // شروع راند بعدی
  // consumeWord = true یعنی کلمه‌ی نمایش‌داده‌شده را از لیست حذف کن (فقط وقتی اشتباه داشته‌ایم/نمایش داده‌ایم)
  const startNextRound = (consumeWord = false) => {
    const nextLen = consumeWord ? Math.max(0, words.length - 1) : words.length;

    if (consumeWord && words.length > 0) {
      setWords(words.slice(1));
    }

    setAttempts(0);
    setSelected(null);
    setWrongWord(null);
    setShowBall(false);
    setBallPos(Math.floor(Math.random() * 3));
    setPositions([0, 1, 2]); // برای نظم بصری، هر راند از چینش پایه شروع می‌کنیم
    setGameStarted(false);   // دکمه‌ی "شروع بازی" دوباره نمایش داده شود

    // اگر همه‌ی کلمات نمایش داده شده باشند، کاربر دکمه‌ی ریست را خواهد دید
    // (nextLen === 0) → دکمه‌ی ریست ظاهر می‌شود
  };

  const handleChoice = (index) => {
    if (isShuffling || !gameStarted) return;

    setSelected(index);
    const ballIndex = positions.indexOf(ballPos); // ستون لیوانی که توپ واقعاً زیر آن است

    if (index === ballIndex) {
      // ✅ درست: توپ را نشان بده، ولی از لیست کلمات کم نکن
      setShowBall(true);
      setTimeout(() => {
        startNextRound(false); // کلمه کم نشود
      }, 1500);
    } else {
      // ❌ اشتباه
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts === 1) {
        // بار اول اشتباه → فقط کلمه‌ی اول را نمایش بده (فعلاً کم نکن)
        if (words.length > 0) setWrongWord(words[0]);
      } else if (newAttempts >= 2) {
        // بار دوم اشتباه → توپ را نشان بده و بعد برو راند بعدی و همان یک کلمه را مصرف کن
        setShowBall(true);
        setTimeout(() => {
          startNextRound(true); // فقط الآن از لیست کم می‌کنیم
        }, 500);
      }
    }
  };

  // وقتی معلم/کودک بعد از نمایش کلمه روی "ادامه" می‌زند، می‌رویم راند بعدی و همان کلمه را مصرف می‌کنیم
  const handleContinueAfterWrong = () => {
    startNextRound(true);
  };

  const handleResetGame = () => {
    setWords(wordList);
    setBallPos(Math.floor(Math.random() * 3));
    setPositions([0, 1, 2]);
    setSelected(null);
    setWrongWord(null);
    setGameStarted(false);
    setAttempts(0);
    setShowBall(true); // ابتدای بازی بعدی توپ را نشان بده
  };

  return (
    <div className="text-center container  rounded-3 p-5 mt-5"  style={{backgroundColor:" #bded989e"}}>
        <div className="">
            {/* 🎚️ سختی */}
            <div className="mb-2 text-start" style={{opacity:"0.4"}}>
                <label>سختی بازی: </label>
                <input
                type="range"
                min="200"
                max="1200"
                step="50"
                value={difficulty}
                onChange={(e) => setDifficulty(Number(e.target.value))}
                style={{ width: "200px", marginLeft: 10 }}
                />
                <span style={{ marginLeft: 10 }}>{difficulty} ms</span>
                <div style={{ fontSize: 12 }}>
                عدد کمتر → سریع‌تر و سخت‌تر | عدد بیشتر → کندتر و آسان‌تر
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="wave-box">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <h3 className="m-4 mt-1 p-4   p-2 rounded-2 " >بازی توپ و لیوان</h3>
                </div>
            </div>
            <br /><br /><br /><br />

        </div>

      {/* 🎩 ناحیه لیوان‌ها */}
      <div className="container text-center d-flex justify-content-center mt-5 ">
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
        {/* کلمه همیشه روی لیوان باشد */}
  {isSelected && wrongWord && !showBall && (
    <span className="word" style={{color:' #0b46aaff'}}>{wrongWord}</span>
  )}

  {/* توپ بالای لیوان */}
  {showBall && isBallHere && <div className="ball"></div>}
        <img
          src="/images/assetAlpha/gamePage/cupGame-1.png"
          alt="cup"
          style={{ width: "200px", height: "220px", pointerEvents: "none" , zIndex: 1}}
        />
        {/* توپ فقط وقتی که باید دیده شود */}
        {/* {showBall && isBallHere && <div className="ball"></div>} */}
        {/* کلمه فقط وقتی اشتباه و توپ پنهان باشد */}
        {/* {isSelected && wrongWord && !showBall && (
          <span className="word">{wrongWord}</span>
        )} */}
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
            <br /><br /><br /><br />
          </div>
        )}

        {!gameStarted && words.length === 0 && (
          <button className="btn btn-danger" onClick={handleResetGame}>
            ریست بازی 🔄
          </button>
        )}
      </div>
        <br /><br /><br /><br />
      {/* 🎨 استایل */}
      <style>{`
        .cups-area {
          position: relative;
          height: 200px;
          margin-top: 40px;
        }
        .cup {
          width: 200px;
          height: 220px;
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
          background-color: #b330c5ff;
          position: absolute;
          bottom: -35px;
        }
        .word {
        position: absolute;
        top: 220px; /* بالای لیوان */
        font-size: 40px;
        font-weight: bold;
        z-index: 2; /* روی تصویر قرار گیرد */
        }

        .wave-box {
        position: relative;
        width: 300px;
        height: 100px;
        border-radius: 20px;
        overflow: hidden;
        background: #f6bb3bff;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        }

        .wave {
        position: absolute;
        width: 300%;
        height: 700%;
        background: rgba(231, 157, 46, 0.3);
        top: 50%;
        left: -50%;
        border-radius: 50%;
        animation: wave 8s infinite linear;
        }

        .wave:nth-child(2) {
        animation-duration: 4s;
        opacity: 0.5;
        }

        @keyframes wave {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
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


      `}</style>
    </div>
  );
}
