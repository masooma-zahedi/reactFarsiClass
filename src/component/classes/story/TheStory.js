import React from 'react';
import { MeaningWords } from './MeaningWords';
import { Accordion } from '../Accordion';
export const TheStory = ({srcStory}) => {    
    
    return(
        <>
            <section>
                    <h2 className="story-title text-center text-light rounded-3 my-5 p-5 flower-bg" id={srcStory.targetHref} >{srcStory.titleStory}</h2>
                    <div className="">
                        <div className="text-center">
                            {srcStory.imageStory.map((story,index)=>{
                                return(
                                    <>
                                        <div className="border mx-auto w-100 h-100 mb-3">
                                            <img src={story} className="w-100 h-100"  alt={srcStory.titleStory}/>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
            </section>
            <MeaningWords dataWordsM={srcStory}/>
            <div className="border border-warning rounded" dir="rtl">
                <h3 className='p-3 text-success '>سوالات درک مطلب</h3>
                <Accordion items={srcStory.accordionItems} />
            </div>

        </>
    )
}

