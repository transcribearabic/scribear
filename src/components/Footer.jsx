import React, { useState, useEffect, useRef, Fragment } from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="inner_footer">
          <div className="innert_footer_container">
            <div className="inner_footer_img_container">
              <a href="#home">
                <img src="./footer-logo.png" alt="scribear logo" />
              </a>
              <h1>Making Transcription More Bearable</h1>
            </div>
            <div className="innert-footer_support">
              <span>{new Date().getFullYear()}</span>
              <span> Beirut, Lebanon</span>
              <div>
                <a
                  href="mailto:scribear@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  scribear@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
