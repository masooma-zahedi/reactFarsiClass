import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const questions = [
  {
    sentence: 'من هر روز به ___ می‌روم.',
    correctWord: 'مدرسه',
    options: ['مدرسه', 'سیب', 'باران'],
    image: 'https://i.pinimg.com/736x/28/07/eb/2807eb52c3035c3caa48347167545cd4.jpg'
  },
  {
    sentence: 'او یک ___ در دست دارد.',
    correctWord: 'کتاب',
    options: ['کتاب', 'دویدن', 'زنگ'],
    image: null
  }
];

const DragDropQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [droppedWord, setDroppedWord] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = questions[currentIndex];

  const onDrop = (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    setDroppedWord(word);
    setIsCorrect(null);
  };

  const onDragStart = (e, word) => {
    e.dataTransfer.setData('text/plain', word);
  };

  const checkAnswer = () => {
    setIsCorrect(droppedWord === currentQuestion.correctWord);
  };

  const nextQuestion = () => {
    setCurrentIndex(prev => prev + 1);
    setDroppedWord(null);
    setIsCorrect(null);
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setDroppedWord(null);
    setIsCorrect(null);
  };

  const resetCurrentQuestion = () => {
    setDroppedWord(null);
    setIsCorrect(null);
  };

  const getSentenceWithBlank = () => {
    const parts = currentQuestion.sentence.split('___');
    return (
      <>
        {parts[0]}
        <span
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="d-inline-block border border-primary rounded px-3 py-1 mx-2"
          style={{ minWidth: '60px', minHeight: '30px', backgroundColor: '#f0f8ff' }}
        >
          {droppedWord || '___'}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
        <div className="test " dir="rtl" style={{fontFamily:'Vazir,sans-serif'}}>

    <div className="container my-5 p-4 border rounded shadow bg-light text-end direction-rtl" style={{ fontFamily: 'Vazir' }}>
      <div className="d-flex justify-content-between align-items-center m-5" >
        <h4>جمله را کامل کن:</h4>
        <button className="btn btn-outline-danger btn-sm" onClick={resetGame}>
          شروع دوباره 🔁
        </button>
      </div>

      <div className="row align-items-center mb-4">
        {currentQuestion.image ? (
          <>
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <img
                src={currentQuestion.image}
                alt="تصویر مربوط به سوال"
                className="img-fluid rounded"
                style={{ maxHeight: '200px' }}
              />
            </div>
            <div className="col-md-8">
              <p className="fs-5">{getSentenceWithBlank()}</p>
              <div className="mt-4 mb-3 ">
        {currentQuestion.options.map((word, idx) => (
          <span
            key={idx}
            draggable
            onDragStart={(e) => onDragStart(e, word)}
            className="badge bg-secondary mx-2 p-2 fs-6"
            style={{ cursor: 'grab' }}
          >
            {word}
          </span>
        ))}
      </div>
            </div>
          </>
        ) : (
          <div className="col-12">
            <p className="fs-5">{getSentenceWithBlank()}</p>
            <div className="mt-4 mb-3 ">
        {currentQuestion.options.map((word, idx) => (
          <span
            key={idx}
            draggable
            onDragStart={(e) => onDragStart(e, word)}
            className="badge bg-secondary mx-2 p-2 fs-6"
            style={{ cursor: 'grab' }}
          >
            {word}
          </span>
        ))}
      </div>
          </div>
        )}
      </div>


      <div className="d-flex gap-2 flex-wrap flex-row-reverse mx-4">
        <button className="btn btn-success" onClick={checkAnswer} disabled={!droppedWord}>
          بررسی پاسخ ✅
        </button>
        <button className="btn btn-warning" onClick={resetCurrentQuestion}>
          پاک کردن پاسخ 🔄
        </button>
        {isCorrect && currentIndex < questions.length - 1 && (
          <button className="btn btn-primary" onClick={nextQuestion}>
            سوال بعدی ➡️
          </button>
        )}
      </div>

      {isCorrect !== null && (
        <div className="mt-3">
          {isCorrect ? (
            <div className="alert alert-success">آفرین! پاسخ درست است. 🎉</div>
          ) : (
            <div className="alert alert-danger">پاسخ اشتباه است. دوباره امتحان کن. ❌</div>
          )}
        </div>
      )}

      {isCorrect && currentIndex === questions.length - 1 && (
        <div className="alert alert-info mt-4">👏 تمام سوال‌ها تمام شد!</div>
      )}
      <br /><br />
    </div>
    </div>
  );
};

export default DragDropQuiz;
