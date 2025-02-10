import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel, alphaLongCrousel, alphaShortCrousel, kitchenDataTable, sylabelWord1, sylabelWord2, sylabelWord3, tableDataNum} from "./dataAlpha.js"
import {CarouselAlpha} from "./CarouselAlpha"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { SidebarAlpha } from "./SidebarAlpha.js";
import { useState } from "react";
import FlipButton from "./FlipButton/FlipButton.js";
import FlippingTable from "./FlippingTable/FlippingTable.js";
import { Route, Routes } from "react-router-dom";

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
                                <Route path='/read-1' element={<SylabeWords infoSentence={sylabelWord1}/>}  />
                                <Route path='/read-2' element={<SylabeWords infoSentence={sylabelWord2}/>}  />
                                <Route path='/read-3' element={<SylabeWords infoSentence={sylabelWord3}/>}  />
                                <Route path='/numberGame' element={<FlippingTable idTablePlay="play1" tableData={tableDataNum.photoData} bgTable={tableDataNum.bgTable} showBack1={false} />}  />
                                <Route path='/kitchenGame' element={<FlippingTable idTablePlay="kitU1" tableData={kitchenDataTable.photoData} bgTable={kitchenDataTable.bgTable} showBack1={true} />}  />
              </Routes>
              <WordCarousel/>
            </div>
          </div>
        </div>

    </>
  )
}
 