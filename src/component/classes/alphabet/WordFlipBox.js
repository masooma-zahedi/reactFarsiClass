import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { words1, words10, words11, words12, words14, words15, words16, words2, words3, words4, words5, words6, words7, words8 } from './dataAlpha';

const wordCategories = {
  "حرف ل":words10,
  "حرف ق": words1,
  "حرف پ": [
    "پدر", "پسر", "پتو", "پنیر", "پیشی", "پاییز", "پله", "پرتقال"
  ],
  "حرف ص":words2,
  "حرف غ":words3,
  "حرف ف":words4,
  "حرف ر":words5,
  "حرف ز":words6,
  "حرف ک":words7,
  "حرف گ":words8,
  "حرف م":words11,
  "حرف ن":words12,
  "حرف س":words14,
  "حرف ش":words15,
  "حرف ض":words16,
};

const getRandomColor = () => {
  const colors = ['#90e8aa', '#90e0a3', '#fff3cd', '#87e3ea', '#85ccf0', '#88a8ea', '#c786eb', '#aae897'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const WordFlipBox = () => {
  const [selectedCategory, setSelectedCategory] = useState('حرف ل');
  const [words, setWords] = useState(wordCategories[selectedCategory]);
  const [currentWord, setCurrentWord] = useState('');
  const [isSpinning, setIsSpinning] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [bgColor, setBgColor] = useState('#f8bcbc');
  const [showSecondBox, setShowSecondBox] = useState(false);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    let animation;
    if (isSpinning) {
      animation = setInterval(() => {
        setRotation((prev) => prev + 6);
      }, 16);
    }
    return () => clearInterval(animation);
  }, [isSpinning]);

  useEffect(() => {
    setWords(wordCategories[selectedCategory]);
    setCurrentWord('');
    setIsSpinning(true);
    setRotation(0);
    setShowSecondBox(false);
  }, [selectedCategory]);

  const handleClick = () => {
    if (isSpinning && words.length > 0) {
      setIsSpinning(false);
      const randomIndex = Math.floor(Math.random() * words.length);
      const selected = words[randomIndex];
      const updatedWords = words.filter((_, i) => i !== randomIndex);
      setCurrentWord(selected);
      setWords(updatedWords);
      setBgColor(getRandomColor());
      setShowSecondBox(false);
    } else if (!isSpinning && words.length > 0) {
      setCurrentWord('');
      setIsSpinning(true);
      setShowSecondBox(false);
    }
  };

  const resetGame = () => {
    setWords(wordCategories[selectedCategory]);
    setCurrentWord('');
    setIsSpinning(true);
    setRotation(0);
    setBgColor('#f4c3c3');
    setShowSecondBox(false);
  };

  const handleShowSecondBox = () => {
    setShowSecondBox(true);
  };

  return (
    <div className="container border p-4 my-5 border-success border-2 rounded">
        <div className="container text-center mt-5">

        {/* افکت انیمیشن برای باکس دوم */}
        <style>{`
            .fade-slide-in {
            animation: fadeSlideIn 0.7s ease forwards;
            opacity: 0;
            transform: translateY(20px);
            }
            @keyframes fadeSlideIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
            }
        `}</style>

        {/* انتخاب دسته‌بندی */}
        <div className="mb-5 text-end ">
            <h5>انتخاب دسته: <button className='btn-sm btn-warning' onClick={()=>setShowList(!showList)}>{showList ? 'HideList' : 'ShowList'}</button></h5>
            {showList && 
                Object.keys(wordCategories).map((category) => (
                <button
                    key={category}
                    className={`btn btn-sm me-2 mb-2 ${selectedCategory === category ? 'btn-success' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
                ))
            }
        </div>

        {/* باکس دوم چرخان */}
        <div
            style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#ffe4b5',
            borderRadius: '20px',
            position: 'absolute',
            left: '54%',
            transform: `translateX(-50%) rotate(${-rotation}deg)`,
            transition: isSpinning ? 'none' : 'transform 0.3s ease',
            zIndex: 0,
            }}
        ></div>

        {/* باکس اصلی کلمه */}
        <div
            onClick={handleClick}
            style={{
            width: '250px',
            height: '250px',
            backgroundColor: bgColor,
            color: '#000',
            border: '2px solid #333',
            borderRadius: '15px',
            cursor: 'pointer',
            fontSize: '3rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'none' : 'transform 0.3s ease',
            zIndex: 1,
            position: 'relative',
            }}
        >
            {currentWord}
        </div>

        {/* دکمه‌ها */}
        <div className="my-5">
            <button className="btn btn-primary me-2" onClick={resetGame}>
            شروع دوباره
            </button>
            <button className="btn btn-secondary" onClick={handleShowSecondBox}>
            نمایش کلمه
            </button>
        </div>

        {/* پیام اتمام کلمات */}
        {words.length === 0 && !isSpinning && (
            <p className="mt-3 text-success">همهٔ کلمات این دسته نمایش داده شدند!</p>
        )}

        {/* نمایش کلمه در باکس دوم */}
        {showSecondBox && currentWord && (
            <>
            <div
            className="mt-4 p-3 rounded border fade-slide-in"
            style={{
                backgroundColor: '#e0f7fa',
                color: '#333',
                fontSize: '1.5rem',
                maxWidth: '300px',
                margin: '0 auto',
            }}
            >
            <strong className='h1'>{currentWord}</strong>
            </div>
            </>
        )}
        <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <span>WordFlipBox</span>
    </div>
  );
};

export default WordFlipBox;
