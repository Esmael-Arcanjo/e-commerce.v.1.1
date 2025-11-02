import React from "react";
import Galeria from "../Produtos/Galeria.jsx";
import Slider from "../../components/Slider.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      {/* Slider */}
      <Slider />
      {/* Subtítulo */}
  
      {/* Galeria com limite de 20 produtos */}
      <Galeria limite={50} />

      {/* Botão “Ver todos” */}
      <div className="mt-[1px] p-[2px_10px] flex justify-center">
        <Link to="/produtos">
          <button className="px-[14px] py-[1px] rounded-[6px] bg-[#F51720] text-white font-bold text-[20px] cursor-pointer transition-colors hover:bg-[#e63d5c]">
            Ver todos os produtos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;