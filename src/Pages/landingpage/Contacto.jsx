import { useState } from "react";
import { toast } from "react-toastify";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    const data = {
      to: "nicolas@ignitosoft.com",
      subject: `Contacto de: ${formData.nombre}`,
      text: `Dato de contacto: ${formData.email}, Mensaje: ${formData.mensaje}`,
      html: "<p><b>Desde Formulario de contacto de IgnitoSoft</b></p>",
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_URL_BACK_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Success!", await response.json());
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        });
        toast.success("Mensaje enviado con éxito");
      } else {
        console.log("Error", await response.json());
        toast.error("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar el mensaje.");
    } finally {
      setLoading(false); // Reset loading state after response
    }
  };

  const styles = {
    container: {
      padding: "20px",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
    },
    header: {
      fontSize: "2.5em",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.2em",
      marginBottom: "30px",
      lineHeight: "1.5",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      marginTop: "20px",
    },
    input: {
      width: "400px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1em",
      boxSizing: "border-box",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "1.2em",
      cursor: loading ? "not-allowed" : "pointer", // Prevent pointer events
      opacity: loading ? 0.6 : 1, // Dim the button when loading
    },
    spinner: {
      marginLeft: "10px",
      border: "3px solid #f3f3f3",
      borderTop: "3px solid #333",
      borderRadius: "50%",
      width: "16px",
      height: "16px",
      animation: "spin 1s linear infinite",
    },
    status: {
      marginTop: "10px",
      fontSize: "1em",
      color: "#333",
    },
  };

  const spinStyle = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

  return (
    <div id="contacto" style={styles.container}>
        <style>{spinStyle}</style>
      <h2 style={styles.header}>Contáctanos</h2>
      <p style={styles.description}>
        Ponte en contacto con nosotros a través de{" "}
        <strong>hola@ignitosoft.com</strong>. Si lo prefieres, completa el
        siguiente formulario y nos pondremos en contacto contigo.
      </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre / Empresa"
          value={formData.nombre}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? (
            <>
              Enviando
              <span style={styles.spinner}></span>
            </>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contacto;
