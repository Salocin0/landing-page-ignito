import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { gapi } from "gapi-script";

const ReservarReunion = () => {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date(),
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Manejar inicio de sesión con Google
  const handleLoginSuccess = (response) => {
    const accessToken = response.credential;
    gapi.load("client:auth2", () => {
        gapi.client.init({
            apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
            clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            scope: "https://www.googleapis.com/auth/calendar.events",
          }).then(() => {
        gapi.auth.setToken({ access_token: accessToken });
        setUser({ accessToken });
        setIsLoggedIn(true);
      });
    });
  };

  const handleLoginFailure = (error) => {
    console.error("Error al iniciar sesión:", error);
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  // Crear evento en Google Calendar
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, date } = formData;

    const event = {
      summary: `Reunión con ${name}`,
      description: `Reunión reservada por ${name} (${email})`,
      start: {
        dateTime: date.toISOString(),
        timeZone: "America/Argentina/Buenos_Aires",
      },
      end: {
        dateTime: new Date(date.getTime() + 30 * 60000).toISOString(),
        timeZone: "America/Argentina/Buenos_Aires",
      },
    };

    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
      if (response && response.result) {
        alert(`Reunión reservada con éxito: ${response.result.htmlLink}`);
      } else {
        throw new Error("No se pudo crear el evento");
      }
    } catch (error) {
      console.error("Error al crear el evento:", error);
      alert("Hubo un problema al crear la reunión. Revisa la consola para más detalles.");
    }
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
        {!isLoggedIn ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Reservar una reunión</h2>
            <div style={{ marginBottom: "10px" }}>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Seleccionar fecha y hora:</label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                minDate={new Date()}
                required
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#FE7A27",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Reservar
            </button>
          </form>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default ReservarReunion;
