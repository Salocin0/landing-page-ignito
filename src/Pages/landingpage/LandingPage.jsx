import Home from "./Home";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Soluciones from "./Soluciones";
import Contacto from "./Contacto";
import FloatingBottom from "./FloatingBottom";
import Carrousel from "./Carrousel";
import HomeWithCarrousel from "./HomeWithCarrousel";

const LandingPage = () => {
  return (
    <div>
      <HomeWithCarrousel />
      <FloatingBottom />
      <Servicios />
      <Nosotros />
      
      <Soluciones />
      <Contacto />
    </div>
  );
};

export default LandingPage;
