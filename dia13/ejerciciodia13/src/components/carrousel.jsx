"use client";

import { useState, useEffect } from "react";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cane_da_pastore_tedesco_adulto.jpg/640px-Cane_da_pastore_tedesco_adulto.jpg",
  "https://www.automoli.com/common/vehicles/_assets/img/gallery/f109/opel-astra-k.jpg",
  "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4XOdTwDFjrNDoRbCH2vDqCNCKD9u8zVr_g&s"
];

export default function Carrousel({ visibleSlides = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const maxIndex = images.length - visibleSlides;

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev +1) % images.length);
      },3000);
      return ()=>clearInterval(interval);
    }
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev +1) % images.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev -1 + images.length) % images.length);
    setIsPlaying(false);
  };

 
 const handleDragStart = (clientX) => {
   setStartX(clientX);
   setIsDragging(true);
   setIsPlaying(false); 
 };

 const handleDragEnd = (clientX) => {
   if (!isDragging) return;
   const deltaX = clientX - startX;
   const threshold=50;

   if (deltaX > threshold){
     prevSlide();
   } else if (deltaX < -threshold){
     nextSlide();
   }

   setIsDragging(false);
 };

 return (
   <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
     {/* Contenedor de imágenes */}
     <div
       className="flex gap-4 transition-transform duration-500 ease-in-out cursor-grab"
       style={{
         transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
       }}
       onMouseDown={(e)=>handleDragStart(e.clientX)}
       onMouseUp={(e)=>handleDragEnd(e.clientX)}
       onTouchStart={(e)=>handleDragStart(e.touches[0].clientX)}
       onTouchEnd={(e)=>handleDragEnd(e.changedTouches[0].clientX)}
     >
       {images.map((img, index)=>(
         <img key={index} src={img} alt={`Slide ${index+1}`} className="w-[calc(100%/3)] h-[200px] object-cover"/>
       ))}
     </div>

     {/* Botón anterior */}
     <button
       onClick={prevSlide}
       className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
       aria-label="Anterior"
     >
       &#8592;
     </button>

     {/* Botón siguiente */}
     <button
       onClick={nextSlide}
       className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
       aria-label="Siguiente"
     >
       &#8594;
     </button>
   </div>
 );
}