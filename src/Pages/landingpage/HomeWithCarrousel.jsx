import { useState, useEffect } from "react";
import carrusel1 from "./../../assets/carrusel1.jpeg";
import carrusel2 from "./../../assets/carrusel2.jpeg";
import carrusel3 from "./../../assets/carrusel3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HomeWithCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [carrusel1, carrusel2, carrusel3];
  const texts = [
    "Somos el nexo entre las necesidades de las organizaciones y las soluciones tecnológicas impulsando la innovación y la eficiencia.",
    "Transformamos la tecnología en tu aliada para optimizar tus procesos y alcanzar tus objetivos.",
    "Te ayudamos a dar el salto hacia el futuro, con herramientas diseñadas para marcar la diferencia.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
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
          {/* Texto dinámico basado en currentIndex */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8">
            {texts[currentIndex]}
          </p>
          <div className="flex justify-center gap-2">
            <a
              href="#contacto"
              className="text-white bg-[#FE7A27] px-3 py-3 rounded-lg font-bold transition-colors duration-300 flex items-center text-xs sm:text-sm md:text-base"
            >
              Agendá una reunión
              <FontAwesomeIcon icon={faArrowRight} className="text-x" style={{ marginLeft: "5px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWithCarrousel;
