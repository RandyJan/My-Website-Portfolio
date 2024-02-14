
import ReactPlayer from 'react-player';
// import bgmusic from '../../assets/audio/bgmusic.mp3';
import React, { useEffect, useState } from 'react';


const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const isMusicPlaying = localStorage.getItem('isMusicPlaying');
    if (isMusicPlaying === 'true') {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isMusicPlaying', isPlaying.toString());
  }, [isPlaying]);

  return (
    <ReactPlayer
      url={bgmusic}
      playing={isPlaying}
      loop={true}
      volume={0.5}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onStart={() => setIsPlaying(true)}
    />
  );
};

export default BackgroundMusic;

