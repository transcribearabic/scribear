import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="about-page">
      <section id="about">
        <h1>About Us</h1>
        <div className="title-bar"></div>
        <article>
          <strong>SCRIBEAR</strong> is a free web app that makes the process of
          transcribing recordings in Arabic smoother and faster.
          <br />
          <br />
          Through its shortcuts, <strong>SCRIBEAR</strong> eliminates the need
          to switch back and forth between your media player and your Word
          document to pause, rewind and fast-forward.
          <br />
          It also allows you to type with more ease and without the need for an
          Arabic Keyboard by using a transliteration engine, powered by Yamli,
          that converts words typed in Latin letters to their closest Arabic
          equivalent.
        </article>
      </section>
      <section id="features">
        <div className="features-container">
          <h1>Features</h1>
          <div className="title-bar features-title-bar"></div>
          <article>
            To facilitate the transcription of interviews and group discussions,
            <br />
            <strong> SCRIBEAR</strong> offers the following additional features:
            <br />
            <br />
            <div className="features-list">
              <img src="./number-one.png" alt="number one in list" />
              <div className="features-list-text">
                A manual log of participants and/or interlocutors that can be
                inserted into the texts with a simple click instead of retyping
                them,
              </div>
            </div>
            <br />
            <div className="features-list">
              <img src="./number-two.png" alt="number two in list" />
              <div className="features-list-text">
                A manual timer that logs and generates a downloadable timesheet
                to keep track of the time spent working,
              </div>
            </div>
            <br />
            <div className="features-list">
              <img src="./number-three.png" alt="number three in list" />
              <div className="features-list-text">
                A shortcut for timestamp insertion.
              </div>
            </div>
          </article>
        </div>
        <div className="features-circle-container">
          <div className="features-circle">
            <img src="features-bear.png" alt="tiny bear image" />
          </div>
        </div>
      </section>
      <section id="keyboard-shortcuts">
        <div className="keyboard-shortcuts-circle-container">
          <img
            className="keyboard-shortcuts-bear-img"
            src="./bear33.png"
            alt="keyboard image"
          />
          <div className="keyboard-shortcuts-circle">
            <div className="keyboard-shortcuts-list">
              <div className="keyboard-shortcut">
                <span>Play or Pause</span>
                <img src="./esc-key.png" alt="esc key icon" />
              </div>
              <div className="keyboard-shortcut">
                <span>Skip backwards</span>
                <img src="./f1-key.png" alt="f1 key icon" />
              </div>
              <div className="keyboard-shortcut">
                <span> Skip forwards</span>
                <img src="./f2-key.png" alt="f2 key icon" />
              </div>
              <div className="keyboard-shortcut">
                <span>Insert timestamp</span>
                <img src="./f4-key.png" alt="f4 key icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="keyboard-shortcuts">
          <h1>Keyboard Shortcuts</h1>
          <div className="title-bar features-title-bar"></div>
          <article>
            <strong> SCRIBEAR</strong> supports all media file types, including
            online videos from Youtube, and allows you to directly download your
            transcripts as Word documents.
            <br />
            However, your recordings and transcripts are perfectly safe, and
            they never leave your computer, as <strong>SCRIBEAR</strong> does
            not store any text or media files.
            <br />
            <br />
            Our mission is to make the task of transcribing Arabic recording
            less daunting for busy transcriptionists and to promote the use of
            the Arabic language in research, journalism, and Internet use in
            general.
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
