import { TheStory } from './TheStory'
import { donky, eagle1, florence, flyStory, fox1, healthStory, janatan, kebrit, king1, oldmanSea, peniSilin, rabit, soldier, spring } from './dataStory';
import { SidebarStory } from './SidebarStory';
import { Route, Routes } from 'react-router-dom';
import {stories1} from './StoryPage3'
import StoryPage3 from './StoryPage3';

export const Story = () => {
  const stories1 = {
    1: {
      title: 'پترس قهرمان سد',
      content: [{ type: 'text', content: 'پترس انگشتش را در سوراخ سد گذاشت...' }],
      vocab: [{ word: 'سد', meaning: 'dam' }],
      qa: [{ question: 'پترس چه کار کرد؟', answer: 'انگشتش را در سد گذاشت' }]
    }
  };
  return (
    <>
        <div className='row'>
          <div className="col-s-0 col-lg-2  ps-5">
                    <SidebarStory />
          </div>
          <div className="col-s-12 col-lg-9">
            <Routes>
              <Route path='/floraN1' element={<TheStory srcStory={florence}/>}  />
              <Route path='/soldier-2' element={<TheStory srcStory={soldier}/>}  />
              <Route path='/health-2' element={<TheStory srcStory={healthStory}/>}  />
              <Route path='/donky-2' element={<TheStory srcStory={donky}/>}  />
              <Route path='/rabit-2' element={<TheStory srcStory={rabit}/>}  />
              <Route path='/fox-2' element={<TheStory srcStory={fox1}/>}  />
              <Route path='/eagle-2' element={<TheStory srcStory={eagle1}/>}  />
              <Route path='/kingCloth' element={<TheStory srcStory={king1}/>}  />
              <Route path='/kebritSell' element={<TheStory srcStory={kebrit}/>}  />
              <Route path='/oldmanSea' element={<TheStory srcStory={oldmanSea}/>}  />
              <Route path='/springKh' element={<TheStory srcStory={spring}/>}  />
              <Route path='/flyS' element={<TheStory srcStory={flyStory}/>}  />
              <Route path='/peniS' element={<TheStory srcStory={peniSilin}/>}  />
              <Route path='/janatanM' element={<TheStory srcStory={janatan}/>}  />
              <Route path='moreStory' element={<StoryPage3 groupKey="dastan" />}  />
            </Routes>
            
            
          </div>
        </div>
        

    </>
  )
}
