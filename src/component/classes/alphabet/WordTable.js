import React from 'react';
import BrokenGlass from "../BrokenGlasses.js";
import { Route, Routes } from 'react-router-dom';
import { words1, words2, words3, words4, words5, words6, words7, words8, words9 } from './dataAlpha';
import WordBox from './WordBox.js';


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
                <Route path='/wordBox-1' element={<WordBox wordB={words9} />}  />
            </Routes>
                
    </>
  )
}
