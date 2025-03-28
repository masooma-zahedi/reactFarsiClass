import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel, alphaLongCrousel,words1, alphaShortCrousel, kitchenDataTable, storyAlpha1, storyAlpha2, sylabelWord1, sylabelWord2, sylabelWord3, sylabelWord4, sylabelWord5, tableAnimals, tableColor_body, tableDataNum, tableProfessions, words2, storyAlpha3, words3, words4, words5} from "./dataAlpha.js";
// import {words} from "./dataAlpha.js";
import {CarouselAlpha} from "./CarouselAlpha"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { SidebarAlpha } from "./SidebarAlpha.js";
import { useState } from "react";
import FlipButton from "./FlipButton/FlipButton.js";
import FlippingTable from "./FlippingTable/FlippingTable.js";
import { Route, Routes } from "react-router-dom";
import BrokenGlass from "../BrokenGlasses.js";

export const Alphabet = () => {
  const [showShort, setShowShort] = useState(false)

  return (
    <>
        <div className = " mt-4">
          <div className='row'>
            <div className="col-s-0 col-lg-2  ps-5">
              <SidebarAlpha setShowShort={setShowShort} showShort= {showShort} idCarouselAlpha="shorthref1"/>
            </div>
            <div className="col-s-12 col-lg-9">
                <FlipButton frontText="Click Me masooma" backText="Thanks!" />
              <CarouselAlpha dataCarousel={alphaCrousel}/>
               {/* <CardAlphaCompo/>  */}
              <Routes>
                                <Route path='/' element={<CardAlphaCompo/>}  />
                                <Route path='/shortSound' element={<CarouselAlpha idCarouselAlpha="shorthref1"  dataCarousel={alphaShortCrousel}/>}  />
                                <Route path='/longSound' element={<CarouselAlpha  idCarouselAlpha="longhref1"  dataCarousel={alphaLongCrousel}/>}  />
                                <Route path='/storyA1' element={<CarouselAlpha  idCarouselAlpha="storyAl1"  dataCarousel={storyAlpha1}/>}  />
                                <Route path='/storyA2' element={<CarouselAlpha  idCarouselAlpha="storyAl2"  dataCarousel={storyAlpha2}/>}  />
                                <Route path='/storyA3' element={<CarouselAlpha  idCarouselAlpha="storyAl3"  dataCarousel={storyAlpha3}/>}  />
                                <Route path='/read-1' element={<SylabeWords infoSentence={sylabelWord1}/>}  />
                                <Route path='/read-2' element={<SylabeWords infoSentence={sylabelWord2}/>}  />
                                <Route path='/read-3' element={<SylabeWords infoSentence={sylabelWord3}/>}  />
                                <Route path='/read-4' element={<SylabeWords infoSentence={sylabelWord4}/>}  />
                                <Route path='/read-5' element={<SylabeWords infoSentence={sylabelWord5}/>}  />
                                <Route path='/numberGame' element={<FlippingTable idTablePlay="play1" tableData={tableDataNum.photoData} bgTable={tableDataNum.bgTable} showBack1={false} />}  />
                                <Route path='/kitchenGame' element={<FlippingTable idTablePlay="kitU1" tableData={kitchenDataTable.photoData} bgTable={kitchenDataTable.bgTable} showBack1={true} />}  />
                                <Route path='/professions' element={<FlippingTable idTablePlay="prof1" tableData={tableProfessions.photoData} bgTable={tableProfessions.bgTable} showBack1={false} />}  />
                                <Route path='/animals' element={<FlippingTable idTablePlay="anim1" tableData={tableAnimals.photoData} bgTable={tableAnimals.bgTable} showBack1={true} />}  />
                                <Route path='/tableColor_body' element={<FlippingTable idTablePlay="colorBo1" tableData={tableColor_body.photoData} bgTable={tableColor_body.bgTable} showBack1={true} />}  />
                                <Route path='/brokenW-1' element={<BrokenGlass words={words1} />}  />
                                <Route path='/brokenW-2' element={<BrokenGlass words={words2} />}  />
                                <Route path='/brokenW-3' element={<BrokenGlass words={words3} />}  />
                                <Route path='/brokenW-4' element={<BrokenGlass words={words4} />}  />
                                <Route path='/brokenW-5' element={<BrokenGlass words={words5} />}  />
              </Routes>
              <WordCarousel/>
            </div>
          </div>
        </div>

    </>
  )
}
 