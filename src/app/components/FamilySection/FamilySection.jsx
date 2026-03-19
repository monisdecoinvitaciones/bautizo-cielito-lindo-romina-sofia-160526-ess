'use client';
import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import './FamilySection.css';

const FamilySection = () => {
  // Sensores independientes para cada tarjeta
  const [ref1, isVisible1] = useReveal();
  const [ref2, isVisible2] = useReveal();

  return (
    <section className="family-section-bg">
      <div className="family-container">
        
        {/* GRUPO PADRES - Sensor 1 */}
        <div 
          ref={ref1}
          className={`family-group ${isVisible1 ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <h3 className="family-title">Mis Padres</h3>
          <div className="family-card-elegant">
            <div className="talavera-decor-top">❀</div>
            <div className="card-content">
              <p className="name-text">Guadalupe Sandoval Aguilar</p>
              <div className="name-divider"></div>
              <p className="name-text">Antonio Ruiz Vázquez</p>
            </div>
            <div className="talavera-pattern-bottom"></div>
          </div>
        </div>

        {/* SEPARADOR CENTRAL (Solo PC) */}
        <div className="family-center-decor">
          <div className="ornament-line"></div>
          <span className="ornament-diamond">✦</span>
          <div className="ornament-line"></div>
        </div>

        {/* GRUPO PADRINOS - Sensor 2 */}
        <div 
          ref={ref2}
          className={`family-group ${isVisible2 ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <h3 className="family-title">Mis Padrinos</h3>
          <div className="family-card-elegant">
            <div className="talavera-decor-top">❀</div>
            <div className="card-content">
              <p className="name-text">Griselda Adriana Ruiz Vázquez</p>
              <div className="name-divider"></div>
              <p className="name-text">José Enrique Galindo Ponce</p>
            </div>
            <div className="talavera-pattern-bottom"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FamilySection;