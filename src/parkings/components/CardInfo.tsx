import { AiFillStar } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai"

interface Address {
    Calle: string
    Numero: number
    Estado: string
    Estado_Abreviado: string
}

interface Props {
    Address: Address,
    Amenities: string[],
    Description: string,
    Price: number,
    Score: number
}

const CardInfo = ({data}: { data: Props }) => {
  return (

        <div className="info">
                  <div className="title-container">
                    <div className="title">
                      <h4 className="address"><span>{data.Address.Calle}</span>,<span>#{data.Address.Numero}</span>,<span>{data.Address.Estado_Abreviado}</span></h4>
                      <h4 className="score"><span className="icon"><AiFillStar/></span>{data.Score}</h4>
                    </div>
                    <hr className="rayita"/>
                  </div>
                  <div className="amenities">
                        {
                          data.Amenities.map( am => (
                            <div className="amenitie" key={am}>
                              <h4 className="icon-amenitie"><BsFillPlusCircleFill/>
                              </h4>
                              <h4 className="font-amenitie">{am}</h4>
                            </div>
                          ))
                        }
                  </div>
                  
                  <div className="costo">
                    <h4 className="font-costo">${data.Price}<span className="nacionalidad"> MXN</span>/Mes</h4>
                    <h4 className="font-total"><AiOutlineArrowRight/> $1,752 Total</h4>

                  </div>
        </div> 
  )
}

export default CardInfo