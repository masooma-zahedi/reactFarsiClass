import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export const SylabeWords = ({ infoSentence }) => {
  const [selectedWord, setSelectedWord] = useState("");
  const [animation, setAnimation] = useState("animate__bounceIn");
  const displayRef = useRef(null)



  const animations = [
    "animate__bounceIn",
    "animate__fadeIn",
    "animate__zoomIn",
    "animate__lightSpeedInRight",
    "animate__jackInTheBox",
    "animate__rotateIn",
  ];

  const handleSelect = (word) => {
    setSelectedWord(word);
    const randomAnim =
      animations[Math.floor(Math.random() * animations.length)];
    setAnimation(randomAnim);

    // برای sticky ستون سمت راست نیاز به scroll نیست
    // اگر بخوای می‌توانی این بخش را حذف کنی
  };
  return (
    <section className="mt-4">

      <div className="row g-4">
        {/* سمت چپ: جملات */}
        <div className="col-md-7" dir="rtl">
          <h2
            className="text-center text-light py-3 rounded-3 shadow"
            style={{ backgroundColor: infoSentence.titleColor || "#6c5ce7" }}
          >
            {infoSentence.titleHead}
          </h2>

          <div className="d-flex flex-column gap-4 mt-4">
            {infoSentence.sentenceRow.map((sentence, rowIndex) => (
              <div
                key={rowIndex}
                className="d-flex flex-wrap justify-content-start gap-3"
              >
                {sentence.map((item, wordIndex) => (
                  <div
                    key={wordIndex}
                    className="card text-center shadow border-0"
                    style={{
                      width: "120px",
                      cursor: "pointer",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #74b9ff, #81ecec)",
                    }}
                    onMouseOver={(e)=>{e.target.style.background="linear-gradient(135deg, #74b9ffff, #e184f3ff)"
                        e.target.style.borderRadius='20px'
                    }}
                    onMouseLeave={(e)=>{e.target.style.background="linear-gradient(135deg, #74b9ffff,  #84f3f3ff )"}}
                    onClick={() => {
                        
                        handleSelect(item.syla || item.word)}
                    }
                  >
                    <div className="card-body d-flex justify-content-center align-items-center p-3" dir="rtl">
                      <h4 className="fw-bold text-white" onMouseLeave={(e)=>{e.target.style.background="transparent"}}>{item.word}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* سمت راست: نمایش انتخاب */}
        <div className="col-md-5">
          <div
            ref={displayRef}
            className="d-flex flex-column justify-content-center align-items-center shadow-lg rounded-4 p-4"
            style={{
              minHeight: "350px",
              background: infoSentence.sylabelBg || "#00cec9",
              position: "sticky",
              top: "20px",
            }}
          >
            {selectedWord ? (
              <h1
                key={selectedWord + animation}
                className={`display-2 fw-bold text-light animate__animated ${animation}`}
              >
                {selectedWord}
              </h1>
            ) : (
              <span className="fs-4 text-light">یک کلمه را انتخاب کن ✨</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


