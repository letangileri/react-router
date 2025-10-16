import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import AppCard from "../components/AppJumbotron"
import AppJumbotron from "../components/AppJumbotron"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProdottiPage(){
    const [elem, setElem] = useState([]);

    function fetchData(){
        console.log("ho cliccato il fetch");
    
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data)
            setElem(res.data)
            
        });
    

    }
    useEffect (fetchData, []);

    
    
    return(
        <>

        <main>
        <AppJumbotron title = "Prodotti" description = "Ti proponiamo prodotti unici" cta= "Guarda i prodotti" />
        <section>
            <div className="container">
                <div className="row row-cols1 row-cols-md2 row-cols-lg3 g-3">
                    {elem.map((item)=>(
                    <div key = {item.id} className="col">
                    <div className="card" >
                        <div className="card-img-top">
                            <img src={item.image} alt="" /> 
                        </div>
                        <div className="card-body">
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>

            </div>
        </section>
        </main>

        </>
    )
}