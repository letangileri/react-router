import { useParams } from "react-router-dom"
import AppJumbotron from "../components/AppJumbotron";
import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";

export default function SingleProductPage(){
    const {id} = useParams();
    const [singleProduct, setSingleProduct] = useState(null);

    console.log(setSingleProduct);

    console.log(id);
    console.log(singleProduct);
    
    const endpoint = `https://fakestoreapi.com/products/${id}`
    console.log(endpoint);



    function fetchData(endpoint){
        console.log("sono nel fetch");
    
        axios.get(endpoint)
        .then(res => {
            console.log(res.data);
            setSingleProduct(res.data);
            console.log(setSingleProduct);
            
            
        }).catch(err => {
            console.log(err);
            
        })
    

    }

    console.log(singleProduct);
    useEffect(()=>{
        fetchData(endpoint)
    },[])

    return(
        <>
                <AppJumbotron title = "Singolo prodotto" description = "Sei nella sezione singolo prodotto" cta= "Guarda altri prodotti" />
                
                {singleProduct != null ?
                <AppCard prodotto={singleProduct}/>:
                <p>non ci sono prodotti</p>
                }

        </>
    )
}