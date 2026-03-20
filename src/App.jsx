import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoRow from './components/VideoRow';
import VideoModal from './components/VideoModal';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // The 2 videos provided by the user
  const channelVideos = [
    {
      id: "3xn09m2eTC8",
      title: "Capi",
      embedUrl: "https://www.youtube.com/embed/3xn09m2eTC8",
      thumbnail: "/thumbnail-1.jpg"
    },
    {
      id: "PGkFmC6ikYA",
      title: "Luni",
      embedUrl: "https://www.youtube.com/embed/PGkFmC6ikYA",
      thumbnail: "/thumbnail-2.jpg"
    }
  ];

  const handlePlayClick = () => {
    // Play the first video when clicking hero PLAY button
    setSelectedVideo(channelVideos[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Hero onPlay={handlePlayClick} />
      
      <main style={{ paddingBottom: '50px' }}>
        <VideoRow 
          title="Nuestros Videos" 
          videos={channelVideos} 
          onVideoSelect={handleVideoSelect} 
        />
      </main>

      <footer style={{ padding: '60px 4%', textAlign: 'center', color: '#fff', fontSize: '1rem', marginTop: '50px', backgroundImage: "url('/footer-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(20,20,20,0.8)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p>&copy; 2026 No Sugar Kids. Todos los derechos reservados.</p>
          <p style={{ marginTop: '10px' }}>Los personajes Luni, Capibara y Cepillo son marca registrada de No Sugar Kids.</p>
        </div>
      </footer>

      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={closeModal} 
        embedUrl={selectedVideo ? selectedVideo.embedUrl : ''} 
      />
    </div>
  );
};

export default App;
