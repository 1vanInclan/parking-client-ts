import { useFetch } from "../../hooks/useFetch"
import { CardImage } from "./CardImage";
import CardInfo from "./CardInfo";



export const CardPakirng = () => {
    const { data, isLoading, hasError } = useFetch(
        "http://192.168.100.8:5000/api/parkings"
      );
  return (
    <>
    {
        data.map( (parking) => (   
            <div className="card-parking" key={parking.Id}>
                <CardImage data={{...parking}}/>
                <CardInfo data={{...parking}}/>
            </div>
            ) )
    }
    </>
  )
}
