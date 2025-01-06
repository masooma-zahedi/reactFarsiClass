import React from 'react'

export const TheStory = () => {
    const Florence = ()=>{
        return(
            <>
                <section>
                        <h2 className="story-title text-center text-light rounded-3 my-5 p-5 flower-bg">داستان فیل در تاریکی</h2>
                        <div className="">
                            <div className="text-center">
                            <div className="border mx-auto w-100 h-100 mb-3">
                                <img src="./images/assetStory/12-10-4-فلورانس.jpg" className="w-100 h-100"  alt=""/>
                            </div>
                            <div className="border mx-auto w-100 h-100 mb-3">
                                <img src="./images/assetStory/12-19-5-فلورنس.jpg" className="w-100 h-100"  alt="" />
                            </div>
                            </div>
                        </div>
                </section>
            </>
        )
    }
  return (
    <>
        <Florence/>
    </>
  )
}
