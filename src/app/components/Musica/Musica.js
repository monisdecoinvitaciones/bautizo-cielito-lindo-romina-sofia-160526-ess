"use client";
import { useState, useEffect, useRef } from "react";
import './Musica.css';

export default function Musica() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [yaInicio, setYaInicio] = useState(false);
  const audioRef = useRef(null);

  // CONFIGURACIÓN: Volumen máximo (0.1 es el 10% para que sea música de fondo sutil)
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
      if (audio.volume < (VOLUMEN_MAXIMO - 0.01)) {
        audio.volume += 0.01; // Subida más fina para que sea más suave
      } else {
        audio.volume = VOLUMEN_MAXIMO;
        clearInterval(intervalo);
      }
    }, 100); // Se ejecuta cada 100ms
  };

  const toggleMusica = () => {
    const audio = audioRef.current || document.getElementById("audioPrincipal");
    if (!audio) return;

    if (audio.paused) {
      if (!yaInicio) {
        // ELIMINADO: audio.currentTime = 45; -> Ahora inicia en 0 por defecto
        setYaInicio(true);
        fadeIn(audio); // Inicia desde silencio hasta el VOLUMEN_MAXIMO
      } else {
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
        aria-label={reproduciendo ? "Pausar música" : "Reproducir música"}
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