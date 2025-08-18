import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HighlightLetterText = () => {
  const [textStory, setTextStory] = useState('');
  const [textStory2, setTextStory2] = useState('');
  const [title, setTitle] = useState('');
  const [letterToHighlight, setLetterToHighlight] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [imgAddress, setImgAddress] = useState('');

  const renderText = (text, highlight, color) => {
    return text.split("").map((char, index) => {
      if (char === "\n") {
        return <br key={index} />;
      }
      return (
        <span
          key={index}
          style={{ color: char === highlight ? color : "black" }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="container my-5 bg-light p-5 text-center">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">نمایش متن با هایلایت</h3>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "پنهان کردن فرم" : "نمایش فرم"}
        </button>
      </div>

      {showForm && (
        <div className="card shadow-sm p-4 mb-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">حرف یا کلمه برای هایلایت</label>
              <input
                type="text"
                value={letterToHighlight}
                onChange={(e) => setLetterToHighlight(e.target.value)}
                className="form-control"
                placeholder="مثلا: ک یا کا"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">عنوان داستان</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="عنوان داستان"
              />
            </div>

            <div className="col-12">
              <label className="form-label">متن اول</label>
              <textarea
                value={textStory}
                onChange={(e) => setTextStory(e.target.value)}
                rows={4}
                className="form-control"
                placeholder="متن خود را اینجا وارد کنید"
              />
            </div>

            <div className="col-12">
              <label className="form-label">آدرس تصویر</label>
              <input
                type="text"
                value={imgAddress}
                onChange={(e) => setImgAddress(e.target.value)}
                className="form-control"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="col-12">
              <label className="form-label">متن دوم</label>
              <textarea
                value={textStory2}
                onChange={(e) => setTextStory2(e.target.value)}
                rows={4}
                className="form-control"
                placeholder="متن خود را اینجا وارد کنید"
              />
            </div>
          </div>
        </div>
      )}

      <h4 className="mb-5">
        متن با حرف قرمز: <span className="text-danger">{letterToHighlight}</span>
      </h4>

      <h2 className="mb-5 text-center">{title}</h2>

      <div
        className="mb-4 pe-5"
        style={{ fontSize: "2rem", lineHeight: "2.5rem", direction: "rtl", textAlign: "right" }}
      >
        {renderText(textStory, letterToHighlight, "#fe15a5ff")}
      </div>

      {imgAddress && (
        <div className="text-center mb-4">
          <img
            src={imgAddress}
            alt="تصویر مرتبط"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "400px" }}
          />
        </div>
      )}

      <div
        className='pe-5'
        style={{ fontSize: "2rem", lineHeight: "2.5rem", direction: "rtl", textAlign: "right" }}
      >
        {renderText(textStory2, letterToHighlight, "#fe15a5ff")}
      </div>
    </div>
  );
};

export default HighlightLetterText;
