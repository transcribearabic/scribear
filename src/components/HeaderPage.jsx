import React from 'react';

const HeaderPage = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#keyboard-shortcuts">Shortcuts</a>
            </li>
          </ul>
        </nav>
      </header>
      <section
        id="home"
        className="header-background-wrapper"
        style={{
          backgroundImage: 'url(bg.png)',
        }}
      >
        <div className="header-container">
          <h1>Making Transcription More Bearable</h1>
          <a href="#transcribe">Start Transcribing Now</a>
        </div>
      </section>
    </>
  );
};

export default HeaderPage;
