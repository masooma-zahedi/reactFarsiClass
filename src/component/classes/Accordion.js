import React, { useState } from "react";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion shadow" id="accordionExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header " id={`heading${index}`}>
            <button
              className={`accordion-button h3 ${
                activeIndex === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleClick(index)}
              aria-expanded={activeIndex === index ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`} style={{color:'#993337'}}
            className={`accordion-collapse h5 collapse ${
              activeIndex === index ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

