import React from 'react';
import './Hero.css';

const Hero = ({ onPlay }) => {
  return (
    <div className="hero-container" style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-background" style={{ background: 'transparent' }}></div>
      <div className="hero-vignette"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Aprende y Canta con Nosotros!</h1>
        <p className="hero-description">
          Únete a Luni, Capibara y Cepillo en sus divertidas aventuras llenas de música, colores y mucho aprendizaje.
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-play" onClick={onPlay}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Reproducir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
