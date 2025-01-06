import React from 'react'
import { TheStory } from './TheStory'
import { MeaningWords } from './MeaningWords'

export const Story = () => {
  return (
    <>
        <div className = "container border border-danger mt-4">
            <TheStory/>
            <MeaningWords/>
        </div>

    </>
  )
}
