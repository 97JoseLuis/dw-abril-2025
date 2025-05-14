"use client";
import { useState, useEffect } from "react";

const images = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cane_da_pastore_tedesco_adulto.jpg/640px-Cane_da_pastore_tedesco_adulto.jpg",
      "https://www.automoli.com/common/vehicles/_assets/img/gallery/f109/opel-astra-k.jpg",
      "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$"
];

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState (0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.lenght);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex -1
        );
    };

    useEffect (() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <div className="flex transition transform duration-500 ease-in-out"
            style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index +1}`} className="w -full flex-shrink-0"/>       
                ))}
        </div>      

        {/* Boton Anterior */}
        <button
           onClick={prevSlide}
           className="absolute left-4 top-1/2 transform-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
           >

           </button>

        {/* Boton Siguiente*/}
        <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
        >

        </button>
    
        {/* Indicadores */}
        <div className="absolute buttom-4 left-1/2 transform-translate-y-1/2 flex space-x-2">
             {images.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
                />            
             ))}     
        </div>
        </div>
    );

};

export default CustomSlider;