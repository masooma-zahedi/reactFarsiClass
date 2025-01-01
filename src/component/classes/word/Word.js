import React from 'react'
import { SentenceCarousel } from './SentenceCarousel'
import { sentenceCarousel, testPicture, testGramer } from './dataWord';
import {  } from './dataWord';
import { SentencePicture } from './SentencePicture'

export const Word = () => {
  return (
    <>
        <div className = "container border border-success mt-4">
            <SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>
            <SentencePicture carouselName={testPicture.wordCarousel} carouselData={testPicture.alphaColor}/>
            <SentencePicture carouselName={testGramer.wordCarousel} carouselData={testGramer.alphaColor}/>
        </div>
    
    </>
  )
}
