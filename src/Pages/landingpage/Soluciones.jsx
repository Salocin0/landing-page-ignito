import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faBoxesStacked,
  faLink,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
    container: {
      padding: "20px",
      gap: "20px",
      textAlign: "center",
      height: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      fontSize: "2.5em",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.2em",
      lineHeight: "1.5",
      maxWidth: "800px",
      marginBottom: "30px",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    card: {
      width: "250px",
      padding: "20px",
      border: "2px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      transition: "box-shadow 0.3s ease, transform 0.3s ease, border 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
      transform: "translateY(-5px)",
      border: "2px solid #FF7A26",
      transition: "border 0.3s ease",
    },
    title: {
      fontSize: "1.5em",
      margin: "10px 0",
      fontWeight: "bold",
      color: "#000",
      transition: "color 0.3s ease",
    },
    icon: {
      fontSize: "3em",
      color: "#000",
      marginBottom: "10px",
      transition: "color 0.3s ease",
    },
    descriptionCard: {
      fontSize: "1em",
      lineHeight: "1.5",
    },
  };
  
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
          "Desarrollamos soluciones adaptadas a las necesidades de la agroindustria para resolver problemas específicos.",
        icon: faGears,
      },
    ];
  
    return (
      <div id="soluciones" style={styles.container}>
        <h1 style={styles.header}>Soluciones</h1>
        <p style={styles.description}>
          Nuestras soluciones están diseñadas para impulsar la agroindustria
          mediante software personalizado, entregas eficientes, y el uso de
          tecnologías como blockchain e inteligencia artificial.
        </p>
        <div style={styles.cardContainer}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.border = styles.cardHover.border;
                e.currentTarget.querySelector(".icon").style.color = "#FF7A26";
                e.currentTarget.querySelector(".title").style.color = "#FF7A26";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.border = styles.card.border;
                e.currentTarget.querySelector(".icon").style.color =
                  styles.icon.color;
                e.currentTarget.querySelector(".title").style.color =
                  styles.title.color;
              }}
            >
              <div className="icon" style={styles.icon}>
                <FontAwesomeIcon icon={solution.icon} />
              </div>
              <h2 className="title" style={styles.title}>
                {solution.title}
              </h2>
              <p style={styles.descriptionCard}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Soluciones;
  