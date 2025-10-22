import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppCard from "../components/AppCard";
import AppJumbotron from "../components/AppJumbotron";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProdottiPage() {
  const [elem, setElem] = useState([]);

  function fetchData() {
    console.log("sono nel fetch");

    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setElem(res.data);
    });
  }
  useEffect(fetchData, []);

  return (
    <>
      <main>
        <AppJumbotron
          title="Prodotti"
          description="Ti proponiamo prodotti unici"
          cta="Guarda i prodotti"
        />
        <section>
          <div className="container">
            <div className="row row-cols1 row-cols-md2 row-cols-lg3 g-3">
              {elem.map((item) => (
                <AppCard key={item.id} prodotto={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
