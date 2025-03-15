import React from 'react'
import { TheStory } from './TheStory'
import { donky, eagle1, florence, fox1, healthStory, kebrit, king1, oldmanSea, rabit, soldier } from './dataStory';
import { SidebarStory } from './SidebarStory';
import { Route, Routes } from 'react-router-dom';

export const Story = () => {
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
            </Routes>
            
          </div>
        </div>
        

    </>
  )
}
