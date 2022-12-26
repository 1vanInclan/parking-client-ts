
import { useFetch } from "../../hooks/useFetch";
import { Carousel } from "./Carousel";


export const Home = () => {
  const { data, isLoading, hasError } = useFetch(
    "http://localhost:5000/api/parkings"
  );

  console.log(data)

  return (
      <div className="contenedor">
        <h1>Home</h1>
        <div className="parking-container">
        {
          data.map( parking => (
            
            <div className="card-parking" key={parking.Id}>
                <Carousel id={parking.Id}/>
                <div className="info">
                  <div className="title">
                    <h4 className="address">{parking.Address.Calle},#{parking.Address.Numero},{parking.Address.Estado_Abreviado}</h4>
                    <h5>{parking.Score}</h5>
                  </div>
                    <hr/>
                  <div>Amenities</div>
                  <div>Costo</div>
                  </div> 
              </div>
            ) )
        }
        </div>          
      </div>          
  );
};