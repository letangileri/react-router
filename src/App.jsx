import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import ProdottiPage from "./pages/ProdottiPage";
import SingleProductPage from "./pages/SingleProductPage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ChiSiamo" element={<ChiSiamoPage/>} />
        <Route path="/Prodotti" element={<ProdottiPage/>} />
        <Route path="/Prodotti/:id" element={<SingleProductPage/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
