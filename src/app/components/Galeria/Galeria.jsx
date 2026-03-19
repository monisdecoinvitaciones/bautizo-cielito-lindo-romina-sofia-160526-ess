'use client';
import React, { useState } from 'react';
import './Galeria.css';

const Galeria = () => {
  const [modalImagen, setModalImagen] = useState(null);

  const fotos = [
    { id: 1, src: '/fotos/1.jpeg', clase: 'grande' },
    { id: 2, src: '/fotos/2.jpeg', clase: 'vertical' },
    { id: 3, src: '/fotos/6.jpeg', clase: 'vertical' },
  ];

  return (
    <section className="seccion-galeria">
      {/* ESTAMPADO DE PAPEL PICADO */}
      <div className="galeria-papel-picado"></div>

      <div className="galeria-header">
        <span className="galeria-subtitle">Momentos</span>
        <h2 className="titulo-galeria">Galería</h2>
      </div>

      <div className="contenedor-collage">
        {fotos.map((foto) => (
          <div 
            key={foto.id} 
            className={`foto-item ${foto.clase}`}
            onClick={() => setModalImagen(foto.src)}
          >
            <div className="overlay-zoom">
              <span className="zoom-icon">VER</span>
            </div>
            <img src={foto.src} alt={`Galería ${foto.id}`} />
          </div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      {modalImagen && (
        <div className="modal-galeria" onClick={() => setModalImagen(null)}>
          <button className="cerrar-modal">&times;</button>
          <div className="modal-contenido">
            <img src={modalImagen} alt="Zoom" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;