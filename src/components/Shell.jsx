import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import CustomAudioPlayer from './CustomAudioPlayer';
import CustomVideoPlayer from './CustomVideoPlayer';
import CustomTextarea from './CustomTextarea';
import TimerBox from './TimerBox';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { toast } from 'react-toastify';
import ContactsBox from './ContactsBox';
import HeaderPage from './HeaderPage';
import AboutUsPage from './AboutUsPage';
import Footer from './Footer';
import ChooseFile from './ChooseFile';
import EnterUrl from './EnterUrl';
import DragAndDropFile from './DragAndDropFile';

function Shell() {
  let audioPlayer;
  let videoPlayer;
  const [file, setFile] = useState();
  const [urlError, setUrlError] = useState('');
  const [mediaSrc, setMediaSrc] = useState();
  const [showAudioPlayer, setShowAudioPlayer] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [timeStamp, setTimeStamp] = useState({
    new: 0,
  });
  const [contact, setContact] = useState();
  const [changeTimestamp, setChangeTimestamp] = useState(0);
  const [addContact, setAddContact] = useState(0);
  const contacts = useRef();
  const [srcPlaying, setSrcPlaying] = useState(false);
  const [showTab, setShowTab] = useState('ChooseFile');

  const handleFileChange = (file) => {
    if (file) {
      setYoutubeUrl('');
      setMediaSrc('');
      const uploadedFile = file;
      setFile(uploadedFile);
      if (uploadedFile.type.split('/')[0] === 'video') {
        setShowAudioPlayer(false);
        setShowVideoPlayer(true);
      } else {
        setShowAudioPlayer(true);
        setShowVideoPlayer(false);
      }
      setMediaSrc(URL.createObjectURL(uploadedFile));
    }
  };

  const handleEscPress = (event) => {
    if (file || youtubeUrl) {
      const element = audioPlayer ? audioPlayer.audio : videoPlayer;
      if (event.code === 'Escape') {
        event.preventDefault();
        if (audioPlayer) {
          if (audioPlayer.audio.current.paused) {
            audioPlayer.audio.current.play();
          } else {
            audioPlayer.audio.current.pause();
            audioPlayer.audio.current.currentTime =
              audioPlayer.audio.current.currentTime - 1;
          }
        } else {
          if (!element.player.isPlaying) {
            setSrcPlaying(true);
          } else {
            setSrcPlaying(false);
            element.seekTo(element.getCurrentTime() - 1, 'seconds');
          }
        }
      } else if (event.code === 'F1' || event.code === 'AudioVolumeMute') {
        event.preventDefault();
        if (audioPlayer) {
          element.current.currentTime = element.current.currentTime - 2;
        } else if (showVideoPlayer) {
          element.seekTo(element.getCurrentTime() - 2, 'seconds');
        }
      } else if (event.code === 'F2' || event.code === 'AudioVolumeDown') {
        event.preventDefault();
        if (audioPlayer) {
          element.current.currentTime = element.current.currentTime + 2;
        } else if (showVideoPlayer) {
          element.seekTo(element.getCurrentTime() + 2, 'seconds');
        }
      } else if (event.code === 'F4') {
        event.preventDefault();
        setChangeTimestamp(changeTimestamp + 1);
        if (audioPlayer) {
          setTimeStamp({
            new: element.current.currentTime,
          });
        } else if (showVideoPlayer) {
          setTimeStamp({
            new: element.getCurrentTime(),
          });
        }
      }
    }
  };

  const handleUrlBlur = (event) => {
    validateUrl(event);
  };

  const handleUrl = (event) => {
    if (
      (event.code === 'Enter' || event.code === 'NumpadEnter') &&
      youtubeUrl !== ''
    ) {
      validateUrl(event);
    } else if (youtubeUrl === '') {
      setUrlError('');
    }
  };

  const validateUrl = (event) => {
    const validationRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\\&v=|\?v=)([^#\\&\\?]*).*/;
    const url = event.target.value;
    if (url.match(validationRegEx)) {
      setUrlError('');
      setShowAudioPlayer(false);
      setShowVideoPlayer(true);
      setMediaSrc(url);
    } else if (url) {
      setUrlError('Invalid youtube URL');
    }
  };

  const handleUrlChange = (event) => {
    setYoutubeUrl(event.target.value);
  };

  const keyCallback = (event) => {
    handleEscPress(event);
  };

  const onContactClick = (contact) => {
    setAddContact(addContact + 1);
    setContact(contact);
  };

  const onContactsChange = (items) => {
    contacts.current = items;
  };

  const transmitVideoPlayerRef = (el) => {
    videoPlayer = el;
  };

  const transmitAudioPlayerRef = (el) => {
    audioPlayer = el;
  };

  return (
    <>
      <HeaderPage />
      <AboutUsPage />
      {/* Transcribe Main Section */}
      <main
        id="transcribe"
        className="main-section"
        tabIndex="0"
        onKeyDown={handleEscPress}
      >
        <div className="media-container">
          <h1>Start Transcribing</h1>
          <div className="title-bar"></div>
          <div className="file-type-container">
            <div>
              <button
                className="file-type-tab"
                onClick={() => {
                  setFile('');
                  setYoutubeUrl('');
                  setMediaSrc('');
                  setUrlError('');
                  setSrcPlaying(false);
                  setShowTab('ChooseFile');
                }}
              >
                <img src="./computer.png" alt="choose from computer" />
                from my computer
              </button>
              {showTab === 'ChooseFile' && (
                <div className="file-tab-focus-bar" />
              )}
            </div>
            <div>
              <button
                className="file-type-tab"
                onClick={() => {
                  setFile('');
                  setYoutubeUrl('');
                  setMediaSrc('');
                  setUrlError('');
                  setSrcPlaying(false);
                  setShowTab('EnterUrl');
                }}
              >
                <img src="./web.png" alt="choose from web" />
                from the web
              </button>
              {showTab === 'EnterUrl' && <div className="file-tab-focus-bar" />}
            </div>
          </div>
          <div className="media-inner-container">
            {showTab === 'ChooseFile' && (
              <>
                <div className="desktop-view-media">
                  <DragAndDropFile
                    file={file}
                    handleFileChange={handleFileChange}
                    minimize={showVideoPlayer && showTab === 'ChooseFile'}
                  />
                </div>
                <div className="mobile-view-media">
                  <ChooseFile handleFileChange={handleFileChange} />
                </div>
              </>
            )}
            {showTab === 'EnterUrl' && (
              <EnterUrl
                handleUrlChange={handleUrlChange}
                handleUrl={handleUrl}
                youtubeUrl={youtubeUrl}
                urlError={urlError}
                handleUrlBlur={handleUrlBlur}
              />
            )}
          </div>
          {showAudioPlayer && showTab === 'ChooseFile' && (
            <div className="audio-player-wrapper">
              <CustomAudioPlayer
                src={mediaSrc}
                transmitPlayerRef={transmitAudioPlayerRef}
              />
              {file && (
                <ul className="shortcuts">
                  <li>F1</li>
                  <li>Esc</li>
                  <li>F2</li>
                  <li>F4</li>
                </ul>
              )}
            </div>
          )}
          {(showVideoPlayer || showTab === 'EnterUrl') && (
            <CustomVideoPlayer
              src={mediaSrc}
              transmitVideoPlayerRef={transmitVideoPlayerRef}
              srcPlaying={srcPlaying}
            />
          )}
        </div>

        <div className="editor-section-wrapper">
          <div className="editor-container">
            <CustomTextarea
              timeStamp={timeStamp}
              keyCallback={keyCallback}
              contact={contact}
              addContact={addContact}
              changeTimestamp={changeTimestamp}
            />
          </div>
          <div className="extra-functionality-boxes">
            <ContactsBox
              onContactsChange={onContactsChange}
              onContactClick={onContactClick}
            />
            <TimerBox />
          </div>
        </div>
        <div className="collapsibleContainer"></div>
      </main>
      <Footer />
    </>
  );
}

export default Shell;
