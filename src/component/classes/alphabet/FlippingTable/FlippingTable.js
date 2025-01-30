import React, { useState } from 'react';
import './FlippingTable.css';

const FlippingTable = ({ tableData, idTablePlay, showBack1,bgTable }) => {
  const [flippedCells, setFlippedCells] = useState({});
  const [showBack, setShowBack] = useState(showBack1)
   

  const handleFlip = (row, col) => {
    setFlippedCells((prev) => ({
      ...prev,
      [`${row}-${col}`]: !prev[`${row}-${col}`],
    }));
  };

  return (
    <table id={idTablePlay} style={{backgroundImage:`url(${bgTable})`}} className="flipping-table mt-5">
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
                  {showBack && <div className="cell-back" onClick={(e)=>{e.target.parentElement.parentElement.style.display="none" }}><img className='w-100 h-100' src={cell.back}  alt="" srcset="" /></div>}
                  
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
