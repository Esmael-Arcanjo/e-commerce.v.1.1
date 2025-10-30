import React from 'react'
import { Routes, Route } from "react-router-dom";


// Layouts
import LayoutBazar from "../Layouts/LayoutBazar";
import Home from '../Pages/Home/Home';
// Páginas públicas

// Rotas públicas 
import Carrinho from "../Pages/Carrinho/Carrinho";


import NotFound from "../Pages/NotFound/NotFound";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas com LayoutBase */}
      <Route element={<LayoutBazar />}>
        <Route path="/" element={<Home />} />
        {/* Adicione outras páginas públicas que usem LayoutBase aqui */}
      </Route>

      {/* Rotas públicas sem LayoutBase */}
       <Route path="/carrinho" element={<Carrinho />} />
   

      {/* Rotas protegidas/Admin 
   
        */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes