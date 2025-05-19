"use client";

import { useState, useEffect } from "react";

const images = [
  "https://www.dismoer.com/6539-home_default/revell-maqueta-coche-mclaren-570s-1-24.jpg",
  "https://files.idyllic.app/files/static/2435232?width=256&optimizer=image",
  "https://images.stockcake.com/public/a/b/1/ab13e6d6-1db0-41c5-8724-835ec2267b28_medium/elegant-blue-mercedes-stockcake.jpg",
  "https://files.idyllic.app/files/static/2251720?width=256&optimizer=image",
];

export default function Carousel({ visibleSlides = 3 }) {
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