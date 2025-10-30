import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import { Outlet } from "react-router-dom";

const LayoutBazar = () => {
    return (

        <div>
        <Header />
            <main>
                <Outlet /> {/* aqui entram as páginas filhas (Home, etc.) */}
            </main>
        <Footer /> 
        </div>
    )
}

export default LayoutBazar



