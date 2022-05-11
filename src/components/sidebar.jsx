
import { useState, useEffect } from "react";

const mock  = ["category1","category2","category3","category4"];


export const Sidebar = (props) => {

    //Stato 
    const [categories, setCategories] = useState(mock);

        // Funzione Fetch 
        const getCategories = async () => {
            const response = await fetch("https://fakestoreapi.com/products/categories/");
            const data = await response.json();
            data.unshift("Everything"); 

        //Aggiorna lo stato (useState)
        setCategories(data);
        }

 
    // Al cambiamento stampa il componente 1 volta sola 
    useEffect(() => {
        getCategories ();
    }, []);


    //Evento click 
    const clicked = (event,category) => {
        event.preventDefault();
        props.catSelection(category)
    };

    
    return (
        <aside>

            <h2> Categories </h2>

            <ul>
                {categories.map((item, index) => (
                <li key={index}> <a href={item} onClick={(event) => clicked(event,item)}> 
                {item} </a> </li>)) }
            </ul>  
        
        </aside>
    )
}