import { testBody, testColor, testFruit } from "./dataAlpha.js"

import { MakeWordCarousel } from "./MakeWordCarousel.js";


export const Alphabet = () => {
    
  return (
    <>
        <div className = "container border border-warning mt-4">
        <MakeWordCarousel carouselName={testColor.wordCarousel} carouselData={testColor.alphaColor}/>
        <MakeWordCarousel carouselName={testFruit.wordCarousel} carouselData={testFruit.alphaImage}/>
        <MakeWordCarousel carouselName={testBody.wordCarousel} carouselData={testBody.alphaBody}/>
        </div>
    </>
  )
}
