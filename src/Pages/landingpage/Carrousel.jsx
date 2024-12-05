import { useState,useEffect } from "react";
import carrusel1 from "./../../assets/carrusel1.jpeg";
import carrusel2 from "./../../assets/carrusel2.jpeg";
import carrusel3 from "./../../assets/carrusel3.jpeg";
import carrusel4 from "./../../assets/carrusel4.jpeg";

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    carrusel1,
    carrusel2,
    carrusel3,
    carrusel4
  ];

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
    <div style={styles.carouselContainer} onClick={handleNext}>
      <div style={styles.imageContainer}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  button: {
    position: "absolute",
    top: "50%",
    zIndex: 1,
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    fontSize: "1.5rem",
    transform: "translateY(-50%)",
    transition: "background 0.3s",
  },
};

export default Carrousel;
