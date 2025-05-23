import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



// تابعی برای تولید رنگ تصادفی
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b, hex: `rgb(${r}, ${g}, ${b})` };
};

// تابع تشخیص روشن یا تیره بودن رنگ
const isDarkColor = ({ r, g, b }) => {
  // از فرمول روشنایی نسبی استفاده می‌کنیم
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};

const SentenceBuilder = ({sentenceOptions}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [words, setWords] = useState([...sentenceOptions[0].fa]);
  const [originalWords, setOriginalWords] = useState([...sentenceOptions[0].fa]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [newWord, setNewWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const [themeColor, setThemeColor] = useState({
    background: ' #f8f9fa',
    text: ' #212529',
  });

  const handleSentenceChange = (e) => {
    const index = parseInt(e.target.value);
    setSelectedIndex(index);
    setWords([...sentenceOptions[index].fa]);
    setOriginalWords([...sentenceOptions[index].fa]);
    setIsCorrect(null);
  };

  const handleDragStart = (index) => setDraggedIndex(index);

  const handleDrop = (index) => {
    const updatedWords = [...words];
    const [draggedWord] = updatedWords.splice(draggedIndex, 1);
    updatedWords.splice(index, 0, draggedWord);
    setWords(updatedWords);
    setDraggedIndex(null);
    setIsCorrect(null);
  };

  const checkSentence = () => {
    const correct = sentenceOptions[selectedIndex].correctFa;
    setIsCorrect(JSON.stringify(words) === JSON.stringify(correct));
  };

  const resetSentence = () => {
    setWords([...originalWords]);
    setIsCorrect(null);
  };

  const addWord = () => {
    if (newWord.trim()) {
      setWords([...words, newWord.trim()]);
      setNewWord('');
      setIsCorrect(null);
    }
  };

  const changeRandomColor = () => {
    const bg = getRandomColor();
    const isDark = isDarkColor(bg);
    setThemeColor({
      background: bg.hex,
      text: isDark ? ' #ffffff' : ' #212529',
    });
  };

  return (
    <div
      className="container mt-5 p-4 rounded shadow-sm"
      dir="rtl"
      style={{
        backgroundColor: themeColor.background,
        color: themeColor.text,
        fontFamily: 'Vazir',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="m-0">🧩 جمله‌سازی فارسی</h4>
        <button className="btn btn-outline-secondary btn-sm" onClick={changeRandomColor}>
          🎨 تغییر رنگ تصادفی
        </button>
      </div>

      <div className="mb-3">
        <label className="form-label">جمله‌ی پایه:</label>
        <select
          className="form-select text-end"
          value={selectedIndex}
          onChange={handleSentenceChange}
        >
          {sentenceOptions.map((sentence, index) => (
            <option key={index} value={index}>
              {sentence.fa.join(' ')}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex flex-wrap justify-content-end gap-2 mb-3 border border-danger">
        {words.map((word, index) => (
          <div
            key={index}
            className="btn btn-outline-primary"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            style={{ minWidth: '60px', cursor: 'grab', color: themeColor.text }}
          >
            {word}
          </div>
        ))}
      </div>

      <div className="alert alert-info mt-3" style={{ backgroundColor: '#e0f0ff' }}>
        جمله فعلی: <strong>{words.join(' ')}</strong>
      </div>

      <div className="alert alert-light text-start" dir="ltr">
        Translation: <strong>{sentenceOptions[selectedIndex].en}</strong>
      </div>

      {isCorrect !== null && (
        <div className={`alert mt-3 ${isCorrect ? 'alert-success' : 'alert-danger'}`}>
          {isCorrect ? '✅ جمله درست است!' : '❌ جمله نادرست است.'}
        </div>
      )}

      <div className="mt-4 d-flex flex-wrap gap-2 justify-content-end">
        <button className="btn btn-success" onClick={checkSentence}>
          بررسی جمله
        </button>
        <button className="btn btn-secondary" onClick={resetSentence}>
          ریست
        </button>
      </div>

      <div className="mt-4">
        <label className="form-label">افزودن کلمه جدید:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control text-end"
            placeholder="کلمه جدید..."
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addWord}>
            اضافه کن
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css');
        .btn-outline-primary {
          border-color: #0d6efd;
        }
      `}</style>
    </div>
  );
};

export default SentenceBuilder;
