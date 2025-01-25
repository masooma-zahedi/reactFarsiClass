import React, { useState } from 'react';
import './FlippingTable.css';

const FlippingTable = ({ tableData, idTablePlay }) => {
  const [flippedCells, setFlippedCells] = useState({});

  const handleFlip = (row, col) => {
    setFlippedCells((prev) => ({
      ...prev,
      [`${row}-${col}`]: !prev[`${row}-${col}`],
    }));
  };

  return (
    <table id={idTablePlay} className="flipping-table">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className={`cell ${flippedCells[`${rowIndex}-${colIndex}`] ? 'flipped' : ''}`}
                onClick={() => handleFlip(rowIndex, colIndex)}
              >
                <div className="cell-inner">
                  <div className="cell-front "> <img className='w-100 h-100' src={cell.front}  alt="" srcset="" /> </div>
                  {/* <div className="cell-back">{cell.back}</div> */}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlippingTable;
