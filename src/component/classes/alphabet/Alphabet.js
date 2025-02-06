import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel, alphaLongCrousel, alphaShortCrousel, kitchenDataTable, sylabelWord1, sylabelWord2, sylabelWord3, tableDataNum} from "./dataAlpha.js"
import {CarouselAlpha} from "./CarouselAlpha"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { SidebarAlpha } from "./SidebarAlpha.js";
import { useState } from "react";
import FlipButton from "./FlipButton/FlipButton.js";
import FlippingTable from "./FlippingTable/FlippingTable.js";

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
              <CardAlphaCompo/>
              {showShort && <CarouselAlpha idCarouselAlpha="shorthref1"  dataCarousel={alphaShortCrousel}/>}
              {showShort && <CarouselAlpha  idCarouselAlpha="longhref1"  dataCarousel={alphaLongCrousel}/>}
              
              <SylabeWords infoSentence={sylabelWord1}/>
              <SylabeWords infoSentence={sylabelWord2}/>
              <SylabeWords infoSentence={sylabelWord3}/>
              <FlippingTable idTablePlay="play1" tableData={tableDataNum.photoData} bgTable={tableDataNum.bgTable} showBack1={false} />
              <FlippingTable idTablePlay="kitU1" tableData={kitchenDataTable.photoData} bgTable={kitchenDataTable.bgTable} showBack1={true} />
              <WordCarousel/>
            </div>
          </div>
        </div>

    </>
  )
}
 