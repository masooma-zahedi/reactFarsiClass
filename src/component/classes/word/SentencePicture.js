

export const SentencePicture = (props) => {
    
    const bobStyle ={
        width: "150px",
        height:" 150px", 
        margin : "0 auto",
        backgroundColor :"transparent"
    }
    const test = ()=>{
        document.querySelector(`#${props.carouselName.idLetter}`).innerHTML =` 
                                    <div className="text-center">
                                            <img style="width:150px" src="./images/webPic/sanrio-rentry.gif"/>
                                            <p>Come On!!!</p>
                                    </div>               
                                `
    }
    
  return (
    <>
        <section>

            <h1 className="bg-info mt-5 rounded-3 p-4 text-center hov" >{props.carouselName.title}</h1>
            {/*  **** start carousel**** */}

            <div id={props.carouselName.targetCarouselId } className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    {props.carouselData.map((item,index)=>{
                            function bobMouseOver(sylabelWord){
                                document.querySelector(`#${props.carouselName.idLetter}`).innerHTML =` 
                                    <div className="text-center ">
                                        <div className="" style="width:100%; height:400px;">
                                            <img src=${item.image} className=" " style="width:50%; height:100%; border-radius:20px;"  alt=""/>
                                            <img style="width:60px;padding-left:20px" src="./images/webPic/StrawberryPNG.webp"/>
                                        </div>
                                                          
                                    </div>               
                                `
                            }
                            
                        
                       return( 
                        <div key={index} className= {`${index == 0 ? "carousel-item active" : " carousel-item"}`}>
                            <div className="d-flex justify-content-center align-content-center  py-5 my-5 pt-3" style={{textDecoration:'center',height:'200px', backgroundColor:'#f9c0f0'}}>
                                    {/* <img src={item.image} className="d-block h-100 w-75"  alt={item.sylabelWord}/> */}
                                    <h1 className="text-success pt-4">{item.sylabelWord}</h1>
                            </div>
                            <div className="carousel-caption  p-4 pb-2 text-primary " onMouseOver={bobMouseOver} style={bobStyle}>
                                <img src="./images/webPic/bob2.png" className="w-100 h-100 rounded "   alt="" srcSet=""/>
                            </div>
                        </div>
                        
                       )
                    })}

                </div>
                <button className="carousel-control-prev" type="button" onClick={test} data-bs-target= {`#${props.carouselName.targetCarouselId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-danger rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" onClick={test} data-bs-target={`#${props.carouselName.targetCarouselId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-danger rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <hr className="bg-danger"/> <hr className="bg-danger"/> */}
            {/* **** End Carousel***** */}
            <div className=" rounded-3  text-center text-light p-5" id={props.carouselName.idLetter}></div>
            <hr className="p-2 bg-danger" />
            <br/><br/><br/><br/><br/>
        </section>
    </>
  )
}
