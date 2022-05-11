export const Product = (props) => {
     
   //Prende le props oppure valore temporaneo "Product name" ecc 
   const name = props.name || "Product name";
   const price = props.price || "100$";
   const image = props.image || "";
    
    return (

        <article>

                <img src={image} alt={name} /> 

                <p> Prezzo: {price}</p>

                <h4> {name}</h4>

        </article>




    )


}