import React, { useState } from "react";
import WordGameGrid from "./alphabet/WordGameGrid";

const BrokenGlass = ({ words }) => {
  const [visiblePieces, setVisiblePieces] = useState(words.map(() => true));
  const [searchLetter, setSearchLetter] = useState(""); // نگه داشتن حرف ورودی

  const handleClick = (index) => {
    setVisiblePieces((prev) => {
      const newVisiblePieces = [...prev];
      newVisiblePieces[index] = false;
      return newVisiblePieces;
    });
  };

  // تابعی برای رنگی کردن حرف مورد نظر
  const highlightLetter = (word) => {
    if (!searchLetter) return word;

    return word.split("").map((char, i) => (
      <span
        key={i}
        style={{
          color: char === searchLetter ? " #f426aff2" : "black", // فقط حرف ورودی قرمز می‌شود
          fontWeight: "bold",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <>
      {/* بخش input */}
      <div className="mb-3 text-center">
        <label className="form-label">حرف مورد نظر:</label>
        <input
          type="text"
          maxLength="1"
          className="form-control w-25 mx-auto text-center"
          value={searchLetter}
          onChange={(e) => setSearchLetter(e.target.value)}
        />
      </div>

      <section>
        <div style={{ height: "200vh" }}>
          <div
            className="d-flex flex-wrap mb-5"
            style={{
              height: "300px",
              position: "relative",
              backgroundColor: "transparent",
            }}
          >
            {words.map((word, index) => (
              <div
                className="border border-success"
                key={index}
                onClick={() => handleClick(index)}
                style={{
                  minWidth: "25%",
                  height: "50%",
                  border: "1px solid rgb(46, 95, 13)",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: visiblePieces[index]
                    ? `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                        Math.random() * 255
                      }, 0.8)`
                    : "rgb(241, 239, 189)",
                  transition: "background-color 0.9s",
                }}
              >
                {visiblePieces[index] ? (
                  <span
                    style={{
                      color: "rgb(9, 17, 90)",
                      fontWeight: "bold",
                      padding: "15px",
                      fontSize: "36px",
                    }}
                  >
                    {index + 1}
                  </span>
                ) : (
                  <span
                    style={{
                      fontWeight: "bold",
                      padding: "20px",
                      fontSize: "50px",
                      marginBottom: "10px",
                    }}
                  >
                    {highlightLetter(word)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <WordGameGrid />
      </section>
    </>
  );
};

export default BrokenGlass;
