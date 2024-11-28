import img from "./../../assets/innovacion.jpg";

const Nosotros = () => {
  return (
    <div id="nosotros" style={styles.container}>
      {/* Imagen de fondo con texto */}
      <div style={styles.overlay}>
        <h2 style={styles.title}>Innovación en acción</h2>
        <p style={styles.subtitle}>
          Tecnología aplicada a la transformación continua y al cambio sostenible
        </p>
        <p style={styles.description}>
          Innovación y conocimiento para mejorar las comunidades y la vida.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    
    height: "60vh", // Ocupa toda la altura de la ventana
    backgroundImage: `url(${img})`,
    backgroundSize: "cover", // Ajusta la imagen para cubrir todo el espacio
    backgroundPosition: "center", // Centra la imagen
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  overlay: {
    position: "absolute",
    bottom: "20px", // Ajusta la distancia desde la parte inferior
    left: "20px", // Ajusta la distancia desde la izquierda
    color: "#fff", // Texto blanco para resaltar sobre la imagen
    padding: "10px",
    borderRadius: "5px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
  },
};

export default Nosotros;
