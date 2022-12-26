
interface Address {
    Calle: string
    Numero: number
    Estado: string
    Estado_Abreviado: string
}

interface Props {
    Id: number,
    Address: Address,
    Amenities: string[],
    Images: string[],
    Description: string,
    Price: number,
    Type: string,
    Score: number
}

export const CardImage = ({data}: { data: Props }) => {

    

  return (
    <div className='left-img'>
            <div id={`carouselExampleIndicators${data.Id}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        data.Images.map( (e,i) => {
                            if( i === 0){
                                return (
                                <button type="button" data-bs-target={`#carouselExampleIndicators${data.Id}`}  data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`} key={i}></button>
                                )
                            }else{
                                return(
                                    <button type="button" data-bs-target={`#carouselExampleIndicators${data.Id}`} data-bs-slide-to={i} aria-label={`Slide ${i}`} key={i}></button> 
                                )    
                            }
                        } )
                    }
                </div>
                <div className="carousel-inner">
                    {
                        data.Images.map((e, index) => {
                            if (index === 0) {
                                return (
                                <div className="carousel-item active" key={index}>
                                <img src={e} className="d-block w-100" alt="..."/>
                                </div>
                                )
                            }else{
                                return (
                                <div className="carousel-item" key={index}>
                                <img src={e} className="d-block w-100" alt="..."/>
                                </div>
                                )
                            }
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${data.Id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${data.Id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
    
  )
}
