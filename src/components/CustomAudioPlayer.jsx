import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import PlayButton from './audio-player-components/PlayButton.jsx';
import RewindButton from './audio-player-components/RewindButton.jsx';
import ForwardButton from './audio-player-components/ForwardButton.jsx';
import PauseButton from './audio-player-components/PauseButton';

const CustomAudioPlayer = ({ src, transmitPlayerRef }) => {
  return (
    <AudioPlayer
      src={src}
      className="audio-player"
      onPause={(e) => {
        e.target.currentTime = e.target.currentTime - 1;
      }}
      ref={(el) => {
        if (el) {
          transmitPlayerRef(el);
        }
      }}
      autoPlayAfterSrcChange={false}
      customProgressBarSection={[
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
      ]}
      customControlsSection={[]}
      customAdditionalControls={[]}
      progressJumpSteps={{ backward: 2000, forward: 2000 }}
      customIcons={{
        play: <PlayButton />,
        rewind: <RewindButton />,
        forward: <ForwardButton />,
        pause: <PauseButton />,
      }}
    />
  );
};

export default CustomAudioPlayer;
