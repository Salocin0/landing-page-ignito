import ignitoSvgUrl from "./../assets/IgnitoB.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); 

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (sectionId, path = "#") => {
    if (window.location.pathname === "/" && path === "#") {
      handleScroll(sectionId);
    } else {
      navigate(path, { replace: true });


      setTimeout(() => {
        handleScroll(sectionId);
      }, 200);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/" onClick={() => handleLinkClick("inicio")}>
          <img src={ignitoSvgUrl} alt="Ignito Icon" style={styles.logo} />
        </Link>
      </div>
      <nav style={styles.nav}>
        <Link
          to="/"
          style={styles.link}
          onClick={() => handleLinkClick("inicio")}
        >
          Inicio
        </Link>
        <Link
          to="/"
          style={styles.link}
          onClick={() => handleLinkClick("nosotros")}
        >
          Nosotros
        </Link>
        <Link
          to="/"
          style={styles.link}
          onClick={() => handleLinkClick("servicios")}
        >
          Servicios
        </Link>
        <Link
          to="/"
          style={styles.link}
          onClick={() => handleLinkClick("soluciones")}
        >
          Soluciones
        </Link>
        <Link
          to="/"
          style={styles.link}
          onClick={() => handleLinkClick("contacto")}
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "2px solid #ddd",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "100px",
    height: "auto",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
};

export default Header;
