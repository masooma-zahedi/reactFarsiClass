import React from 'react'
import { SentenceCarousel } from './SentenceCarousel'
import { sentenceCarousel } from './dataWord'

export const Word = () => {
  return (
    <>
        <div className = "container border border-success mt-4">
            <SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>
        </div>
    
    </>
  )
}
