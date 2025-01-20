import React from 'react'
import { SentenceCarousel } from './SentenceCarousel'
import { sentenceCarousel, testPicture,testPicture2, testGramer } from './dataWord';
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
            <SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>
            <SentencePicture carouselName={testPicture.wordCarousel} carouselData={testPicture.alphaColor}/>
            <SentencePicture carouselName={testPicture2.wordCarousel} carouselData={testPicture2.alphaColor}/>
            <SentencePicture carouselName={testGramer.wordCarousel} carouselData={testGramer.alphaColor}/>
            <TheStory srcStory={lionBear}/>
            <TheStory srcStory={realFriends}/>
          </div>
        </div>
        
    
    </>
  )
}
