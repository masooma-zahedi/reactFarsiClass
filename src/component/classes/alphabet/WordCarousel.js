import { testBody, testColor, testFruit, testWear, testSchoolSupplies, testDaysOfWeek, testNumbers } from "./dataAlpha.js"
import { MakeWordCarousel } from "./MakeWordCarousel.js";

export const WordCarousel = () => {
  return (
    <>
        <MakeWordCarousel carouselName={testColor.wordCarousel} carouselData={testColor.alphaColor}/>
        <MakeWordCarousel carouselName={testFruit.wordCarousel} carouselData={testFruit.alphaImage}/>
        <MakeWordCarousel carouselName={testBody.wordCarousel} carouselData={testBody.alphaBody}/>
        <MakeWordCarousel carouselName={testWear.wordCarousel} carouselData={testWear.alphaWear}/>
        <MakeWordCarousel carouselName={testSchoolSupplies.wordCarousel} carouselData={testSchoolSupplies.alphaWear}/>
        <MakeWordCarousel carouselName={testDaysOfWeek.wordCarousel} carouselData={testDaysOfWeek.alphaDays}/>
        <MakeWordCarousel carouselName={testNumbers.wordCarousel} carouselData={testNumbers.alphaDays}/>

    </>
  )
}
