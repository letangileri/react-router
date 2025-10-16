import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";


function App() {
  const [elem, setElem] = useState([]);

  function handleFetch(){
    console.log("ho cliccato il fetch");
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
