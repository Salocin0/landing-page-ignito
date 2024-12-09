import { useState } from "react";
import { toast } from "react-toastify";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      to: "hola@ignitosoft.com",
      subject: `Contacto de: ${formData.nombre}`,
      text: `Dato de contacto: ${formData.email}, Mensaje: ${formData.mensaje}`,
      html: `<p><b>Desde Formulario de contacto de IgnitoSoft</b>Dato de contacto: ${formData.email}, Mensaje: ${formData.mensaje}</p>`,
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
      setLoading(false);
    }
  };

  return (
    <div id="contacto" className="text-center flex flex-col items-center justify-center p-5 bg-gray-300">
      <h2 className="text-3xl font-bold mb-5">Contáctanos</h2>

      <form className="flex flex-col items-center gap-5 w-full sm:w-full md:max-w-[700px]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre / Empresa"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg text-base"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg text-base"
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg text-base"
          required
        />
        <button
          type="submit"
          className={`flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg text-lg transition-all cursor-pointer ${
            loading ? "opacity-60 pointer-events-none" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <>
              Enviando
              <span className="ml-2 border-4 border-t-4 border-gray-300 border-t-black rounded-full w-5 h-5 animate-spin"></span>
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
