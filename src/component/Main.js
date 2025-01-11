import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Alphabet } from './classes/alphabet/Alphabet';
import {Word} from './classes/word/Word'
import { Story } from './classes/story/Story';
import { ScrollToTop } from './classes/ScrollToTop';
import { SidebarAlpha } from './classes/alphabet/SidebarAlpha';

export const Main = () => {
  return (
    <>
      <div style={{height:"400px", opacity:"0.9"}}>
        <img className='w-100 h-100' src="./images/webPic/ad-1.png" alt="" />
      </div>
      <div className='row'>
        <div className="col-s-0 col-lg-2  ps-5">
          <SidebarAlpha />
        </div>
        <div className="col-s-12 col-lg-9">
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Alphabet/>} end />
            <Route path='/word' element={<Word/>} />
            <Route path='/story' element={<Story/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}
