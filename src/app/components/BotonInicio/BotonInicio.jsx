"use client";
import "./BotonInicio.css";

const BotonInicio = () => {
  return (
    <div className="contenedor-regresar">
      <a href="#inicio" className="enlace-regresar-inicio">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flecha-inicio"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>VOLVER AL INICIO</span>
      </a>
    </div>
  );
};

export default BotonInicio;