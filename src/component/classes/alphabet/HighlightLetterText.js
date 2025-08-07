import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HighlightLetterText = () => {
  const [textStory, setTextStory] = useState('');
  const [textStory2, setTextStory2] = useState('');
  const text = `${textStory}`;
  const text2 = `${textStory2}`;
  
  const [test, setTest] = useState('');
  const letterToHighlight = `${test}`;
  const [showT, setShowT] = useState(true);
  const [imgAddress, setImgAddress] = useState('')

  const imageUrl = `${imgAddress}`; // ← آدرس تصویر مناسب با متن را این‌جا بگذارید

const renderText = () => {
  return text.split("").map((char, index) => {
    if (char === "\n") {
      return <br key={index} />;
    }
    return (
      <span
        key={index}
        style={{ color: char === letterToHighlight ? "red" : "black" }}
      >
        {char}
      </span>
    );
  });
};
const renderText2 = () => {
  return text2.split("").map((char, index) => {
    if (char === "\n") {
      return <br key={index} />;
    }
    return (
      <span
        key={index}
        style={{ color: char === letterToHighlight ? "red" : "black" }}
      >
        {char}
      </span>
    );
  });
};


  return (
    <div className="container bg-light p-4 mt-4 d-flex flex-column align-items-center">
      <button className='btn-sm btn-success mb-4' onClick={()=>setShowT(!showT)}>{showT ? "HideText" : "ShowText"}</button>
      {showT && 
        <div className="mb-3 w-100">
          <input
            type="text"
            value={test}
            placeholder="حرف را وارد کنید"
            onChange={(e) => setTest(e.target.value)}
            className="form-control mb-2"
          />
          <textarea
            value={textStory}
            onChange={(e) => setTextStory(e.target.value)}
            className="form-control"
            rows={4}
            placeholder="متن خود را این‌جا وارد کنید"
          ></textarea>
            <input
            type="text"
            value={imgAddress}
            placeholder="آدرس عکس"
            onChange={(e) => setImgAddress(e.target.value)}
            className="form-control my-2"
          />
                    <textarea
            value={textStory2}
            onChange={(e) => setTextStory2(e.target.value)}
            className="form-control"
            rows={4}
            placeholder="متن خود را این‌جا وارد کنید"
          ></textarea>


        </div>
      }

      <h4 className="mb-3">متن با حرف قرمز <span className='text-danger'>{letterToHighlight}</span></h4>
      <p className='h2' style={{ fontSize: "1.5rem", textAlign: "right",lineHeight:"3rem", direction: "rtl" }}>
        {renderText()}
      </p>

      <img
        src={imageUrl}
        alt="تصویر مرتبط"
        className="img-fluid mt-3"
        style={{ maxWidth: "400px", borderRadius: "10px" }}
      />
      <p className='h2' style={{ fontSize: "1.5rem", textAlign: "right",lineHeight:"3rem", direction: "rtl" }}>
        {renderText2()}
      </p>    
    </div>
  );
};

export default HighlightLetterText;
