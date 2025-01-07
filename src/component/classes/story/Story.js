import React from 'react'
import { TheStory } from './TheStory'
import { donky, florence, healthStory, soldier } from './dataStory';

export const Story = () => {
  return (
    <>
        <div className = "container mt-4">
            <TheStory srcStory={florence}/>
            <TheStory srcStory={soldier}/>
            <TheStory srcStory={healthStory}/>
            <TheStory srcStory={donky}/>
        </div>

    </>
  )
}
