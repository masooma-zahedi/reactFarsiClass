import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { sylabelWord1, sylabelWord2, sylabelWord3, sylabelWord4, sylabelWord5, sylabelWord6 } from './dataAlpha.js';
import { SylabeWords } from './SylabeWords.js';


export default function Reading() {
  return (
    <>
            <Routes>
                <Route path='/read-1' element={<SylabeWords infoSentence={sylabelWord1}/>}  />
                <Route path='/read-2' element={<SylabeWords infoSentence={sylabelWord2}/>}  />
                <Route path='/read-3' element={<SylabeWords infoSentence={sylabelWord3}/>}  />
                <Route path='/read-4' element={<SylabeWords infoSentence={sylabelWord4}/>}  />
                <Route path='/read-5' element={<SylabeWords infoSentence={sylabelWord5}/>}  />
                <Route path='/read-6' element={<SylabeWords infoSentence={sylabelWord6}/>}  />
            </Routes>
                
    </>
  )
}
