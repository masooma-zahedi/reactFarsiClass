import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel} from "./dataAlpha.js"
import {CarouselAlpha} from "./CarouselAlpha"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { ScrollTotop } from "../ScrollToTop.js";


export const Alphabet = () => {
    
  return (
    <>
        <div className = "container mt-4">
          <CarouselAlpha  dataCarousel={alphaCrousel}/>
          <CardAlphaCompo/>
          <SylabeWords/>
          <WordCarousel/>
        </div>
    </>
  )
}
 