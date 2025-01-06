import React from 'react';
import { Alphabet } from './classes/alphabet/Alphabet';
import {Word} from './classes/word/Word'
import { Story } from './classes/story/Story';

export const Main = () => {
  return (
    <>
      <Alphabet/>
      <Word/>
      <Story/>
    </>
  )
}
