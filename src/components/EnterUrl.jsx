import React from 'react';

const EnterUrl = ({
  handleUrlChange,
  handleUrl,
  handleUrlBlur,
  youtubeUrl,
  urlError,
}) => {
  return (
    <div className="video-url-input-wrapper">
      <div className="video-url-input-label">or enter Youtube video URL</div>
      <input
        className="video-url-input"
        id="video_url"
        type="text"
        value={youtubeUrl}
        onKeyDown={handleUrl}
        onBlur={handleUrlBlur}
        onChange={handleUrlChange}
        placeholder="www.youtube.com"
      />
      {urlError && <span className="video-url-input-error">{urlError}</span>}
    </div>
  );
};

export default EnterUrl;
