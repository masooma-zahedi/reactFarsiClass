import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel, alphaLongCrousel, alphaShortCrousel, kitchenDataTable, storyAlpha1, storyAlpha2,  tableAnimals, tableColor_body, tableDataNum, tableProfessions, storyAlpha3, ququly, storyAlpha4, puyaStory, gameWords, aminFireFighter, pami, smallPea,} from "./dataAlpha.js";
import {CarouselAlpha} from "./CarouselAlpha"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { SidebarAlpha } from "./SidebarAlpha.js";
import { useState } from "react";
import FlipButton from "./FlipButton/FlipButton.js";
import FlippingTable from "./FlippingTable/FlippingTable.js";
import { Route, Routes } from "react-router-dom";
import WordTable from "./WordTable.js";
import { TheStory } from "../story/TheStory.js";
import Reading from "./Reading.js";
import GameWord from "./GameWord.js";
import ObjectSentenceGame from "./ObjectSentenceGame.js";
import MatchGame from "./MatchGame.js";

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
                <Route path='/objectSentenceGame' element={<ObjectSentenceGame/>}  />
                <Route path='/matchGameWord' element={<MatchGame/>}  />
                <Route path='/shortSound' element={<CarouselAlpha idCarouselAlpha="shorthref1"  dataCarousel={alphaShortCrousel}/>}  />
                <Route path='/longSound' element={<CarouselAlpha  idCarouselAlpha="longhref1"  dataCarousel={alphaLongCrousel}/>}  />
                <Route path='/storyA1' element={<CarouselAlpha  idCarouselAlpha="storyAl1"  dataCarousel={storyAlpha1}/>}  />
                <Route path='/storyA2' element={<CarouselAlpha  idCarouselAlpha="storyAl2"  dataCarousel={storyAlpha2}/>}  />
                <Route path='/storyA3' element={<CarouselAlpha  idCarouselAlpha="storyAl3"  dataCarousel={storyAlpha3}/>}  />
                <Route path='/storyA4' element={<CarouselAlpha  idCarouselAlpha="storyAl4"  dataCarousel={storyAlpha4}/>}  />
                <Route path='/ququlyQu' element={<TheStory srcStory={ququly}/>}  />
                <Route path='/puyaStory1' element={<TheStory srcStory={puyaStory}/>}  />
                <Route path='/aminFireFighter1' element={<TheStory srcStory={aminFireFighter}/>}  />
                <Route path='/worriedPami1' element={<TheStory srcStory={pami}/>}  />
                <Route path='/smallPea1' element={<TheStory srcStory={smallPea}/>}  />
                <Route path='/reading/*' element={<Reading />}  />
                <Route path='/numberGame' element={<FlippingTable idTablePlay="play1" tableData={tableDataNum.photoData} bgTable={tableDataNum.bgTable} showBack1={false} />}  />
                <Route path='/kitchenGame' element={<FlippingTable idTablePlay="kitU1" tableData={kitchenDataTable.photoData} bgTable={kitchenDataTable.bgTable} showBack1={true} />}  />
                <Route path='/professions' element={<FlippingTable idTablePlay="prof1" tableData={tableProfessions.photoData} bgTable={tableProfessions.bgTable} showBack1={true} />}  />
                <Route path='/animals' element={<FlippingTable idTablePlay="anim1" tableData={tableAnimals.photoData} bgTable={tableAnimals.bgTable} showBack1={true} />}  />
                <Route path='/tableColor_body' element={<FlippingTable idTablePlay="colorBo1" tableData={tableColor_body.photoData} bgTable={tableColor_body.bgTable} showBack1={true} />}  />
                <Route path='/wordTable/*' element={<WordTable />}  />
              </Routes>
              <WordCarousel/>
              <GameWord />
            </div>
          </div>
        </div>

    </>
  )
}
 