import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel, alphaShortCrousel, sylabelWord1, sylabelWord2} from "./dataAlpha.js"
import {CarouselAlpha} from "./CarouselAlpha"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { SidebarAlpha } from "./SidebarAlpha.js";
import { useState } from "react";

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
              <CarouselAlpha  dataCarousel={alphaCrousel}/>
              <CardAlphaCompo/>
              {showShort && <CarouselAlpha idCarouselAlpha="shorthref1"  dataCarousel={alphaShortCrousel}/>}
              
              <SylabeWords infoSentence={sylabelWord1}/>
              <SylabeWords infoSentence={sylabelWord2}/>
              <WordCarousel/>
            </div>
          </div>
        </div>
    </>
  )
}
 