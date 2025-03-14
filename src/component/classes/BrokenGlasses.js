import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const BrokenGlass = ({ words }) => {
  const [visiblePieces, setVisiblePieces] = useState(
    words.map(() => true) // وضعیت نمایش تکه‌های شیشه
  );

  const handleClick = (index) => {
    setVisiblePieces((prev) => {
      const newVisiblePieces = [...prev];
      newVisiblePieces[index] = false; // تکه شیشه محو می‌شود
      return newVisiblePieces;
    });
  };

  return (
    <>
      <section className="" >
        <div style={{height:'100vh'}}>
          <div
            className="d-flex flex-wrap mb-5"
            style={{ height: "300px", position: "relative" ,backgroundColor:"transparent"}}
          >
            {words.map((word, index) => (
              <div
              className="border border-success"
                key={index}
                onClick={() => handleClick(index)}
                style={{
                  minWidth:'25%',
                  height: "50%",
                  border: "1px solidrgb(46, 95, 13)",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: visiblePieces[index]
                    ? `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                        Math.random() * 255
                      }, 0.8)` // رنگ تصادفی برای تکه‌های شیشه
                    : "rgb(241, 239, 189)", // اگر تکه محو شد، پس‌زمینه شفاف
                  transition: "background-color 0.9s",
                }}
              >
                {visiblePieces[index] ? (
                  <span
                    style={{
                      color: "rgb(9, 17, 90)",
                      fontWeight: "bold",
                      padding: "15px", // padding تنظیم شده به 15px
                      fontSize: "36px", // font-size بزرگ‌تر
                    }}
                  >
                    {index + 1}
                  </span> // نمایش عدد روی تکه‌ها با padding و font-size بزرگ‌تر
                ) : (
                  <span
                    style={{
                      color: "rgb(124, 18, 32)",
                      fontWeight: "bold",
                      padding: "20px", // padding تنظیم شده به 15px
                      fontSize: "50px", // font-size بزرگ‌تر
                      marginBottom:"10px",
                      
                    }}
                  >
                    {word}
                  </span> // نمایش کلمه پس از کلیک با padding و font-size بزرگ‌تر
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrokenGlass;