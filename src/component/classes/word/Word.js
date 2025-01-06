import React from 'react'
import { SentenceCarousel } from './SentenceCarousel'
import { sentenceCarousel, testPicture, testGramer } from './dataWord';
import { lionBear, realFriends } from './dataWord';
import { SentencePicture } from './SentencePicture'
import { TheStory } from '../story/TheStory';

export const Word = () => {
  return (
    <>
        <div className = "container border border-success mt-4">
            <SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>
            <SentencePicture carouselName={testPicture.wordCarousel} carouselData={testPicture.alphaColor}/>
            <SentencePicture carouselName={testGramer.wordCarousel} carouselData={testGramer.alphaColor}/>
            <TheStory srcStory={lionBear}/>
            <TheStory srcStory={realFriends}/>
        </div>
    
    </>
  )
}
