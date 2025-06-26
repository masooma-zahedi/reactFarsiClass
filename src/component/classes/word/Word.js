import { Route, Routes } from 'react-router-dom';
import { SentenceCarousel } from './SentenceCarousel'
import { sentenceCarousel, testPicture,testPicture2, testGramer, lazyDonky, laklak, FrogM, blindMouse, elephantT, sleepBear, twoSparrow, kidsCamping,stories2 } from './dataWord';
import { lionBear, realFriends } from './dataWord';
import { SentencePicture } from './SentencePicture'
import { TheStory } from '../story/TheStory';
import { SidebarWord } from './SidebarWord.js';
import WordToSentence from './wordToSentence.js';
import LetterPuzzle from './LetterPuzzle.js';
import StoryPage3 from '../story/StoryPage3.js';
import SentenceObject from './SentenceObject.js';

export const Word = () => {
  return (
    <>
        {/* <div className = "container mt-4">
        </div> */}
        <div className='row'>
          <div className="col-s-0 col-lg-2  ps-5">
                    <SidebarWord />
          </div>
          <div className="col-s-12 col-lg-9">

            <Routes>
              <Route path='/sentenceCarousel-1' element={<SentenceCarousel carouselName={sentenceCarousel.carouselInfo} carouselData={sentenceCarousel.contentCarousel}/>}  />
              <Route path='/verbs-1' element={<SentencePicture carouselName={testPicture.wordCarousel} carouselData={testPicture.alphaColor}/>}  />
              <Route path='/verbs-2' element={<SentencePicture carouselName={testPicture2.wordCarousel} carouselData={testPicture2.alphaColor}/>}  />
              <Route path='/orderLangua' element={<SentencePicture carouselName={testGramer.wordCarousel} carouselData={testGramer.alphaColor}/>}  />
              <Route path='/lionB2' element={<TheStory srcStory={lionBear}/>}  />
              <Route path='/realF2' element={<TheStory srcStory={realFriends}/>}  />
              <Route path='/lazyD2' element={<TheStory srcStory={lazyDonky}/>}  />
              <Route path='/lakLak' element={<TheStory srcStory={laklak}/>}  />
              <Route path='/frogMouse' element={<TheStory srcStory={FrogM}/>}  />
              <Route path='/blindMouse' element={<TheStory srcStory={blindMouse}/>}  />
              <Route path='/elephantT1' element={<TheStory srcStory={elephantT}/>}  />
              <Route path='/sleepBear1' element={<TheStory srcStory={sleepBear}/>}  />
              <Route path='/twoSparrow1' element={<TheStory srcStory={twoSparrow}/>}  />
              <Route path='/kidsCamping1' element={<TheStory srcStory={kidsCamping}/>}  />
              <Route path='/wordSentence' element={<WordToSentence />}  />
              <Route path='/letterPuzzle' element={<LetterPuzzle />}  />
              <Route path='/sentenceObject' element={<SentenceObject />}  />
              <Route path='moreStoryWords' element={<StoryPage3 initialStories={stories2} storageKey="page2Stories" />}  />

            </Routes>
          </div>
        </div>
              
        
    
    </>
  )
}
