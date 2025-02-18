import React from 'react'
import { TheStory } from './TheStory'
import { donky, eagle1, florence, fox1, healthStory, rabit, soldier } from './dataStory';
import { SidebarStory } from './SidebarStory';

export const Story = () => {
  return (
    <>
        <div className='row'>
          <div className="col-s-0 col-lg-2  ps-5">
                    <SidebarStory />
          </div>
          <div className="col-s-12 col-lg-9">
            <TheStory srcStory={florence}/>
            <TheStory srcStory={soldier}/>
            <TheStory srcStory={healthStory}/>
            <TheStory srcStory={donky}/>
            <TheStory srcStory={rabit}/>
            <TheStory srcStory={fox1}/>
            <TheStory srcStory={eagle1}/>
          </div>
        </div>
        

    </>
  )
}
