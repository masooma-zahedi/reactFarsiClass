import React from 'react';

export const SentenceCarousel = ({carouselName,carouselData}) => {
    
  return (
    <>
        {/* <!-- *****************************  Introduce Section جملات و کلمات حرف ح************ --> */}
        <section className="container" id=''>
          <h1 className="text-light hov  p-4 m-3 text-center rounded-pill"  style={{backgroundColor:' rgba(89, 4, 45, 0.804)'}}>{carouselName.titleCarousel}</h1>
  
          {/* <!-- ************************** Start carusel *************************** --> */}
            <section className="container mt-4">
                <div id={carouselName.targetCarouselId} className="carousel slide" data-bs-touch="false" data-bs-interval="false" >
                    <div className="carousel-inner  p-5 mb-5 rounded-3" style={{backgroundColor:' rgba(200, 72, 138, 0.518)'}}>
                        {
                            carouselData.textCarousel.map((sentence, index)=>{
                                return(
                                    <>
                                        <div key={index} className={`carousel-item ${index == 0 ? 'active' : ''}  pe-5`}>
                                        <h1 className="text-center">{sentence.sentence}</h1>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target={`#${carouselName.targetCarouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target={`#${carouselName.targetCarouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            
            {/* <!-- *********************************** Words meaning*********************** --> */}
           <section className="container-fluid f-right">
             <div className="row">
               {/* <!-- ******************* Word table**************--> */}
               <div className="col-md-7 ">
                 <div className="container">
                   <div
                     className="table-responsive"
                   >
                     <table
                       className="table "
                     >
                       <thead>
                         <tr>
                           <th className='h4 text-secondary' scope="col">کلمات زیر را بخوانید</th>
                         </tr>
                       </thead>
                       <tbody>
                            {carouselData.textCarousel.map((item, index)=>{
                                return(
                                    <>
                                    <tr key={index} className="">
                                        <td className="btn-group  " role="group" aria-label="Basic example">
                                            {item.wordsSentence.map((i,index)=>{
                                                const putWordPic = ()=>{
                                                    document.querySelector(`#${carouselName.wordTarget}`).innerHTML =`
                                                        <div key=${index} class="w-100 pt-2 h-100  " style="text-align:center;">
                                                        ${i.img.length==0 ? `<h1 style="margin-top:50px" className="text-center pt-5 mt-5 border border-danger"> ${i.eng}<h1/>` : 
                                                            `<img  class="w-75 h-75 rounded" style="max-width:400px"  src=${i.img} alt="" />
                                                            <h1 className="text-center">${i.eng}<h1/>
                                                            `
                                                        }
                                                        <div/>
                                                    `  
                                                }
                                                return(
                                                    <>
                                                        <button key={index} type="button" className=" text-center btn btn-outline-success  me-2 rounded "  onClick={putWordPic}><h3>{i.word}</h3>  </button>
                                                    </>
                                                )
                                                
                                            })}
                                        </td>
                                    </tr>
                                    </>
                                )
                            })}

                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
               {/* <!-- ********************** pic & word container ************* --> */}
               <div className="col-md-5 rounded-3  " style={{backgroundColor: 'rgb(193, 167, 95)', height:'400px'}} id={carouselName.wordTarget}></div>
             </div>
           </section>
           <hr/><br/><br/><br/><br/>

        </section>
    
    </>
  )
}
