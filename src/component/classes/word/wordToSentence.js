import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const WordToSentence = () => {
  const [wordInput, setWordInput] = useState('');
  const [sentenceInput, setSentenceInput] = useState('');
  const [wordsList, setWordsList] = useState([]);
  const [sentencesList, setSentencesList] = useState([]);

    // لیست رنگ‌های تصادفی برای پس‌زمینه جملات
    const colors = [' #FFCCCB', 'rgba(119, 71, 85, 0.73)','rgb(229, 154, 240)', ' #90EE90', ' #FFD700', ' #DDA0DD', ' #87CEEB', ' #FFA07A'];


  const handleAddWord = () => {
    if (wordInput.trim()) {
      setWordsList([...wordsList, { text: wordInput.trim(), fontSize: 20 }]); // مقدار پیش‌فرض سایز فونت
      setWordInput('');
    }
  };

  const handleAddSentence = () => {
    if (sentenceInput.trim()) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; // انتخاب یک رنگ تصادفی
      setSentencesList([...sentencesList, { text: sentenceInput.trim(), bgColor: randomColor }]);
      setSentenceInput('');
    }
  };

  const increaseFontSize = (index) => {
    const updatedWordsList = [...wordsList];
    updatedWordsList[index].fontSize += 2; // افزایش سایز فونت به اندازه 2 پیکسل
    setWordsList(updatedWordsList);
  };

  const handleKeyDown = (e, type) => {
    if (e.key === 'Enter') {
      if (type === 'word') {
        handleAddWord();
      } else if (type === 'sentence') {
        handleAddSentence();
      }
    }
  };

  const handleReset = ()=>{
    setWordInput('');
    setSentenceInput('');
    setWordsList([]);
    setSentencesList([]);
  }

  return (
    <div className="container my-5 " style={{direction:'rtl'}}>
      {/* بخش ورودی کلمات */}
      <div className="mb-3">
        <label htmlFor="wordsInput" className="form-label h3 text-primary">کلمات:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control p-3 rounded-end border text-secondary border-warning "
            id="wordsInput"
            value={wordInput}
            onChange={(e) => setWordInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, 'word')}
            placeholder="کلمات را وارد کنید"
          />
          <button className="btn btn-primary rounded-start" onClick={handleAddWord}>Add</button>
        </div>
        <div className="mt-2">
          {wordsList.map((word, index) => (
            <span
              key={index}
              className="badge p-3 me-2 mb-2"
              style={{ fontSize: `${word.fontSize}px`, cursor: 'pointer',backgroundColor:"rgb(232, 78, 27)" }}
              onClick={() => increaseFontSize(index)}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>

      {/* بخش ورودی جملات */}
      <div className="mb-3">
        <label htmlFor="sentencesInput" className="form-label h3 text-info">جملات:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control text-secondary p-3 rounded-end border border-warning"
            id="sentencesInput"
            value={sentenceInput}
            onChange={(e) => setSentenceInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, 'sentence')}
            placeholder="جملات را وارد کنید"
          />
          <button className="btn btn-primary rounded-start " onClick={handleAddSentence}>Add</button>
        </div>
        <div className="mt-5 border border-3 border-info p-2 rounded shadow">
          {sentencesList.map((sentence, index) => (
            <div
              key={index}
              className="alert mt-2 h2"
              style={{ backgroundColor: sentence.bgColor, color:"rgb(30, 21, 151)" }}
            >
              {sentence.text}
            </div>
          ))}
        </div>
      </div>
      <button className='btn btn-danger' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default WordToSentence;