import React, { useState, useEffect } from 'react';
import DragAndDropFile from './DragAndDropFile';

const DragAndDrop = ({}) => {
  const [file, setFile] = useState();

  const handleFileDrop = (files) => {
    if (files && files[0].name) {
      setFile(files[0].name);
    }
  };

  return (
    <DragAndDropFile handleFileDrop={handleFileDrop}>
      <div style={{ height: 300, width: 250 }}>{file && <div>{file}</div>}</div>
    </DragAndDropFile>
  );
};

export default DragAndDrop;
