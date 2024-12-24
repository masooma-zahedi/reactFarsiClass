import { testColor, testFruit } from "./dataAlpha.js"



export const MakeWordCarousel = (props) => {
    
    
    // let wordCrousel = {
    //     title:"رنگ ها",
    //     targetCarouselId :"{props.carouselName.targetCarouselId}20",
    //     idLetter :"h2",
    //     imageCarousel :"imgcarousel2"
    // }
    const bobStyle ={
        width: "150px",
        height:" 150px", 
        margin : "0 auto",
        backgroundColor :"transparent"
    }
    const test = ()=>{
        document.querySelector(`#${props.carouselName.idLetter}`).innerHTML =` 
                                    <div className="text-center">
                                            <img style="width:150px" src="./images/webPic/cinnamoroll-1.gif"/>
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
                                    <div className="text-center">
                                        <h1 className="">
                                        ${item.sylabelWord}                   
                                            <img style="width:60px" src="./images/webPic/StrawberryPNG.webp"/>
                                        </h1>
                                    </div>               
                                `
                            }
                            
                        
                       return( 
                        <div key={index} className= {`${index == 0 ? "carousel-item active" : " carousel-item"}`}>
                            <div className="d-flex justify-content-center  pb-5 mb-5" style={{textDecoration:'center'}}>
                                    <img src={item.image} className="d-block h-75 w-75"  alt={item.sylabelWord}/>
                            </div>
                            <div className="carousel-caption  p-4 text-primary " onMouseOver={bobMouseOver} style={bobStyle}>
                                <img src="./images/webPic/bob2.png" className="w-100 h-100 rounded "   alt="" srcSet=""/>
                            </div>
                        </div>
                       )
                    })}

                </div>
                <button className="carousel-control-prev" type="button" onClick={test} data-bs-target= {`#${props.carouselName.targetCarouselId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={test} data-bs-target={`#${props.carouselName.targetCarouselId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <hr className="bg-danger"/> <hr className="bg-danger"/> */}
            {/* **** End Carousel***** */}
            <div className=" rounded-3 py-10  bg-info text-center text-light p-5" id={props.carouselName.idLetter}></div>
            <hr className="p-2 bg-danger" />
            <br/><br/><br/><br/><br/>
        </section>
    </>
  )
}
