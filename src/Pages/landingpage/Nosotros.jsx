import img from "./../../assets/nosotros.jpeg";

const Nosotros = () => {
  return (
    <div
      id="nosotros"
      className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat flex justify-end items-end"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Imagen de fondo con texto */}
      <div className="absolute bottom-5 left-5 text-white p-2 rounded-md">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 w-3/4">
          Somos el puente entre las ideas, la tecnología y los problemas de tu empresa, ofreciendo soluciones a medida, adaptadas a tus necesidades.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
