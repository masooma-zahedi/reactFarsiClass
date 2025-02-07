import { testBody, testColor, testFruit, testWear, testSchoolSupplies, testDaysOfWeek, testNumbers,testOrder1, kitchenUtensils1, professions1 } from "./dataAlpha.js"
import { MakeWordCarousel } from "./MakeWordCarousel.js";

export const WordCarousel = () => {
  return (
    <>
        <MakeWordCarousel carouselName={testColor.wordCarousel} carouselData={testColor.alphaColor} />
        <MakeWordCarousel carouselName={testFruit.wordCarousel} carouselData={testFruit.alphaImage}/>
        <MakeWordCarousel carouselName={testBody.wordCarousel} carouselData={testBody.alphaBody}/>
        <MakeWordCarousel carouselName={testWear.wordCarousel} carouselData={testWear.alphaWear}/>
        <MakeWordCarousel carouselName={testSchoolSupplies.wordCarousel} carouselData={testSchoolSupplies.alphaWear}/>
        <MakeWordCarousel carouselName={testDaysOfWeek.wordCarousel} carouselData={testDaysOfWeek.alphaDays}/>
        <MakeWordCarousel carouselName={testNumbers.wordCarousel} carouselData={testNumbers.alphaDays}/>
        <MakeWordCarousel carouselName={testOrder1.wordCarousel} carouselData={testOrder1.alphaDays}/>
        <MakeWordCarousel carouselName={kitchenUtensils1.wordCarousel} carouselData={kitchenUtensils1.alphaKitchen}/>
        <MakeWordCarousel carouselName={professions1.wordCarousel} carouselData={professions1.alphaKitchen}/>

    </>
  )
}
