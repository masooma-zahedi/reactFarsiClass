import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { SentenceCarousel } from './SentenceCarousel'
import { sentenceCarousel, testPicture,testPicture2, testGramer, lazyDonky, laklak } from './dataWord';
import { lionBear, realFriends } from './dataWord';
import { SentencePicture } from './SentencePicture'
import { TheStory } from '../story/TheStory';
import { SidebarWord } from './SidebarWord.js';

export const Word = () => {
  return (
    <>
        {/* <div className = "container mt-4">
        </div> */}
        <div className='row'>
          <div className="col-s-0 col-lg-2  ps-5">
                    <SidebarWord />
          </div>
          <div className="col-s-12 col-lg-9">
            {/* <SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>
            <SentencePicture carouselName={testPicture.wordCarousel} carouselData={testPicture.alphaColor}/>
            <SentencePicture carouselName={testPicture2.wordCarousel} carouselData={testPicture2.alphaColor}/>
            <SentencePicture carouselName={testGramer.wordCarousel} carouselData={testGramer.alphaColor}/>
            <TheStory srcStory={lionBear}/>
            <TheStory srcStory={realFriends}/>
            <TheStory srcStory={lazyDonky}/> */}


            <Routes>
              <Route path='/sentenceCarousel-1' element={<SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>}  />
              <Route path='/verbs-1' element={<SentencePicture carouselName={testPicture.wordCarousel} carouselData={testPicture.alphaColor}/>}  />
              <Route path='/verbs-2' element={<SentencePicture carouselName={testPicture2.wordCarousel} carouselData={testPicture2.alphaColor}/>}  />
              <Route path='/orderLangua' element={<SentencePicture carouselName={testGramer.wordCarousel} carouselData={testGramer.alphaColor}/>}  />
              <Route path='/lionB2' element={<TheStory srcStory={lionBear}/>}  />
              <Route path='/realF2' element={<TheStory srcStory={realFriends}/>}  />
              <Route path='/lazyD2' element={<TheStory srcStory={lazyDonky}/>}  />
              <Route path='/lakLak' element={<TheStory srcStory={laklak}/>}  />
            </Routes>




          </div>
        </div>
        
    
    </>
  )
}
