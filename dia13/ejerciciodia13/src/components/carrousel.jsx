"use client";
import { useState } from "react";

const images = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cane_da_pastore_tedesco_adulto.jpg/640px-Cane_da_pastore_tedesco_adulto.jpg",
      "https://www.automoli.com/common/vehicles/_assets/img/gallery/f109/opel-astra-k.jpg",
      "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4XOdTwDFjrNDoRbCH2vDqCNCKD9u8zVr_g&s"
];

const visibleSlides = 3;

export default function carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = images.length - visibleSlides;

    const maxSlide = () => {
        if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex + 1);    
        }
    };

    return (
         <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        {/* Contenedor de imágenes*/}
        <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translate( -${currentIndex * (100 / visibleSlides)})`}}
            >
                {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-[calc(100%/3)] h-(200px) object-cover"
                />
                ))}
            </div>

            {/* Boton anterior */}
            <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-50"
            >
                
            </button>

            {/* Boton siguiente */}
            <button
                onClick={prevSlide}
                disabled={currentIndex === maxIndex}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-50"
            >
                
            </button>    
            </div>
         
    );
}