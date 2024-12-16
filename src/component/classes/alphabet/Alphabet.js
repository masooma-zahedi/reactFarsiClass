import { testColor, testFruit } from "./dataAlpha.js"

import { MakeWordCarousel } from "./MakeWordCarousel.js";


export const Alphabet = () => {
    
  return (
    <>
        <div className = "container border border-warning mt-4">
        Hi Alphabet
        <MakeWordCarousel carouselName={testColor.wordCarousel} carouselData={testColor.alphaColor}/>
        <MakeWordCarousel carouselName={testFruit.wordCarousel} carouselData={testFruit.alphaImage}/>
        </div>
    </>
  )
}
