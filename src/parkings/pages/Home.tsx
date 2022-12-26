
import { useFetch } from "../../hooks/useFetch";
import { Carousel } from "./Carousel";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai"


export const Home = () => {
  const { data, isLoading, hasError } = useFetch(
    "http://localhost:5000/api/parkings"
  );

  // console.log(data)

  return (
      <div className="contenedor">
        <div>
          <h1>Parkings</h1>
        </div>
        <div className="parking-container">
        {
          data.map( parking => (
            
            <div className="card-parking" key={parking.Id} >
                <Carousel id={parking.Id}/>
                <div className="info">
                  <div className="title-container">
                    <div className="title">
                      <h4 className="address"><span>{parking.Address.Calle}</span>,<span>#{parking.Address.Numero}</span>,<span>{parking.Address.Estado_Abreviado}</span></h4>
                      <h4 className="score"><span className="icon"><AiFillStar/></span>{parking.Score}</h4>
                    </div>
                    <hr className="rayita"/>
                  </div>
                  <div className="amenities">
                        {
                          parking.Amenities.map( am => (
                            <div className="amenitie" key={am}>
                              <h4 className="icon-amenitie"><BsFillPlusCircleFill/>
                              </h4>
                              <h4 className="font-amenitie">{am}</h4>
                            </div>
                          ))
                        }
                  </div>
                  
                  <div className="costo">
                    <h4 className="font-costo">${parking.Price}<span className="nacionalidad"> MXN</span>/Mes</h4>
                    <h4 className="font-total"><AiOutlineArrowRight/> $1,752 Total</h4>

                  </div>
                  </div> 
              </div>
            ) )
        }
        </div>          
      </div>          
  );
};