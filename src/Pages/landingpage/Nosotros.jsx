import img from "./../../assets/nosotros.jpeg";

const Nosotros = () => {
  return (
    <div id="nosotros" style={styles.container}>
      {/* Imagen de fondo con texto */}
      <div style={styles.overlay}>
        <p style={styles.title}>
        Somos el puente entre las ideas, la tecnología y los problemas de tu empresa. ofreciendo soluciones a medida, adaptadas a tus necesidades.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    
    height: "60vh",  
    backgroundImage: `url(${img})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  overlay: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "#fff", 
    padding: "10px",
    borderRadius: "5px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    width:"70%"
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    width:"80%"
  },
};

export default Nosotros;
