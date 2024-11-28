const Home = () => {
    return (
      <div id="inicio" style={styles.container}>
        <h1 style={styles.heading}>Bienvenido a nuestra página</h1>
        <p style={styles.paragraph}>
          Descubre nuestras soluciones innovadoras para tus necesidades.
        </p>
        <div style={styles.buttonContainer}>
          <a href="#nosotros" style={styles.button}>
            Conoce más
          </a>
          <a href="#contacto" style={styles.button}>
            Contacto
          </a>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      textAlign: "center",
      padding: "50px 20px",
      backgroundColor: "#f5f5f5",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#333",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "1.2rem",
      color: "#666",
      marginBottom: "30px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    button: {
      textDecoration: "none",
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "5px",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };
  
  export default Home;
  