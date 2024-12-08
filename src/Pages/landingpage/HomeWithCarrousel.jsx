import { useState, useEffect } from "react";
import carrusel1 from "./../../assets/carrusel1.jpeg";
import carrusel2 from "./../../assets/carrusel2.jpeg";
import carrusel3 from "./../../assets/carrusel3.jpeg";
import carrusel4 from "./../../assets/carrusel4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomeWithCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [carrusel1, carrusel2, carrusel3, carrusel4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="inicio" className="relative w-full h-[60vh] flex items-center justify-center">
      <div className="w-full h-full overflow-hidden flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Capa negra con transparencia */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center text-white text-center">
        <div className="max-w-[80%]">
          {/* Ajuste del tamaño del texto */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8">
            Somos el nexo entre las necesidades de las empresas y la tecnología. Estamos para ayudarte a resolverlas.
          </p>
          <div className="flex justify-center gap-2">
            <a
              href="#contacto"
              
              className="text-white bg-[#FE7A27] px-3 py-3 rounded-lg font-bold transition-colors duration-300 flex items-center text-xs sm:text-sm md:text-base"
            >
              Crear Reunion
              <FontAwesomeIcon icon={faArrowRight} className="text-x" style={{ marginLeft: "5px" }} />
            </a>
            <a
              href="#servicios"
              className="text-white bg-black px-3 py-3 rounded-lg font-bold transition-colors duration-300 flex items-center border-2 border-white text-xs sm:text-sm md:text-base"
            >
              Conoce más
              <FontAwesomeIcon icon={faArrowDown} className="text-x" style={{ marginLeft: "5px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWithCarrousel;
