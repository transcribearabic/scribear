import React, { useState, useEffect } from 'react';

const DragAndDropFile = ({
  handleFileChange,
  file,
  showAudioPlayer,
  minimize,
}) => {
  const [upload, setUpload] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dropRef = React.createRef();
  let dragCounter = 0;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) {
      setDragging(false);
    }
  };
  const handleDrop = (e) => {
    setUpload(true);
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (e.dataTransfer.files && e.dataTransfer.files[0].name) {
        handleFileChange(e.dataTransfer.files[0]);
      } else {
        e.dataTransfer.clearData();
      }
      dragCounter = 0;
    }
    setTimeout(() => {
      setUpload(false);
    }, 150);
  };

  const handleChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setUpload(true);
      handleFileChange(event.target.files[0]);
      setTimeout(() => {
        setUpload(false);
      }, [150]);
    }
  };

  useEffect(() => {
    if (dropRef.current) {
      let div = dropRef.current;
      div.addEventListener('dragenter', handleDragIn);
      div.addEventListener('dragleave', handleDragOut);
      div.addEventListener('dragover', handleDrag);
      div.addEventListener('drop', handleDrop);
    }
    return () => {
      if (dropRef.current) {
        let div = dropRef.current;
        div.removeEventListener('dragenter', handleDragIn);
        div.removeEventListener('dragleave', handleDragOut);
        div.removeEventListener('dragover', handleDrag);
        div.removeEventListener('drop', handleDrop);
      }
    };
  }, []);

  return (
    <div className="drag-and-drop-box-wrapper" ref={dropRef}>
      <div
        className="drag-and-drop-box"
        style={{
          backgroundColor: dragging ? '#fff' : '#e890a0',
          minHeight: minimize ? '100px' : '238px',
        }}
      >
        {upload ? (
          <p className="drag-and-drop-box-uploading">Uploading...</p>
        ) : (
          <>
            {!minimize && (
              <img
                className="drag-and-drop-img"
                src="./download.svg"
                alt="upload icon"
              />
            )}
            <input
              type="file"
              name="files"
              id="file"
              accept=".mp3, .m4a, .flac, .mp4, .wav, .wma, .aac, .mpg, .mp2, .mpeg, .mpe, .mpv, .ogg, .m4p, .m4v, .avi, .wmv, .mov, .qt, .flv, .swf"
              onChange={handleChange}
            />
            <label htmlFor="file">
              <h5
                className="drag-and-drop-label"
                style={{
                  margin: minimize ? '0 0 0.735em 0' : '1.67em 0',
                }}
              >
                <strong>Choose a file</strong>
                <span> or drag it here</span>.
              </h5>
            </label>
            {file && <p className="drag-and-drop-file">{file.name}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default DragAndDropFile;
