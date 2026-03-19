'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const targetDate = new Date('2026-05-16T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Observer para la animación (más sensible)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 } // Se dispara antes para un efecto más fluido
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Timer del conteo (más optimizado)
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        // El tiempo ya pasó, puedes poner 0 o un mensaje
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [targetDate]);

  return (
    <section className={`countdown-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      {/* Fondo de imagen (más oscuro y sutil) */}
      <div className="countdown-bg-wrapper">
       
        <div className="countdown-overlay"></div>
      </div>

      {/* --- DECORACIONES DE PAPEL PICADO --- */}
      {/* Esquina superior izquierda (se ve completa) */}
      <div className="decor-papel-picado decor-top-left">
        <img src="/fotos/papel-picado.png" alt="Decoración Papel Picado Superior" />
      </div>

      {/* Esquina inferior derecha (se corta el borde inferior) */}
      <div className="decor-papel-picado decor-bottom-right">
        <img src="/fotos/papel-picado.png" alt="Decoración Papel Picado Inferior" />
      </div>
      {/* ------------------------------------- */}

      <div className="countdown-content">
        <h3 className="countdown-subtitle fuente-serif">SOLO FALTAN</h3>
        
        <div className="countdown-grid">
          <div className="time-block anim-1">
            <span className="time-number">{timeLeft.days}</span>
            <span className="time-label">Días</span>
          </div>
          <div className="time-divider"></div>
          <div className="time-block anim-2">
            <span className="time-number">{timeLeft.hours}</span>
            <span className="time-label">Horas</span>
          </div>
          <div className="time-divider"></div>
          <div className="time-block anim-3">
            <span className="time-number">{timeLeft.minutes}</span>
            <span className="time-label">Min</span>
          </div>
          <div className="time-divider"></div>
          <div className="time-block anim-4">
            <span className="time-number">{timeLeft.seconds}</span>
            <span className="time-label">Seg</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;