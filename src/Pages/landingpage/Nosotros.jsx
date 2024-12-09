import img from "./../../assets/nosotros.jpeg";

const Nosotros = () => {
  return (
    <div
      id="nosotros"
      className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat flex justify-end items-end"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Imagen de fondo con texto */}
      <div className="absolute bottom-5 left-1 text-white p-2 rounded-md">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 w-4/6">
          Nos enfocamos en pensar y diseñar soluciones customizadas y exclusivas
          para cada empresa. No ofrecemos servicios cerrados, sino un desarrollo
          de herramientas adaptadas a medida de los desafíos de cada cliente.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
