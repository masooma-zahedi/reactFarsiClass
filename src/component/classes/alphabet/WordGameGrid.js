import React, { useState, useRef  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ترجمه کلمات به انگلیسی
const wordTranslations = {
  "صندلی": "Chair", "میز": "Table", "لامپ": "Lamp", "فرش": "Carpet",
  "یخچال": "Fridge", "پنکه": "Fan", "کمد": "Closet", "تلویزیون": "TV",
  "تخت": "Bed", "پتو": "Blanket", "درخت": "Tree", "برگ": "Leaf",
  "آبشار": "Waterfall", "کوه": "Mountain", "رود": "River", "خورشید": "Sun",
  "گل": "Flower", "ابر": "Cloud", "سنگ": "Rock", "جنگل": "Forest"
};

// دسته‌بندی کلمات
const wordCategories = {
  "وسایل خانه": ["صندلی", "میز", "لامپ", "فرش", "یخچال", "پنکه", "کمد", "تلویزیون", "تخت", "پتو"],
  "طبیعت": ["درخت", "برگ", "آبشار", "کوه", "رود", "خورشید", "گل", "ابر", "سنگ", "جنگل"]
};

// رنگ‌های جدول
const colors = [
  "#DA70D6", "#556B2F", "#AFEEEE", "#DB7093", "#9B8FCB", "#A66B41", "#DCDCF1", "#F8707C",
  "#367C89", "#3CE140", "#45E5C0", "#B3B342", "#2BC749", "#6A8A8F", "#DB49E7", "#BFE5A3",
  "#BEBEBE", "#7FFF7F", "#C67953", "#54A3D9"
];

const WordGameGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState('');
  const [turn, setTurn] = useState(0);
  const [scores, setScores] = useState({});
  const [wordScores, setWordScores] = useState({});
  const [usedWords, setUsedWords] = useState([]);
  const inputRef = useRef(null);


  // ریست کامل
  const resetGame = () => {
    setPlayers([]);
    setName('');
    setTurn(0);
    setScores({});
    setWordScores({});
    setUsedWords([]);
    setSelectedCategory('');
  };

  // افزودن بازیکن
const addPlayer = () => {
  if (name.trim()) {
    setPlayers([...players, name]);
    setScores({ ...scores, [name]: 0 });
    setName('');
    inputRef.current.focus();  // فوکوس دوباره روی input
  }
};


  // کلیک روی کلمه
  const handleWordClick = (word) => {
    if (usedWords.includes(word)) return;

    const randomScore = Math.floor(Math.random() * 4) + 1;
    const currentPlayer = players[turn];
    const updatedScore = scores[currentPlayer] + randomScore;

    setScores({ ...scores, [currentPlayer]: updatedScore });
    setWordScores({ ...wordScores, [word]: randomScore });
    setUsedWords([...usedWords, word]);
    setTurn((turn + 1) % players.length);
  };

  // نمایش سکه و ترجمه
  const renderCoin = (word, score) => (
    <div className="text-center mt-2">
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'gold',
          color: 'black',
          fontWeight: 'bold',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '5px'
        }}
      >
        {score}
      </div>
      <div style={{ fontSize: '0.9rem', color: 'black' }}>
        {wordTranslations[word] || "?"}
      </div>
    </div>
  );

  const wordList = selectedCategory ? wordCategories[selectedCategory] : [];

  return (
    <div className="container mt-4 border border-3 border-info rounded-3  p-3">
      <h3 className="mb-3 text-center">🎮 بازی امتیازدهی کلمات</h3>

      {/* انتخاب موضوع */}
      {!selectedCategory && (
        <>
        <div className='text-end'>
          <h5>🗂️ انتخاب موضوع:</h5>
          <div className="mb-4">
            {Object.keys(wordCategories).map((category, i) => (
              <button key={i} className="btn btn-outline-primary m-2" onClick={() => setSelectedCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
        </>
      )}

      {/* بازی شروع شده */}
      {selectedCategory && (
        <>
          <h5>موضوع انتخاب شده: <span className="text-success">{selectedCategory}</span></h5>
          <button className="btn btn-danger mb-3" onClick={resetGame}>🔄 ریست کامل بازی</button>

          {/* ورودی بازیکن */}
          <div className="input-group mb-3">
            <input
              type="text"
              ref={inputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addPlayer();
                }
              }}
              className="form-control"
              placeholder="نام بازیکن"
            />
            <button className="btn btn-success" onClick={addPlayer}>افزودن</button>
          </div>

          {/* بازیکنان و نوبت */}
          {players.length > 0 && (
            <>
              <div className="mb-3"><strong>بازیکنان:</strong> {players.join(' ، ')}</div>
              <div className="mb-3 text-primary">🎯 نوبت: {players[turn]}</div>

              {/* جدول کلمات */}
              <div className="d-flex flex-wrap">
                {wordList.map((word, index) => (
                  <div
                    key={index}
                    onClick={() => handleWordClick(word)}
                    className="d-flex  justify-content-center align-items-center text-center m-1 "
                    style={{
                      width: '23%',
                      height: '100px',
                      backgroundColor: colors[index % colors.length],
                      border: '1px solid green',
                      fontWeight: 'bold',
                      color: 'rgb(84, 12, 173)',
                      fontSize: '1.8rem',
                      padding:'40px ',
                      cursor: usedWords.includes(word) ? 'default' : 'pointer',
                      opacity: usedWords.includes(word) ? 0.7 : 1
                    }}
                  >
                    {word}
                    {wordScores[word] && renderCoin(word, wordScores[word])}
                  </div>
                ))}
              </div>

              {/* امتیاز بازیکنان */}
              <h5 className="mt-4">🏆 امتیاز بازیکنان:</h5>
              <ul>
                {players.map((p, i) => (
                  <li key={i}>{p}: {scores[p]}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WordGameGrid;
