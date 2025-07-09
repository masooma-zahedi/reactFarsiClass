import { Route, Routes } from 'react-router-dom'
import { alphaCrousel, alphaLongCrousel, alphaShortCrousel, aminFireFighter, pami, puyaStory, ququly, smallPea, storyAlpha1, storyAlpha2, storyAlpha3, storyAlpha4 } from './dataAlpha'
import { TheStory } from '../story/TheStory'

export const CarouselAlpha = ({dataCarousel,idCarouselAlpha}) => {
  return (
    <>
        <section className="container  mt-4" id={idCarouselAlpha}>
            <div id={dataCarousel.buttonId} className="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="300000">
            <div className="carousel-inner">
                {dataCarousel.carouselImg.map((item, index)=>{
                    return(
                        <>
                            <div key={index} className={`carousel-item ${index == 0 ? 'active' : ""}`}>
                            <img src={item} className="d-block w-100" alt="alphabet"/>
                            </div>
                        </>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${dataCarousel.buttonId}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${dataCarousel.buttonId}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
    </>
)
}

const AlphaStory =()=>{
    return(
        <>
            <Routes>
                <Route path='/puyaStory1' element={<TheStory srcStory={puyaStory}/>}  />
                <Route path='/ququlyQu' element={<TheStory srcStory={ququly}/>}  />
                <Route path='/aminFireFighter1' element={<TheStory srcStory={aminFireFighter}/>}  />
                <Route path='/worriedPami1' element={<TheStory srcStory={pami}/>}  />
                <Route path='/smallPea1' element={<TheStory srcStory={smallPea}/>}  />
            </Routes>
        </>
    )
}

export const CarouselAlphaExp = ()=>{
    return(
        <>
            <Routes>
                <Route path='/shortSound' element={<CarouselAlpha idCarouselAlpha="shorthref1"  dataCarousel={alphaShortCrousel}/>}  />
                <Route path='/longSound' element={<CarouselAlpha  idCarouselAlpha="longhref1"  dataCarousel={alphaLongCrousel}/>}  />
                <Route path='/storyA1' element={<CarouselAlpha  idCarouselAlpha="storyAl1"  dataCarousel={storyAlpha1}/>}  />
                <Route path='/storyA2' element={<CarouselAlpha  idCarouselAlpha="storyAl2"  dataCarousel={storyAlpha2}/>}  />
                <Route path='/storyA3' element={<CarouselAlpha  idCarouselAlpha="storyAl3"  dataCarousel={storyAlpha3}/>}  />
                <Route path='/storyA4' element={<CarouselAlpha  idCarouselAlpha="storyAl4"  dataCarousel={storyAlpha4}/>}  />
                <Route path='/alphaStory/*' element={<AlphaStory />}  />
            </Routes>
            
        </>
    )
}
