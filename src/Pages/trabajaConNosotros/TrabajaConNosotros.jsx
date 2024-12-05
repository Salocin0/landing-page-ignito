import { useState } from "react";

const TrabajaConNosotros = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        linkedin: '',
        mensaje: '',
        cv: null,  // Se agrega una propiedad para el archivo (CV)
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0], // Guardamos el archivo
            });
        } else {
            setFormData({
                ...formData,
                [name]: value, // Para los demás campos
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario, incluyendo el archivo
        const formDataToSend = new FormData();
        formDataToSend.append("nombre", formData.nombre);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("linkedin", formData.linkedin);
        formDataToSend.append("mensaje", formData.mensaje);
        formDataToSend.append("cv", formData.cv); // Añadimos el archivo (CV)

        // Si estás usando una API para recibir el formulario, puedes enviarlo de esta manera
        // fetch('URL_DE_TU_API', {
        //     method: 'POST',
        //     body: formDataToSend,
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log("Formulario enviado correctamente:", data);
        //     })
        //     .catch((error) => {
        //         console.error("Error al enviar el formulario:", error);
        //     });

        console.log('Formulario enviado:', formData); // Para pruebas en consola
    };

    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
        },
        header: {
            fontSize: '2.5em',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        subHeader: {
            fontSize: '1.8em',
            fontWeight: 'normal',
            marginBottom: '10px',
        },
        description: {
            fontSize: '1.2em',
            marginBottom: '30px',
            lineHeight: '1.5',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            marginTop: '20px',
        },
        input: {
            width: '400px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1em',
            boxSizing: 'border-box',
        },
        button: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#000',
            color: '#fff',
            fontSize: '1.2em',
            cursor: 'pointer',
        },
    };

    return (
        <div id='contacto' style={styles.container}>
            <h2 style={styles.header}>Trabaja con nosotros</h2>
            <p style={styles.description}>
                Ponte en contacto con nosotros a través de <strong>hello@ignitosoft.com</strong> o <strong>teléfono</strong>. 
                Si lo prefieres, completa el siguiente formulario y nos pondremos en contacto con usted.
            </p>

            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre Completo"
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
                <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn"
                    value={formData.linkedin}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="file"
                    name="cv"
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default TrabajaConNosotros;
