import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player/lazy';

const CustomVideoPlayer = ({ src, transmitVideoPlayerRef, srcPlaying }) => {
  let elementRef;

  return (
    <div
      className="video-player-container"
      style={{
        backgroundImage: src ? '' : 'url(video-player-placeholder.png)',
        cursor: src ? 'inherit' : 'not-allowed',
      }}
    >
      <ReactPlayer
        url={src}
        id="video-player"
        controls="true"
        playing={srcPlaying}
        ref={(el) => {
          elementRef = el;
          transmitVideoPlayerRef(el);
        }}
      />
    </div>
  );
};

export default CustomVideoPlayer;
