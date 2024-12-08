import ignitoSvgUrl from "./../assets/IgnitoB.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú en dispositivos pequeños

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
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b-2 border-gray-300">
      <div className="flex items-center">
        <Link to="/" onClick={() => handleLinkClick("inicio")}>
          <img src={ignitoSvgUrl} alt="Ignito Icon" className="w-24 h-auto" />
        </Link>
      </div>

      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Fondo semi-transparente al abrir el menú */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)} // Cierra el menú si haces clic en el fondo
        ></div>
      )}

      {/* Menú de navegación en dispositivos pequeños */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <nav className="flex flex-col items-start p-6 space-y-4">
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("inicio")}
          >
            Inicio
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("nosotros")}
          >
            Nosotros
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("servicios")}
          >
            Servicios
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("soluciones")}
          >
            Soluciones
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("contacto")}
          >
            Contacto
          </Link>
        </nav>
      </div>

      {/* Menú de navegación visible en dispositivos grandes */}
      <div className="md:flex md:items-center md:space-x-6 hidden">
        <nav className="flex gap-4 lg:gap-6">
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("inicio")}
          >
            Inicio
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("nosotros")}
          >
            Nosotros
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("servicios")}
          >
            Servicios
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("soluciones")}
          >
            Soluciones
          </Link>
          <Link
            to="/"
            className="text-black font-bold text-lg transition-colors duration-300"
            onClick={() => handleLinkClick("contacto")}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
