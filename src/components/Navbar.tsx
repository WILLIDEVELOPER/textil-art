import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Importa los estilos

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar">
      {/* Logo del blog */}
      <Link to="/" className="logo">
        <img
          src="https://i.ibb.co/p33qD94/Whats-App-Image-2025-01-22-at-9-18-54-PM.jpg"
          alt="logo"
        />
        Arte<span>Textil</span>
      </Link>
      <ul>
        <li>
          <Link
            to="/cuestionario"
            className={`hover:underline ${
              activeLink === "/cuestionario" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/cuestionario")}
          >
            Cuestionario
          </Link>
        </li>
        <li>
          <Link
            to="/sublimacion"
            className={`hover:underline ${
              activeLink === "/sublimacion" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/sublimacion")}
          >
            Sublimación
          </Link>
        </li>
        <li>
          <Link
            to="/corte"
            className={`hover:underline ${
              activeLink === "/corte" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/corte")}
          >
            Corte
          </Link>
        </li>
        <li>
          <Link
            to="/prensado"
            className={`hover:underline ${
              activeLink === "/prensado" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/prensado")}
          >
            Prensado
          </Link>
        </li>
        <li>
          <Link
            to="/confeccion"
            className={`hover:underline ${
              activeLink === "/confeccion" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/confeccion")}
          >
            Confeccion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;