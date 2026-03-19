'use client';
import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import './FraseBautizo.css';

const FraseBautizo = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section className="frase-bautizo-elegant-section">
      {/* Decoración sutil de fondo (tu estampado) */}
      <div className="talavera-overlay-bg"></div>

      <div 
        ref={ref} 
        className={`frase-elegant-container ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
      >
        {/* Icono superior sutil */}
        <div className="adorno-superior-bautizo">
          <p className='text-white corazon'>❤</p>
        </div>
        
        <p className="texto-poetico-cursivo fuente-script">
          "Señor, hoy me presentan ante ti para ser bañada con la gracia de tu amor, 
          toma mi corazón y mantenlo junto a ti"
        </p>

      </div>
    </section>
  );
};

export default FraseBautizo;