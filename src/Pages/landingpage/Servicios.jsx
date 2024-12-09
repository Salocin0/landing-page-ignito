import saas from "./../../assets/cloud-svgrepo-com.svg";
import server from "./../../assets/server-svgrepo-com.svg";

const Servicios = () => {
  return (
    <div
      id="servicios"
      className="p-5 flex flex-col items-center justify-center gap-5 bg-gray-300"
    >
      <h1 className="text-center text-3xl font-bold">Servicios</h1>
      <p className="text-lg leading-6 w-4/5 text-center">
      {`Desarrollamos soluciones tecnológicas personalizadas que permitan a la organización alinearse con estándares de eficiencia operativa, automatizando procesos, minimizando errores, ahorrando tiempos y recursos. "Nuestro objetivo es incrementar tu productividad mientras reducis costos".`}
      </p>

      <p className="text-lg leading-6 w-4/5 mb-8 text-center">
      {`Las herramientas tecnológicas que ofrecemos facilitan la recopilación de información y análisis de datos, lo que es fundamental para la toma de decisiones estratégicas en tiempo y forma.`}
      </p>
      <div className="flex justify-center gap-5 flex-wrap w-full lg:w-7/10">
        {[
          {
            img: saas,
            title: "SaaS",
            description: "Software como servicio, alojado y mantenido por Ignito. Nos encargamos de las actualizaciones automáticas y del mantenimiento para que te concentres en lo que importa: tu negocio.",
          },
          {
            img: server,
            title: "Propietario del Sistema",
            description: "Software desarrollado por Ignito pero instalado en los servidores del cliente. Ofrecemos soporte y actualizaciones bajo demanda, según tus necesidades.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 p-5 border-2 border-gray-300 rounded-lg bg-gray-100 shadow-md text-center h-96 transition-all hover:border-[#FF7A26] group hover:shadow-lg hover:translate-y-[-5px]"
          >
            <img src={card.img} alt="" className="mb-12 h-36" />
            <h2 className="text-xl font-bold mb-2 group-hover:text-[#FF7A26]">
              {card.title}
            </h2>
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
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF7A26]">
              {title}
            </h3>
            <p className="text-base leading-6">
              {title === "Herramientas"
                ? "React, Node.js, MongoDB, PostgreSQL, Solidity, Next.js, Nest.js."
                : title === "Tecnologías"
                ? "Blockchain, Inteligencia Artificial, Big Data."
                : "Metodología Agile, Scrum, y seguimiento mensual detallado."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
