'use client';
import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import './LocationSection.css';

const LocationSection = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section className="location-section">
      {/* CAPA DE FONDO */}
      <div className="talavera-overlay-bg"></div>
      
      <div 
        ref={ref}
        className={`location-container ${isVisible ? 'show' : ''}`}
      >
        <h2 className="location-title text-white">Ubicaciones</h2>

        <div className="locations-grid">
          {/* TARJETA CEREMONIA */}
          <div className="location-card arch-card">
            <div className="card-ornament-arch"></div>

            <div className="icon-wrapper">
              <img src="/fotos/iconosRosas/20.png" alt="Iglesia" />
            </div>

            <div className="location-content">
              <h3 className="place-type">Ceremonia</h3>
              <h4 className="place-name">Parroquia Ave Maria</h4>
              
              {/* BLOQUE DE HORA */}
              <div className="time-wrapper">
                <span className="time-text">1:00 PM</span>
                <div className="time-divider-small"></div>
              </div>

              <p className="address">
                Apolonio Avalos 3385, Aaron Joaquín,<br />
                44760 Guadalajara, Jal.
              </p>

              <a 
                href="https://maps.app.goo.gl/EjemploIglesia"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-button"
              >
                Ver ubicación
              </a>
            </div>
          </div>

          {/* TARJETA RECEPCIÓN */}
          <div className="location-card arch-card">
            <div className="card-ornament-arch"></div>

            <div className="icon-wrapper">
              <img src="/fotos/iconosRosas/31.png" alt="Fiesta" />
            </div>

            <div className="location-content">
              <h3 className="place-type">Recepción</h3>
              <h4 className="place-name">Club Deportivo GM</h4>

              {/* BLOQUE DE HORA */}
              <div className="time-wrapper">
                <span className="time-text">4:00 PM</span>
                <div className="time-divider-small"></div>
              </div>

              <p className="address">
                C. las Pomas s/n,<br />45602 La Calerilla, Jal.
              </p>

              <a 
                href="https://maps.app.goo.gl/EjemploRecepcion"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-button"
              >
                Ver ubicación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;