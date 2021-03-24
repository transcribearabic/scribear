import React from 'react';

const ChooseFile = ({ handleFileChange, uploadInputElement }) => {
  const handleChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      handleFileChange(event.target.files[0]);
    }
  };

  return (
    <div className="choose-file-simple-input">
      <input
        className="input"
        id="audio_file"
        type="file"
        accept=".mp3, .m4a, .flac, .mp4, .wav, .wma, .aac, .mpg, .mp2, .mpeg, .mpe, .mpv, .ogg, .m4p, .m4v, .avi, .wmv, .mov, .qt, .flv, .swf"
        onChange={handleChange}
        ref={(el) => {
          uploadInputElement = el;
        }}
      />
      <label htmlFor="audio_file">
        <img src="upload.png" alt="upload icon" />
        Choose a File
      </label>
    </div>
  );
};

export default ChooseFile;
