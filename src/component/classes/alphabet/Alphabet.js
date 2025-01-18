import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel, sylabelWord1, sylabelWord2} from "./dataAlpha.js"
import {CarouselAlpha} from "./CarouselAlpha"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { SidebarAlpha } from "./SidebarAlpha.js";

export const Alphabet = () => {
    
  return (
    <>
        <div className = " mt-4">
          <div className='row'>
            <div className="col-s-0 col-lg-2  ps-5">
                      <SidebarAlpha />
            </div>
            <div className="col-s-12 col-lg-9">
              <CarouselAlpha  dataCarousel={alphaCrousel}/>
              <CardAlphaCompo/>
              <SylabeWords infoSentence={sylabelWord1}/>
              <SylabeWords infoSentence={sylabelWord2}/>
              <WordCarousel/>
            </div>
          </div>
        </div>
    </>
  )
}
 