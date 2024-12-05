import saas from "./../../assets/cloud-svgrepo-com.svg"
import server from "./../../assets/server-svgrepo-com.svg"

const Servicios = () => {
  const styles = {
    container: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      backgroundColor: "#ccc",
      minHeight: "110vh",
    },
    subtext: {
      fontSize: "1.5em",
      lineHeight: "1.5",
      maxWidth: "80%",
      marginBottom: "30px",
      textAlign: "center",
    },
    header: {
      textAlign: "center",
      fontSize: "2.5em",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    largeCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      maxWidth: "600px",
      padding: "20px",
      border: "2px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      height: "400px",
      transition: "box-shadow 0.5s ease, transform 0.5s ease",
      cursor: "pointer",
    },
    largeCardHover: {
      boxShadow: "0px 8px 12px rgba(0,0,0,0.2)",
      transform: "translateY(-5px)",
    },
    smallCardsContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "20px",
      marginBottom: "20px",
    },
    smallCard: {
      width: "200px",
      padding: "15px",
      border: "2px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      backgroundColor: "#ffffff",
      textAlign: "center",
      transition: "box-shadow 0.5s ease, transform 0.5s ease",
      cursor: "pointer",
    },
    smallCardHover: {
      boxShadow: "0px 8px 12px rgba(0,0,0,0.2)",
      transform: "translateY(-5px)",
    },
    title: {
      margin: "0 0 10px",
      fontSize: "1.5em",
      fontWeight: "bold",
    },
    description: {
      margin: "0",
      fontSize: "1em",
      lineHeight: "1.5",
    },
    largeCardsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexDirection: "row",
    },
  };

  return (
    <div id="servicios" style={styles.container}>
      <h1 style={styles.header}>Servicios</h1>
      <p style={styles.subtext}>Muchas pymes enfrentan retos únicos que requieren soluciones tecnológicas específicas para superarlos. Sin embargo, contar con un área de desarrollo propia puede ser complejo debido a los costos y la rotación de personal.</p>
      <div style={styles.largeCardsContainer}>
        <div
          style={styles.largeCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.largeCardHover.boxShadow;
            e.currentTarget.style.transform = styles.largeCardHover.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = styles.largeCard.boxShadow;
            e.currentTarget.style.transform = "none";
          }}
        >
          <img src={saas} alt="" height={"150px"} style={{ marginBottom: "50px" }} />
          <h2 style={styles.title}>SaaS</h2>
          <p style={styles.description}>
            Ofrecemos sistemas bajo suscripción (SaaS), trabajando con herramientas
            actualizadas, inteligencia artificial y blockchain. Incluimos equipos
            especializados para cada proyecto y mostramos avances cada mes.
          </p>
        </div>

        <div
          style={styles.largeCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.largeCardHover.boxShadow;
            e.currentTarget.style.transform = styles.largeCardHover.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = styles.largeCard.boxShadow;
            e.currentTarget.style.transform = "none";
          }}
        >
          <img src={server} alt="" height={"150px"} style={{ marginBottom: "50px" }} />
          <h2 style={styles.title}>Propietario del Sistema</h2>
          <p style={styles.description}>
            Creamos sistemas donde el usuario es propietario. Usamos tecnologías
            modernas, IA y blockchain para garantizar escalabilidad y
            personalización. Progresos mensuales y equipo asignado.
          </p>
        </div>
      </div>

      <div style={styles.smallCardsContainer}>
        {["Herramientas", "Tecnologías", "Metodología"].map((title, index) => (
          <div
            key={index}
            style={styles.smallCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = styles.smallCardHover.boxShadow;
              e.currentTarget.style.transform = styles.smallCardHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = styles.smallCard.boxShadow;
              e.currentTarget.style.transform = "none";
            }}
          >
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>
              {title === "Herramientas"
                ? "React, Node.js, MongoDB, PostgreSQL, Solidity, Next.js, Nest.js."
                : title === "Tecnologías"
                ? "Blockchain, Inteligencia Artificial, Data Mining."
                : title === "Metodología"
                ? "Metodologia Agile, Scrum, y seguimiento mensual detallado."
                : "Presentaciones mensuales con pruebas funcionales."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
