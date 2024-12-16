import { testColor } from "./dataAlpha.js"


export const MakeWordCarousel = (props) => {
    console.log(props.carouselName);
    
    
    // let wordCrousel = {
    //     title:"رنگ ها",
    //     targetCarouselId :"carouselExampleControlsNoTouching20",
    //     idLetter :"h2",
    //     imageCarousel :"imgcarousel2"
    // }
    
  return (
    <>
        <div>MakeWordCarousel</div>
        <section>

            <h1 className="bg-info mt-5 rounded-3 p-4 text-center hov" >{props.carouselName.title}</h1>
            {/*  **** start carousel**** */}

            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    {props.carouselData.map((item,index)=>{
                       return( 
                        <div key={index} className= {index == 0 ? "carousel-item active" : "carousel-item"}>
                            <img src={item.image} className="d-block w-100" alt={item.sylabelWord}/>
                        </div>
                       )
                    })}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* **** End Carousel***** */}
            {/* <div className=" rounded-3 py-10 wpic changeColor" onmouseleave="removeWord('${wordCrousel.idLetter}')" style="backgroundColor: rgb(202, 160, 44); height: 300px;" id="{wordCrousel.idLetter}"></div> */}
            <br/><br/><br/><br/><br/>
        </section>
    </>
  )
}
