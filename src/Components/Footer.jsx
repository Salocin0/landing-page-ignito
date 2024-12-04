import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/Ignito.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para hacer scroll hacia una sección específica
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Efecto que detecta cambios en la URL y hace scroll a la sección
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      scrollToSection(sectionId);
    }
  }, [location]);

  // Función para manejar la navegación y el scroll
  const handleNavigation = (path, sectionId) => {
    if (location.pathname !== path) {
      navigate(path); // Navega a la página
    }
    setTimeout(() => scrollToSection(sectionId), 100); // Espera antes de hacer scroll
  };

  const handleTrabajaClick = () => {
    scrollToTop(); // Hacemos el scroll hacia la parte superior
    navigate("/trabajaConNosotros"); // Navegamos hacia la página de "Trabaja con nosotros"
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    footerContainer: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "30px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      paddingLeft: "100px",
      paddingRight: "100px",
    },
    logoSection: {
      flex: 1,
      textAlign: "left",
      marginBottom: "20px",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      marginTop: "10px",
    },
    socialIcon: {
      fontSize: "1.5em",
      color: "#fff",
      transition: "color 0.3s",
    },
    contactInfo: {
      textAlign: "center",
      marginBottom: "20px",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      lineHeight: "1.8",
    },
    contactText: {
      fontSize: "1.2em",
    },
    location: {
      fontSize: "1.2em",
      marginBottom: "10px",
    },
    footerLinks: {
      flex: 1,
      textAlign: "right",
      marginBottom: "20px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "1.1em",
      display: "block",
      transition: "color 0.3s, transform 0.3s",
      cursor: "pointer",
    },
    rights: {
      textAlign: "center",
      width: "100%",
      fontSize: "1em",
      padding: "10px",
    },
    logo: {
      width: "100px",
    },
  };

  return (
    <div style={styles.footerContainer}>
      {/* Sección izquierda: logo y redes sociales */}
      <div style={styles.logoSection}>
        <Link to="#inicio">
          <img src={logo} alt="Logo de la Empresa" style={styles.logo} />
        </Link>

        <div style={styles.socialIcons}>
          <a
            href="https://facebook.com"
            style={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com"
            style={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://linkedin.com"
            style={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://instagram.com"
            style={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      {/* Sección central: datos de contacto y ubicación */}
      <div style={styles.contactInfo}>
        <p style={styles.contactText}>
          <FontAwesomeIcon icon={faWhatsapp} /> {import.meta.env.VITE_TELEFONO}
        </p>
        <p style={styles.contactText}>
          <FontAwesomeIcon icon={faEnvelope} /> {import.meta.env.VITE_EMAIL}
        </p>
        <p style={styles.location}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Villa Maria, Cordoba,
          Argentina
        </p>
      </div>

      {/* Sección derecha: enlaces */}
      <div style={styles.footerLinks}>
        <span
          style={styles.link}
          onClick={() => handleNavigation("/", "inicio")}
        >
          Inicio
        </span>
        <span
          style={styles.link}
          onClick={() => handleNavigation("/", "nosotros")}
        >
          Nosotros
        </span>
        <span
          style={styles.link}
          onClick={() => handleNavigation("/", "servicios")}
        >
          Servicios
        </span>
        <span
          style={styles.link}
          onClick={() => handleNavigation("/", "soluciones")}
        >
          Soluciones
        </span>
        <span
          style={styles.link}
          onClick={() => handleNavigation("/", "contacto")}
        >
          Contacto
        </span>
        <span
          onClick={handleTrabajaClick}
          style={styles.link}
          role="button"
          aria-label="Trabaja con nosotros"
        >
          Trabaja con nosotros
        </span>
      </div>

      {/* Derechos reservados */}
      <div style={styles.rights}>
        <p>
          © {new Date().getFullYear()} Ignito Software. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
