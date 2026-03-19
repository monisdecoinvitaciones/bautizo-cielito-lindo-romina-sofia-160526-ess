"use client";
import { useState, useEffect, useRef } from "react";
import './Musica.css';

export default function Musica() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [yaInicio, setYaInicio] = useState(false);
  const audioRef = useRef(null);

  // CONFIGURACIÓN: Aquí controlas el volumen máximo (0.3 es el 30%)
  const VOLUMEN_MAXIMO = 0.1; 

  useEffect(() => {
    audioRef.current = document.getElementById("audioPrincipal");
    if (!audioRef.current) return;

    // Sincronizar estado inicial
    setReproduciendo(!audioRef.current.paused);

    const handlePlay = () => setReproduciendo(true);
    const handlePause = () => setReproduciendo(false);

    audioRef.current.addEventListener("play", handlePlay);
    audioRef.current.addEventListener("pause", handlePause);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("play", handlePlay);
        audioRef.current.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  const fadeIn = (audio) => {
    audio.volume = 0;
    const intervalo = setInterval(() => {
      // Sube el volumen gradualmente hasta llegar al límite configurado
      if (audio.volume < (VOLUMEN_MAXIMO - 0.05)) {
        audio.volume += 0.05;
      } else {
        audio.volume = VOLUMEN_MAXIMO;
        clearInterval(intervalo);
      }
    }, 200);
  };

  const toggleMusica = () => {
    const audio = audioRef.current || document.getElementById("audioPrincipal");
    if (!audio) return;

    if (audio.paused) {
      if (!yaInicio) {
        audio.currentTime = 45; // Salto inicial
        setYaInicio(true);
        fadeIn(audio); // Inicia suave hasta el 30%
      } else {
        // Si ya había iniciado, mantenemos el volumen bajo al reanudar
        audio.volume = VOLUMEN_MAXIMO;
      }
      audio.play().catch(err => console.log("Error:", err));
    } else {
      audio.pause();
    }
  };

  return (
    <div className="contenedor-musica-fijo">
      <button 
        className={`btn-musica ${reproduciendo ? 'pulsando' : ''}`} 
        onClick={toggleMusica}
      >
        {reproduciendo ? (
          <svg viewBox="0 0 24 24" className="icono-musica">
            <rect x="6" y="4" width="3" height="16" fill="currentColor" />
            <rect x="15" y="4" width="3" height="16" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="icono-musica">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        )}
      </button>
      {!reproduciendo && <span className="hint-musica">Música</span>}
    </div>
  );
}