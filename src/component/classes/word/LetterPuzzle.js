import React, { useState } from 'react';
// import { form } from 'react-bootstrap';

const getRandomPersianLetter = () => {
  const persianLetters = 'ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی';
  return persianLetters[Math.floor(Math.random() * persianLetters.length)];
};

const LetterPuzzle = ({ rows = 10, cols = 10 }) => {
  // Stateها
  const [wordsInput, setWordsInput] = useState('نمونه,کلمات,اینجا');
  const [grid, setGrid] = useState([]);
  const [highlightedCells, setHighlightedCells] = useState(new Map());
  const [revealedCells, setRevealedCells] = useState(new Map());
  const [show, setShow]= useState(false);

  // توابع اصلی
  const parseWords = (input) => {
    return input.split(',').map(word => word.trim()).filter(word => word.length > 0);
  };

  const canPlaceWord = (grid, word, startRow, startCol, direction) => {
    if (direction === 'horizontal') {
      if (startCol + word.length > cols) return false;
      for (let i = 0; i < word.length; i++) {
        if (grid[startRow][startCol + i] !== '' && grid[startRow][startCol + i] !== word[i]) {
          return false;
        }
      }
    } else {
      if (startRow + word.length > rows) return false;
      for (let i = 0; i < word.length; i++) {
        if (grid[startRow + i][startCol] !== '' && grid[startRow + i][startCol] !== word[i]) {
          return false;
        }
      }
    }
    return true;
  };

  const placeWord = (grid, word, startRow, startCol, direction) => {
    if (direction === 'horizontal') {
      for (let i = 0; i < word.length; i++) {
        grid[startRow][startCol + i] = word[i];
      }
    } else {
      for (let i = 0; i < word.length; i++) {
        grid[startRow + i][startCol] = word[i];
      }
    }
  };

  const initializeGrid = (rows, cols, words) => {
    let grid = Array.from({ length: rows }, () => Array(cols).fill(''));
    let allWordsPlaced = false;

    while (!allWordsPlaced) {
      grid = Array.from({ length: rows }, () => Array(cols).fill(''));
      allWordsPlaced = true;

      for (const word of words) {
        let placed = false;
        let attempts = 0;

        while (!placed && attempts < 100) {
          const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
          const startRow = Math.floor(Math.random() * rows);
          const startCol = Math.floor(Math.random() * cols);

          if (canPlaceWord(grid, word, startRow, startCol, direction)) {
            placeWord(grid, word, startRow, startCol, direction);
            placed = true;
          }
          attempts++;
        }

        if (!placed) {
          allWordsPlaced = false;
          break;
        }
      }
    }

    // پر کردن خانه‌های خالی
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === '') {
          grid[i][j] = getRandomPersianLetter();
        }
      }
    }

    return grid;
  };

  const handleGenerateGrid = () => {
    const words = parseWords(wordsInput);
    setGrid(initializeGrid(rows, cols, words));
    setHighlightedCells(new Map());
    setRevealedCells(new Map());
    
  };

  const isPartOfWord = (row, col) => {
    const words = parseWords(wordsInput);
    for (const word of words) {
      // جستجوی افقی
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= cols - word.length; j++) {
          if (grid[i]?.slice(j, j + word.length).join('') === word) {
            for (let k = 0; k < word.length; k++) {
              if (i === row && j + k === col) {
                return word;
              }
            }
          }
        }
      }

      // جستجوی عمودی
      for (let i = 0; i <= rows - word.length; i++) {
        for (let j = 0; j < cols; j++) {
          let verticalWord = '';
          for (let k = 0; k < word.length; k++) {
            verticalWord += grid[i + k]?.[j] || '';
          }
          if (verticalWord === word) {
            for (let k = 0; k < word.length; k++) {
              if (i + k === row && j === col) {
                return word;
              }
            }
          }
        }
      }
    }
    return null;
  };

  const handleCellClick = (row, col) => {
    const word = isPartOfWord(row, col);
    if (word) {
      const newRevealedCells = new Map(revealedCells);
      newRevealedCells.set(`${row}-${col}`, word);
      setRevealedCells(newRevealedCells);
    }
  };

  const highlightWords = () => {
    const words = parseWords(wordsInput);
    const cellsToHighlight = new Map();

    words.forEach((word, index) => {
      const color = `hsl(${(index * 360) / words.length}, 100%, 70%)`;

      // جستجوی افقی
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= cols - word.length; j++) {
          if (grid[i]?.slice(j, j + word.length).join('') === word) {
            for (let k = 0; k < word.length; k++) {
              cellsToHighlight.set(`${i}-${j + k}`, color);
            }
          }
        }
      }

      // جستجوی عمودی
      for (let i = 0; i <= rows - word.length; i++) {
        for (let j = 0; j < cols; j++) {
          let verticalWord = '';
          for (let k = 0; k < word.length; k++) {
            verticalWord += grid[i + k]?.[j] || '';
          }
          if (verticalWord === word) {
            for (let k = 0; k < word.length; k++) {
              cellsToHighlight.set(`${i + k}-${j}`, color);
            }
          }
        }
      }
    });

    setHighlightedCells(cellsToHighlight);
  };

  const getColorForWord = (word) => {
    const words = parseWords(wordsInput);
    const index = words.indexOf(word);
    return index >= 0 ? `hsl(${(index * 360) / words.length}, 100%, 70%)` : 'white';
  };

  const deleteWordSee =()=>{ setShow(!show);}

  return (
    <div className="App mt-5 container border border-3 border-success" style={{direction: 'rtl'}}>
      <h3 className='p-3 text-center bg-info mt-1 rounded-3'>بازی پیدا کردن کلمات</h3>
      <div>
        {!show && 
          <form className="form-group mb-3">
            <label>کلمات مورد نظر (با کاما انگلیسی  جدا کنید)</label>
            <input className='form-control'
              type="text"
              value={wordsInput}
              onChange={(e) => setWordsInput(e.target.value)}
              placeholder="مثال: سلام,پازل,مادر"
            />
          </form>
        }
        
        <button onClick={handleGenerateGrid} className=" btn btn-primary mb-3">
          ایجاد جدول
        </button>
        <button onClick={deleteWordSee} className={`btn mb-3 mx-2 ${!show ? ' btn-danger' : " btn-success"}` }>
          {!show ? ' حذف کلمات' : " نمایش کلمات"}
        {/* حذف کلمات نمایش */}
        </button>

        {grid.length > 0 && (
          <>
            <table bordered className= 'table bordered my-5'>
              <tbody className='border border-danger mt-5'>
                {grid.map((row, rowIndex) => (
                  <tr  key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td
                        className='text-center h3 border border-info py-2 pm-2 ps-1 '
                        key={colIndex}
                        style={{
                          backgroundColor:
                            highlightedCells.get(`${rowIndex}-${colIndex}`) ||
                            (revealedCells.has(`${rowIndex}-${colIndex}`)
                              ? getColorForWord(revealedCells.get(`${rowIndex}-${colIndex}`))
                              : 'rgba(221, 245, 250, 0.47)')
                                              }}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=' mx-3 my-5 pb-3'>
              <button onClick={highlightWords} className=" btn mx-2 bg-warning border border-warning ">
                برجسته‌سازی کلمات
              </button>
              <button className='bg-success btn border border-success' onClick={handleGenerateGrid}>
                بازنشانی جدول
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LetterPuzzle;