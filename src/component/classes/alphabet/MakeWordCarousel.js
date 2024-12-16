import { testColor, testFruit } from "./dataAlpha.js"



export const MakeWordCarousel = (props) => {
    
    
    // let wordCrousel = {
    //     title:"رنگ ها",
    //     targetCarouselId :"{props.carouselName.targetCarouselId}20",
    //     idLetter :"h2",
    //     imageCarousel :"imgcarousel2"
    // }
    const bobStyle ={
        width: "100px",
        height:" 100px", 
        margin : "0 auto",
        backgroundColor :"transparent"
    }
    
  return (
    <>
        <div>MakeWordCarousel</div>
        <section>

            <h1 className="bg-info mt-5 rounded-3 p-4 text-center hov" >{props.carouselName.title}</h1>
            {/*  **** start carousel**** */}

            <div id={props.carouselName.targetCarouselId } className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    {props.carouselData.map((item,index)=>{
                       return( 
                        <div key={index} className= {index == 0 ? "carousel-item active" : "carousel-item"}>
                            <img src={item.image} className="d-block w-100" alt={item.sylabelWord}/>
                            <div className="carousel-caption text-primary " style={bobStyle}>
                                <img src="./images/webPic/bobSfanji.jpg" className="w-100 h-100"   alt="" srcSet=""/>
                            </div>
                        </div>
                       )
                    })}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target= {"#"+props.carouselName.targetCarouselId} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={"#"+props.carouselName.targetCarouselId} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr className="bg-danger"/> <hr className="bg-danger"/>
            {/* **** End Carousel***** */}
            {/* <div className=" rounded-3 py-10 wpic changeColor" onMouseLeave="removeWord('${wordCrousel.idLetter}')" style="backgroundColor: rgb(202, 160, 44); height: 300px;" id="{wordCrousel.idLetter}"></div> */}
            <br/><br/><br/><br/><br/>
        </section>
    </>
  )
}
