import LandingPage from "./Pages/landingpage/LandingPage";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TrabajaConNosotros from "./Pages/trabajaConNosotros/TrabajaConNosotros";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import ReservarReunion from "./Pages/reuniones/AgendarReunion";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trabajaConNosotros" element={<TrabajaConNosotros />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
