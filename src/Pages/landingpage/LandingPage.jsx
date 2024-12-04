import Home from "./Home";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Soluciones from "./Soluciones";
import Contacto from "./Contacto";
import FloatingBottom from "./FloatingBottom";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <FloatingBottom/>
      <Nosotros />
      <Servicios />
      <Soluciones />
      <Contacto />
    </div>
  );
};

export default LandingPage;
