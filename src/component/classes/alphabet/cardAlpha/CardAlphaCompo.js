import React from 'react';
import {infoCard} from './cardDataAlpha';

export const CardAlphaCompo = () => {
    // console.log(infoCard[0].title);
    
  return (
    <>
        <section className='f-right mt-5'>
            <div className="row" >
                {/* *** start Num 1 *** */}
                {
                    infoCard.map((letter,index)=>{
                        // console.log(index);
                        return(
                            <>
                                <div className="col-md-3" key={index}>
                                    <div className="card" style={{width:"18rem"}}>
                                        <img src={letter.mainPic} className="card-img-top" data-bs-toggle="modal" data-bs-target={`#${letter.examplePicId}`}  alt="حرف آ" />
                                        <div className="card-body">
                                            <h5 className="card-title">{letter.title}</h5>
                                            <p className="card-text">همراه با صداهای کوتاه و کشیده</p>
                                            <a href="#" className="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target={`#${letter.shortSoundId}`}>صداهای کوتاه</a>
                                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${letter.longSoundId}`}>صداهای کشیده</a>
                                        </div>
                                    </div> 
                                    {/*  stsrt modal - Example Letter  */}
                                    <div className="modal fade" style={{backgroundColor:' rgba(0, 0, 0, 0.619)'}} id={letter.examplePicId}  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered border border-light" style={{width: '700px'}}>
                                        <div className="modal-content bg-danger"  style={{width: '700px', minHeight:'500px'}}>
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="modal-title" style={{maxiWdth: '300px', maxWidth:' 100px'}} id="staticBackdropLabel">
                                                <img src="./images/assetAlpha/cardAlpha/short-sound.jpg" className="w-100 h-100" alt="short-sound" srcSet="" />
                                            </div>
                                            </div>
                                            <div className="modal-body">
                                                {
                                                    letter.examplePic.map((exaPic,index)=>{
                                                        return(
                                                            <>
                                                                <div style={{height: '400px'}} key={index} className="mb-3">
                                                                    <img src={exaPic} className="w-100 h-100" alt="" srcSet=""/>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understoodssss</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* end modal-- Example Letter  */}

                                    {/* <!-- stsrt modal - Short Sound --> */}
                                    <div className="modal fade" id={letter.shortSoundId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content" style={{width: '700px', height: '500px'}}>
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="modal-title" style={{maxWidth: '300px', maxWidth: '100px'}} id="staticBackdropLabel">
                                                <img src="./images/assetAlpha/cardAlpha/short-sound.jpg" className="w-100 h-100" alt="short-sound" srcSet="" />
                                            </div>
                                            </div>
                                            <div className="modal-body">
                                            <div>
                                                <img src={letter.shortSoundPic} className="w-100 h-100" alt="" srcSet="" />  
                                            </div>    
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!-- end modal --> */}




                                    {/* <!-- stsrt modal - Long Sound --> */}
                                    <div className="modal fade" id={letter.longSoundId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content" style={{width: '700px', height: '500px'}}>
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="modal-title" style={{maxWidth: '300px', maxWidth: '100px'}} id="staticBackdropLabel">
                                                <img src="./images/assetAlpha/cardAlpha/longSound.jpg" className="w-100 h-100" alt="short-sound" srcSet="" />
                                            </div>
                                            </div>
                                            <div className="modal-body">
                                            <div>
                                                <img src={letter.longSoundPic} className="w-100 h-100" alt="" srcSet="" />  
                                            </div>    
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!-- end modal long Sound--> */}







                                </div>
                            </>
                        )
                        
                    })
                }
                {/* **** Start Num 2 **** */}
                {/* <div className="col-md-3">    
                    <div className="card" style={{width: "18rem"}}>
                        <img src="./images/آ--04-10.jpg" className="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleL-A1"  alt="حرف آ" />
                        <div className="card-body">
                            <h5 className="card-title">حرف الف</h5>
                            <p className="card-text">همراه با صداهای کوتاه و کشیده</p>
                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#letterA-1">صداهای کوتاه</a>
                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#letterA-2">صداهای کشیده</a>
                        </div>
                    </div>     
                </div> */}
                {/* **** End Num 2 **** */}
            </div>
        </section>

    </>
  )
}
