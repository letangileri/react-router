import { useParams, useNavigate } from "react-router-dom"
import AppJumbotron from "../components/AppJumbotron";
import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";
import { ChaoticOrbit } from 'ldrs/react'



export default function SingleProductPage(){
    const {id} = useParams();
    const navigate = useNavigate();
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
            navigate('/Prodotti')
            
        })
    

    }

    console.log(singleProduct);
    useEffect(()=>{
        setTimeout(() => {
            fetchData(endpoint)
        }, 3000);
        
    },[])

    return(
        <>
        <AppJumbotron title = "Singolo prodotto" description = "Sei nella sezione singolo prodotto" cta= "Guarda altri prodotti" />
        <section>
        <div className="container">
        <div className="row row-cols1 row-cols-md2 row-cols-lg3 g-3">
        {singleProduct != null ?

        <AppCard prodotto={singleProduct}/>:


        // Default values shown
        <ChaoticOrbit
        size="35"
        speed="1.5"
        color="black" 
        />
        }
        </div>
        </div>
        </section>
        </>
    )
}