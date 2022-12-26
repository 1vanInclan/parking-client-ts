
import { useFetch } from "../../hooks/useFetch";
import { Carousel } from "./Carousel";


export const Home = () => {
  const { data, isLoading, hasError } = useFetch(
    "http://localhost:5000/api/parkings"
  );

  return (
      <div className="contenedor">
        <h1>Home</h1>
        <div className="parking-container">
        {
          data.map( parking => (
            
            <div className="card-parking" key={parking.Id}>
                <Carousel id={parking.Id}/>

                <div className="info">
                info
                </div> 
              </div>
            ) )
        }
        </div>          
      </div>          
  );
};