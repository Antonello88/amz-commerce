import {Product} from "./product";
import { useState,useEffect } from "react";

//Valori temporanei 
const mock = ["prodotto1","prodotto2","prodotto3"];



export const Wrapper = ({category}) => {

    //Variabile Stato Locale
    const [products,setProducts] = useState(mock)
    //Interruttore booleano per capire stato di caricameto true o false
    const [isLoading, setLoading] = useState(true)

    const [source, setSource] = useState([]);

    //Funzione Fetch  
     const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();

    //Aggiorna lo stato (useState)
    setSource(data);
    setProducts(data);
    setLoading(false);
    };


    //Invochiamo getData 
    useEffect (() => {
        getData()
    },[]);
    
    //Categoria aggiornata e filtro 
    useEffect (() => {
       
      const filtered = source.filter((product) => {
          
        if (category === "Everything") {
            return product;
        }
        else {
            return product.category === category;
        }
    });
      setProducts(filtered);
        
    },[category])


    return (
        
        <section> 
        
            <ul className="grid">

                {products.map((item) => 
                


                (<li key={item.id} className={isLoading ? "loading" : ""}> 
                    <Product name={item.title} price={item.price} image={item.image} /> 
                </li>)) }
                

            </ul>

        </section>
    )
}