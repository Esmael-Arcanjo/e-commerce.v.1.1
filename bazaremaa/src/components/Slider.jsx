import React, { useState, useEffect } from "react";
import { images } from "../components/data/index.js";

const Slider = () => {
  const sliderImages = Object.values(images.slider);
  const [current, setCurrent] = useState(0);
  const length = sliderImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden shadow-lg">
      {/* Wrapper com altura menor e largura maior */}
      <div className="w-full h-48 md:h-64 relative">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Botão Anterior */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          &#10094;
        </button>

        {/* Botão Próximo */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          &#10095;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
