import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faBoxesStacked,
  faLink,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const Soluciones = () => {
  const solutions = [
    {
      title: "Inteligencia Artificial",
      description:
        "Usamos IA para optimizar procesos y mejorar la toma de decisiones en tiempo real.",
      icon: faRobot,
    },
    {
      title: "Blockchain Aplicado",
      description:
        "Integramos blockchain para garantizar transparencia, trazabilidad y seguridad en todas las operaciones.",
      icon: faLink,
    },
    {
      title: "Entregas Recurrentes",
      description:
        "Realizamos entregas programadas y constantes, asegurando un flujo de trabajo eficiente.",
      icon: faBoxesStacked,
    },
    {
      title: "Herramientas Personalizadas",
      description:
        "Desarrollamos soluciones adaptadas a las necesidades de las organizaciones.",
      icon: faGears,
    },
  ];

  return (
    <div
      id="soluciones"
      className="p-5 flex flex-col items-center justify-start text-center"
    >
      <h1 className="text-3xl font-bold mb-5">Soluciones</h1>
      <p className="text-xl mb-8 max-w-5xl">
        Nuestras soluciones están diseñadas para impulsar las organizaciones
        mediante software personalizado, entregas eficientes, tecnologías como
        blockchain e inteligencia artificial. Nuestra experiencia en desarrollo
        de software ágil, gestión de proyectos y tecnologías innovadoras
        garantiza la calidad de nuestras soluciones
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="w-full sm:w-64 p-5 border-2 border-gray-300 rounded-lg bg-gray-100 text-center shadow-md transition-all group hover:shadow-xl hover:transform hover:translate-y-[-5px] hover:border-[#FF7A26]"
          >
            <div className="text-black text-4xl mb-3 group-hover:text-[#FF7A26]">
              <FontAwesomeIcon icon={solution.icon} />
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-[#FF7A26]">
              {solution.title}
            </h2>
            <p className="text-base leading-6">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soluciones;
