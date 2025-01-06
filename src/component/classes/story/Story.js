import React from 'react'
import { TheStory } from './TheStory'
import { florence } from './dataStory';

export const Story = () => {
  return (
    <>
        <div className = "container border border-danger mt-4">
            <TheStory srcStory={florence}/>
        </div>

    </>
  )
}
