"use client";

import { useState, useEffect, useRef } from "react";

const images = [
  "https://www.dismoer.com/6539-home_default/revell-maqueta-coche-mclaren-570s-1-24.jpg",  
  "https://files.idyllic.app/files/static/2435232?width=256&optimizer=image",
  "https://images.stockcake.com/public/a/b/1/ab13e6d6-1db0-41c5-8724-835ec2267b28_medium/elegant-blue-mercedes-stockcake.jpg"
];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setIsPlaying(false); 
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setIsPlaying(false); 
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        if (currentIndex < images.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentIndex]);

  const handleDragStart = (e) => {
    startXRef.current = e.type.startsWith("touch")
      ? e.touches[0].clientX
      : e.clientX;
    isDraggingRef.current = true;
    setIsPlaying(false); 
  };

  const handleDragEnd = (e) => {
    if (!isDraggingRef.current) return;
    const endX =
      e.type.startsWith("touch") ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = endX - startXRef.current;

    if (deltaX > 50 && currentIndex > 0) {
      prevSlide();
    } else if (deltaX < -50 && currentIndex < images.length -1 ) {
      nextSlide();
    }

    isDraggingRef.current = false;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Contenedor que detecta drag/touch */}
      <div
        className="flex transition-transform duration-500 ease-in-out cursor-grab"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0} 
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full ${
          currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Anterior"
      >
        &#8592;
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={nextSlide}
        disabled={currentIndex === images.length -1} 
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full ${
          currentIndex === images.length -1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Siguiente"
      >
        &#8594;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;