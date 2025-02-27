import React from 'react'

export const CarouselAlpha = ({dataCarousel,idCarouselAlpha}) => {
  return (
    <>
        <section className="container mt-4" id={idCarouselAlpha}>
            <div id={dataCarousel.buttonId} className="carousel slide" data-bs-ride="carousel">
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
