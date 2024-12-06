import { useState, useEffect } from "react";
import carrusel1 from "./../../assets/carrusel1.jpeg";
import carrusel2 from "./../../assets/carrusel2.jpeg";
import carrusel3 from "./../../assets/carrusel3.jpeg";
import carrusel4 from "./../../assets/carrusel4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
    <div id="inicio" style={styles.carouselContainer}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={styles.image}
        />
      </div>

      {/* Capa negra con transparencia */}
      <div style={styles.overlay}>
        <div style={styles.textContainer}>
          <p style={styles.paragraph}>
            Somos el nexo entre las necesidades de las empresas y la tecnología.
            Estamos para ayudarte a resolverlas.
          </p>
          <div style={styles.buttonContainer}>
            <Link to={"/agendarReunion"} style={styles.buttonAlternativo}>
              Agendar Reunion<FontAwesomeIcon icon={faArrowRight} style={styles.icon}/>
            </Link>
            <a href="#servicios" style={styles.button}>
              Conoce más<FontAwesomeIcon icon={faArrowDown} style={styles.icon}/>
            </a>
          </div>
        </div>
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  },
  textContainer: {
    maxWidth: "80%",
  },
  paragraph: {
    fontSize: "2.5rem",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#000",
    border: "2px solid #ccc",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonAlternativo: {
    textDecoration: "none",
    //border: "2px solid #ccc",
    color: "#fff",
    backgroundColor: "#FE7A27",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  icon: {
    marginLeft: "10px",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "bold",
  }
};

export default HomeWithCarrousel;
