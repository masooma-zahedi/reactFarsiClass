import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { gameWords, } from './dataAlpha';


function GameW({iframeData}) {
    
  return (
    <>
        <div className='container' style={{width:'100%', height:"100vh"}}>
            {iframeData}
        </div>
    </>
  )
}

export default function GameWord() {
  return (
    <>
    {/* <GameW iframeData={gameWords.iframe1}/> */}
             <Routes>
                 <Route path='/gameWordM' element={<GameW iframeData={gameWords.iframe1} />}  />
                 <Route path='/gameWordN' element={<GameW iframeData={gameWords.iframe2} />}  />
                 {/* <Route path='/gameWordM1' element={<GameW iframeData={gameWords.iframe3} />}  /> */}
             </Routes>
                
    </>
  )
}


// export default GameWord;