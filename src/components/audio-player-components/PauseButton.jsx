import React, { useEffect, useState, useRef } from 'react';
import '../../App.css';

function PauseButton() {
  return (
    <figure className="button-figure">
      <img
        className="button-image"
        src="./player-pause-button.png"
        alt="pause icon"
      />
    </figure>
  );
}

export default PauseButton;
