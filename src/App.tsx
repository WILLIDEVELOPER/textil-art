import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cuestionario from "./pages/cuestionario";
import Sublimacion from "./pages/sublimacion";
import Corte from "./pages/corte";
import Prensado from "./pages/prensado";
import Confeccion from "./pages/confecciones";
import Teoria from "./pages/Teoria";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="cuestionario" />} />
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route path="/teoria" element={<Teoria />} />
        <Route path="/sublimacion" element={<Sublimacion />} />
        <Route path="/corte" element={<Corte />} />
        <Route path="/prensado" element={<Prensado />} />
        <Route path="/confeccion" element={<Confeccion />} />
      </Routes>
    </Router>
  );
};

export default App;
