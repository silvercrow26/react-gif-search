import {useState} from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [category, setCategories] = useState(['Marin Kitagawa']);

    const onAddCategory = (newCategory) => {

        //Validar que los nombres sean únicos
        if(category.includes(newCategory)) return;
        

        // setCategories([...categories,'One piece']);
        setCategories(cat => [newCategory, ...cat]);
           
    }



  return (
    <>
        <h1>GifSearchApp</h1>


        <AddCategory     
            onNewCategory={ (event) => onAddCategory(event) }//Un argumento llama a una funcion a la cual le pasamos ese argumento
        />

            {category.map(category =>  (
            <GifGrid key={category} category={category}/>
            )
            )}
       
    </>    
  )
}
