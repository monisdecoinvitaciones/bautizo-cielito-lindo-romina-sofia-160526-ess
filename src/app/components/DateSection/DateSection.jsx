'use client';
import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import './DateSection.css';

const DateSection = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section className="date-section">
      {/* Texto de fondo gigante y muy tenue para dar profundidad */}
      <div className="date-watermark">2026</div>

      <div 
        ref={ref} 
        className={`date-container ${isVisible ? 'reveal-visible' : ''}`}
      >
        <div className="date-frame">
          <span className="save-the-date">Reserva la fecha</span>
          
          <div className="date-flex">
            <span className="date-month">Mayo</span>
          </div>

          <h2 className="date-day-number">16</h2>

          <div className="date-year">2026</div>
          
          <p className="date-day-name">Sábado</p>
        </div>
      </div>
    </section>
  );
};

export default DateSection;