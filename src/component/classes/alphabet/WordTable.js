import React from 'react';
import BrokenGlass from "../BrokenGlasses.js";
import { Route, Routes } from 'react-router-dom';
import { words1, words10, words11, words12, words13, words14, words15, words16, words2, words3, words4, words5, words6, words7, words8, words9 } from './dataAlpha';
import WordBox from './WordBox.js';
import WordGameGrid from './WordGameGrid.js';
import WordFlipBox from './WordFlipBox.js';


export default function WordTable() {
  return (
    <>
            <Routes>
                <Route path='/brokenW-1' element={<BrokenGlass words={words1} />}  />
                <Route path='/brokenW-2' element={<BrokenGlass words={words2} />}  />
                <Route path='/brokenW-3' element={<BrokenGlass words={words3} />}  />
                <Route path='/brokenW-4' element={<BrokenGlass words={words4} />}  />
                <Route path='/brokenW-5' element={<BrokenGlass words={words5} />}  />
                <Route path='/brokenW-6' element={<BrokenGlass words={words6} />}  />
                <Route path='/brokenW-7' element={<BrokenGlass words={words7} />}  />
                <Route path='/brokenW-8' element={<BrokenGlass words={words8} />}  />
                <Route path='/brokenW-9' element={<BrokenGlass words={words12} />}  />
                <Route path='/brokenW-10' element={<BrokenGlass words={words16} />}  />
                <Route path='/wordBox-1' element={<WordBox wordB={words9} />}  />
                <Route path='/wordBox-2' element={<WordBox wordB={words10} />}  />
                <Route path='/wordBox-3' element={<WordBox wordB={words11} />}  />
                <Route path='/wordBox-4' element={<WordBox wordB={words13} />}  />
                <Route path='/wordBox-5' element={<WordBox wordB={words7} />}  />
                <Route path='/wordBox-6' element={<WordBox wordB={words14} />}  />
                <Route path='/wordBox-7' element={<WordBox wordB={words15} />}  />
                <Route path='/wordGameGride' element={<WordGameGrid />}  />
                <Route path='/wordFlipBox' element={<WordFlipBox />}  />
            </Routes>
                
    </>
  )
}
