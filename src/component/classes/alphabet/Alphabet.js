import { testBody, testColor, testFruit, testWear } from "./dataAlpha.js"
import { MakeWordCarousel } from "./MakeWordCarousel.js";
import {CardAlphaCompo} from "./cardAlpha/CardAlphaCompo.js"


export const Alphabet = () => {
    
  return (
    <>
        <div className = "container border border-warning mt-4">
          <CardAlphaCompo/>
          <MakeWordCarousel carouselName={testColor.wordCarousel} carouselData={testColor.alphaColor}/>
          <MakeWordCarousel carouselName={testFruit.wordCarousel} carouselData={testFruit.alphaImage}/>
          <MakeWordCarousel carouselName={testBody.wordCarousel} carouselData={testBody.alphaBody}/>
          <MakeWordCarousel carouselName={testWear.wordCarousel} carouselData={testWear.alphaWear}/>
        </div>
    </>
  )
}
 