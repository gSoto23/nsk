import React, { useRef, useState } from 'react';
import './VideoRow.css';

const VideoRow = ({ title, videos, onVideoSelect }) => {
  const rowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="row-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="row-title">{title}</h2>
      
      <div className="row-wrapper">
        {isHovered && (
          <button className="slider-arrow left" onClick={scrollLeft}>
            {'<'}
          </button>
        )}
        
        <div className="row-posters" ref={rowRef}>
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => onVideoSelect(video)}
            >
              <div className="video-thumbnail" style={{ backgroundImage: `url(${video.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#333' }}>
                <div className="play-button-overlay">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <h3 className="video-overlay-title">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {isHovered && (
          <button className="slider-arrow right" onClick={scrollRight}>
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoRow;
