import {CardAlphaCompo,} from "./cardAlpha/CardAlphaCompo.js";
import {alphaCrousel, alphaLongCrousel, alphaShortCrousel, kitchenDataTable, storyAlpha1, storyAlpha2,  tableAnimals, tableColor_body, tableDataNum, tableProfessions, storyAlpha3, ququly, storyAlpha4, puyaStory, gameWords, aminFireFighter, pami, smallPea, storiesAlpha,} from "./dataAlpha.js";
import { AlphaStory, CarouselAlpha, CarouselAlphaExp} from "./CarouselAlphaExp.js"
import { WordCarousel } from "./WordCarousel";
import { SylabeWords } from "./SylabeWords";
import { SidebarAlpha } from "./SidebarAlpha.js";
import { useState } from "react";
import FlipButton from "./FlipButton/FlipButton.js";
import FlippingTable from "./FlippingTable/FlippingTable.js";
import { Route, Routes } from "react-router-dom";
import WordTable from "./WordTable.js";
import { TheStory } from "../story/TheStory.js";
import GameWord from "./GameWord.js";
import ObjectSentenceGame from "./ObjectSentenceGame.js";
import MatchGame from "./MatchGame.js";
// import SyllableManager from "./SyllableApp.js";
import SyllableApp from "./SyllableApp.js";
// import SentenceApp2 from "./SentenceApp2.js";
import StoryPage3 from "../story/StoryPage3.js";
import WordGameWithCategories from "./WordGameWithCategories.js";
import HighlightLetterText from "./HighlightLetterText.js";
import LearnNewWords from "./LearnNewWords.js";
import BouncingBalls from "./BouncingBalls.js";



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
                <Route path='/CarouselAlphaExp/*' element={<CarouselAlphaExp/>}  />
                <Route path='/sylabeWords' element={<SylabeWords/>}  />
                {/* <Route path='/reading/*' element={<Reading />}  /> */}
                <Route path='/numberGame' element={<FlippingTable idTablePlay="play1" tableData={tableDataNum.photoData} bgTable={tableDataNum.bgTable} showBack1={false} />}  />
                <Route path='/kitchenGame' element={<FlippingTable idTablePlay="kitU1" tableData={kitchenDataTable.photoData} bgTable={kitchenDataTable.bgTable} showBack1={true} />}  />
                <Route path='/professions' element={<FlippingTable idTablePlay="prof1" tableData={tableProfessions.photoData} bgTable={tableProfessions.bgTable} showBack1={true} />}  />
                <Route path='/animals' element={<FlippingTable idTablePlay="anim1" tableData={tableAnimals.photoData} bgTable={tableAnimals.bgTable} showBack1={true} />}  />
                <Route path='/tableColor_body' element={<FlippingTable idTablePlay="colorBo1" tableData={tableColor_body.photoData} bgTable={tableColor_body.bgTable} showBack1={true} />}  />
                <Route path='/wordTable/*' element={<WordTable />}  />
                <Route path='/SyllableApp' element={<SyllableApp />}  />
                <Route path='/wordGameWithCategories' element={<WordGameWithCategories/>}  />
                <Route path='moreStoryWordsAlpha' element={<StoryPage3 groupKey="alefba" />}  />
                <Route path='HighlightLetterText' element={<HighlightLetterText />}  />
                <Route path='learnNewWords' element={<LearnNewWords />}  />
                <Route path='bouncingBalls' element={<BouncingBalls />}  />
              </Routes>
              <WordCarousel/>
              <GameWord />
            </div>
              <div>
              {/* test */}
                  {/* <BouncingBalls/> */}
              </div>
            </div>
          </div>
        


    </>
  )
}
 