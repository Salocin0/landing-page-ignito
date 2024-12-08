import saas from "./../../assets/cloud-svgrepo-com.svg";
import server from "./../../assets/server-svgrepo-com.svg";

const Servicios = () => {
  return (
    <div id="servicios" className="p-5 flex flex-col items-center justify-center gap-5 bg-gray-300">
      <h1 className="text-center text-3xl font-bold mb-5">Servicios</h1>
      <p className="text-lg leading-6 max-w-4/5 mb-8 text-center">
        Muchas pymes enfrentan retos únicos que requieren soluciones tecnológicas específicas para superarlos. Sin
        embargo, contar con un área de desarrollo propia puede ser complejo debido a los costos y la rotación de
        personal.
      </p>
      <div className="flex justify-center gap-5 flex-wrap w-full lg:w-7/10">
        {[{ img: saas, title: "SaaS", description: "Ofrecemos sistemas bajo suscripción", }, { img: server, title: "Propietario del Sistema", description: "Creamos sistemas donde el usuario es propietario...", },].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 p-5 border-2 border-gray-300 rounded-lg bg-gray-100 shadow-md text-center h-96 transition-all hover:border-[#FF7A26] group hover:shadow-lg hover:translate-y-[-5px]"
          >
            <img src={card.img} alt="" className="mb-12 h-36" />
            <h2 className="text-xl font-bold mb-2 group-hover:text-[#FF7A26]">{card.title}</h2>
            <p className="text-base leading-6">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-5 flex-wrap mt-5 mb-5">
        {["Herramientas", "Tecnologías", "Metodología"].map((title, index) => (
          <div
            key={index}
            className="w-52 p-4 border-2 border-gray-300 rounded-lg bg-white shadow-md text-center transition-all hover:border-[#FF7A26] group hover:shadow-lg hover:translate-y-[-5px]"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF7A26]">{title}</h3>
            <p className="text-base leading-6">
              {title === "Herramientas"
                ? "React, Node.js, MongoDB, PostgreSQL, Solidity, Next.js, Nest.js."
                : title === "Tecnologías"
                ? "Blockchain, Inteligencia Artificial, Data Mining."
                : "Metodología Agile, Scrum, y seguimiento mensual detallado."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
