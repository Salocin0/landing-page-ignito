import LandingPage from "./Pages/landingpage/LandingPage";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TrabajaConNosotros from "./Pages/trabajaConNosotros/TrabajaConNosotros";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trabajaConNosotros" element={<TrabajaConNosotros />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
