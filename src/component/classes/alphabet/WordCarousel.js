import { testBody, testColor, testFruit, testWear, testSchoolSupplies, testDaysOfWeek, testNumbers,testOrder1, kitchenUtensils1, professions1, animals1 } from "./dataAlpha.js"
import { MakeWordCarousel } from "./MakeWordCarousel.js";
import { Routes, Route } from 'react-router-dom';


export const WordCarousel = () => {
  return (
    <>
      <Routes>
                  <Route path='/colorPart-2' element={<MakeWordCarousel carouselName={testColor.wordCarousel} carouselData={testColor.alphaColor} />}  />
                  <Route path='/fruitPart-2' element={<MakeWordCarousel carouselName={testFruit.wordCarousel} carouselData={testFruit.alphaImage}/>}  />
                  <Route path='/bodyPart-2' element={<MakeWordCarousel carouselName={testBody.wordCarousel} carouselData={testBody.alphaBody}/>}  />
                  <Route path='/wearPart-2' element={<MakeWordCarousel carouselName={testWear.wordCarousel} carouselData={testWear.alphaWear}/>}  />
                  <Route path='/supplyPart-2' element={<MakeWordCarousel carouselName={testSchoolSupplies.wordCarousel} carouselData={testSchoolSupplies.alphaWear}/>}  />
                  <Route path='/numPart-2' element={<MakeWordCarousel carouselName={testNumbers.wordCarousel} carouselData={testNumbers.alphaDays}/>}  />
                  <Route path='/daysPart-2' element={<MakeWordCarousel carouselName={testDaysOfWeek.wordCarousel} carouselData={testDaysOfWeek.alphaDays}/>}  />
                  <Route path='/orderPart-2' element={<MakeWordCarousel carouselName={testOrder1.wordCarousel} carouselData={testOrder1.alphaDays}/>}  />
                  <Route path='/kitchen1Part-2' element={<MakeWordCarousel carouselName={kitchenUtensils1.wordCarousel} carouselData={kitchenUtensils1.alphaKitchen}/>}  />
                  <Route path='/professionsPart-2' element={<MakeWordCarousel carouselName={professions1.wordCarousel} carouselData={professions1.alphaKitchen}/>}  />
                  <Route path='/animalsPart-2' element={<MakeWordCarousel carouselName={animals1.wordCarousel} carouselData={animals1.alphaAnimal}/>}  />
      </Routes>



    </>
  )
}
