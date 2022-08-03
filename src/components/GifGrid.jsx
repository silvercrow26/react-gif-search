
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


//Nunca poner la ejecucion de una funcion directamente en un componente
export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
    <>

        <h4>{ category }</h4>
        {         
            isLoading && (<h4 >Cargando gifs...</h4>)
        }
 
        <div className="card-grid">
                {images.map( (image) => (
                   <GifItem key={image.id} 
                   { ...image }
                   />
                ))
                }
        </div><br></br>
    </>
  )

}
