
interface Props {
    id: number
}


export const Carousel = ({id} : Props) => {
    

    // console.log(id);
  return (
    <div className='left-img'>
            <div id={`carouselExampleIndicators${id}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carouselExampleIndicators${id}`}  data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn-3.expansion.mx/dims4/default/672179e/2147483647/strip/true/crop/659x462+0+0/resize/1200x841!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff6%2Ff69051c3f951a3950adf875cc90ded5f%2Festacionamiento20170717143222.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn-3.expansion.mx/dims4/default/672179e/2147483647/strip/true/crop/659x462+0+0/resize/1200x841!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff6%2Ff69051c3f951a3950adf875cc90ded5f%2Festacionamiento20170717143222.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn-3.expansion.mx/dims4/default/672179e/2147483647/strip/true/crop/659x462+0+0/resize/1200x841!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff6%2Ff69051c3f951a3950adf875cc90ded5f%2Festacionamiento20170717143222.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
    
  )
}
