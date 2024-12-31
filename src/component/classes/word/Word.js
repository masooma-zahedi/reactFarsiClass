import React from 'react'
import { SentenceCarousel } from './SentenceCarousel'
import { sentenceCarousel } from './dataWord';
import { testPicture } from './dataWord';
import { SentencePicture } from './SentencePicture'

export const Word = () => {
  return (
    <>
        <div className = "container border border-success mt-4">
            <SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>
            <SentencePicture carouselName={testPicture.wordCarousel} carouselData={testPicture.alphaColor}/>
        </div>
    
    </>
  )
}
