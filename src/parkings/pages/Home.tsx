import { CardPakirng } from "../components";


export const Home = () => {

  return (
      <div className="contenedor">
        <div className="title-contenedor">
          <h1>Parking spaces available</h1>
        </div>
        <div className="parking-container">
          <CardPakirng/>
        </div>          
      </div>          
  );
};