import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Soluciones from "./Soluciones";
import Contacto from "./Contacto";
import FloatingBottomWhatsapp from "./FloatingBottomWhatsapp";
import HomeWithCarrousel from "./HomeWithCarrousel";

const LandingPage = () => {
  return (
    <div>
      <HomeWithCarrousel />
      <FloatingBottomWhatsapp />
      <Servicios />
      <Nosotros />
      
      <Soluciones />
      <Contacto />
    </div>
  );
};

export default LandingPage;
