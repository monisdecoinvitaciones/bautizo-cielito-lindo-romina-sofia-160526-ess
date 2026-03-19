'use client';
import React from 'react';
import { useReveal } from '../../hooks/useReveal'; // Ajusta la ruta si es necesario
import './DressCode.css';

const DressCode = () => {
  const [sectionRef, sectionVisible] = useReveal(0.1);
  const [colorsRef, colorsVisible] = useReveal(0.3);

  const femalePastels = [
    { id: 'f1', hex: '#FDF5F6', name: 'Pétalo' },
    { id: 'f2', hex: '#F9F1E7', name: 'Champán' },
    { id: 'f3', hex: '#E8A0AD', name: 'Malva' },
    { id: 'f4', hex: '#B5838D', name: 'Rosa Viejo' },
  ];

  const malePastels = [
    { id: 'm1', hex: '#F4F7F6', name: 'Hielo' },
    { id: 'm2', hex: '#D4E2D4', name: 'Eucalipto' },
    { id: 'm3', hex: '#CAD2C5', name: 'Bruma' },
    { id: 'm4', hex: '#91A3B0', name: 'Pizarra' },
  ];

  return (
    <section className="dress-code-section" ref={sectionRef}>
      <div className={`dress-line ${sectionVisible ? 'reveal-line' : ''}`}></div>
      
      <div className={`dress-code-container ${sectionVisible ? 'reveal-content' : ''}`}>
        <div className="dress-icon-wrapper">
          <img src="/fotos/iconosRosas/11.png" alt="Dress Code" className="dress-icon" />
        </div>
        
        <h2 className="dress-title">Código de Vestimenta</h2>
        <h3 className="dress-type">FORMAL · COLORES PASTELES</h3>

        <div className="dress-colors-wrapper" ref={colorsRef}>
          
          {/* SECCIÓN MUJERES */}
          <div className="gender-palette">
            <p className="colors-subtitle">Sugerencia Damas:</p>
            <div className="colors-grid">
              {femalePastels.map((color, index) => (
                <div key={color.id} className="color-item">
                  <div 
                    className={`color-circle ${colorsVisible ? 'reveal-circle' : ''}`}
                    style={{ 
                      backgroundColor: color.hex,
                      transitionDelay: `${index * 0.1}s` 
                    }}
                  ></div>
                  <span className="color-name">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN HOMBRES */}
          <div className="gender-palette">
            <p className="colors-subtitle">Sugerencia Caballeros:</p>
            <div className="colors-grid">
              {malePastels.map((color, index) => (
                <div key={color.id} className="color-item">
                  <div 
                    className={`color-circle ${colorsVisible ? 'reveal-circle' : ''}`}
                    style={{ 
                      backgroundColor: color.hex,
                      transitionDelay: `${(index + 4) * 0.1}s` 
                    }}
                  ></div>
                  <span className="color-name">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className={`dress-line ${sectionVisible ? 'reveal-line' : ''}`}></div>
    </section>
  );
};

export default DressCode;