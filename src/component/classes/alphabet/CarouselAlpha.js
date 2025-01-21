import React from 'react'

export const CarouselAlpha = ({dataCarousel,idCarouselAlpha}) => {
  return (
    <>
        <section class="container mt-4" id={idCarouselAlpha}>
            <div id={dataCarousel.buttonId} class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {dataCarousel.carouselImg.map((item, index)=>{
                    return(
                        <>
                            <div key={index} class={`carousel-item ${index == 0 ? 'active' : ""}`}>
                            <img src={item} class="d-block w-100" alt="alphabet"/>
                            </div>
                        </>
                    )
                })}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target={`#${dataCarousel.buttonId}`} data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={`#${dataCarousel.buttonId}`} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </section>
    </>
)
}
