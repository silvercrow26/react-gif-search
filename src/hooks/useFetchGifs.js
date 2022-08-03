import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//Un hook es una funcion que regresa algo
export const useFetchGifs = (category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => { //Sirve para disparar efectos secundarios -> algun proceso que quiera ejecutar cuando algo suceda
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
