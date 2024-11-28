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
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
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
    },
    smallCardsContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "20px",
    },
    smallCard: {
      width: "200px",
      padding: "15px",
      border: "2px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      backgroundColor: "#ffffff",
      textAlign: "center",
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
      <div style={styles.largeCardsContainer}>
        {/* Tarjeta para SAAS */}
        <div style={styles.largeCard}>
          <img src={saas} alt="" height={"150px"} style={{marginBottom: "50px"}}  />
          <h2 style={styles.title}>SAAS</h2>
          <p style={styles.description}>
            Ofrecemos sistemas bajo suscripción (SAAS), trabajando con
            herramientas actualizadas, inteligencia artificial y blockchain.
            Incluimos equipos especializados para cada proyecto y mostramos
            avances cada mes.
          </p>
        </div>

        {/* Tarjeta para Propietario del Sistema */}
        <div style={styles.largeCard}>
          <img src={server} alt="" height={"150px"} style={{marginBottom: "50px"}} />
          <h2 style={styles.title}>Propietario del Sistema</h2>
          <p style={styles.description}>
            Creamos sistemas donde el usuario es propietario. Usamos tecnologías
            modernas, IA y blockchain para garantizar escalabilidad y
            personalización. Progresos mensuales y equipo asignado.
          </p>
        </div>
      </div>

      {/* Contenedor de las tarjetas pequeñas */}
      <div style={styles.smallCardsContainer}>
        <div style={styles.smallCard}>
          <h3 style={styles.title}>Herramientas</h3>
          <p style={styles.description}>
            React, Node.js, Python, Solidity, Docker, Kubernetes.
          </p>
        </div>
        <div style={styles.smallCard}>
          <h3 style={styles.title}>Tecnologías</h3>
          <p style={styles.description}>
            Blockchain, IA, APIs modernas, CI/CD.
          </p>
        </div>
        <div style={styles.smallCard}>
          <h3 style={styles.title}>Metodología</h3>
          <p style={styles.description}>
            Agile, Scrum, y seguimiento mensual detallado.
          </p>
        </div>
        <div style={styles.smallCard}>
          <h3 style={styles.title}>Avances</h3>
          <p style={styles.description}>
            Presentaciones mensuales con pruebas funcionales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
