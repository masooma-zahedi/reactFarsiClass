import React, { useState } from "react";
import "./FlipButton.css"; // Import CSS for styling

const FlipButton = ({ frontText, backText, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  return (
    <div
      className={`flip-button ${flipped ? "flipped" : ""}`}
      onClick={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    //   onClick={onClick}
    >
      <div className="button-inner">
        <div className="button-front">{frontText}</div>
        <div className="button-back">{backText}</div>
      </div>
    </div>
  );
};

export default FlipButton;
