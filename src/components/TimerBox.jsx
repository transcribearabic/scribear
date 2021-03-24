import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import moment from 'moment';
import { toast } from 'react-toastify';

const TimerBox = () => {
  // test
  const [logs, setLogs] = useState([]);
  const [timer, setTimer] = useState('00:00:00');
  const [startTime, setStartTime] = useState();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showPause, setShowPause] = useState(false);
  const [uriHref, setUriHref] = useState('');
  const timerInterval = useRef();
  const logOperation = useRef(0);

  useEffect(() => {
    setUriHref(generateFileHref());
  }, [logOperation.current]);

  function formatDatetime(date) {
    return moment(date).format('HH:mm:ss h:mm A');
  }

  function formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    // let diffInMs = (diffInSec - ss) * 100;
    // let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, '0');
    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    // let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
  }

  const onPause = (event) => {
    logOperation.current = logOperation.current + 1;
    setShowPause(false);
    clearInterval(timerInterval.current);
    setLogs([
      ...logs,
      `You paused at ${formatDatetime(new Date())} with ${timer} on clock`,
    ]);
  };

  const onStart = (event) => {
    logOperation.current = logOperation.current + 1;
    setShowPause(true);
    const newStartTime = Date.now() - elapsedTime;
    setStartTime(newStartTime);
    timerInterval.current = setInterval(function printTime() {
      const newElapsedTime = Date.now() - newStartTime;
      setElapsedTime(newElapsedTime);
      setTimer(timeToString(newElapsedTime));
    }, 1000);
    setLogs([...logs, `You started at ${formatDatetime(new Date())}`]);
  };

  const onStop = (event) => {
    if (elapsedTime) {
      logOperation.current = logOperation.current + 1;
      setShowPause(false);
      clearInterval(timerInterval.current);
      setElapsedTime(0);
      setLogs([
        ...logs,
        `You stopped at ${formatDatetime(new Date())} with ${timer} on clock`,
      ]);
    }
  };

  const onReset = (event) => {
    logOperation.current = logOperation.current + 1;
    setLogs([]);
    clearInterval(timerInterval.current);
    setTimer('00:00:00');
    setElapsedTime(0);
    setShowPause(false);
  };

  const generateFileHref = () => {
    if (logs.length) {
      var content = '';
      content += 'Logs\n';
      content += '********\n';
      for (var i = 0; i < logs.length; i++) {
        content += logs[i];
        content += '\n';
      }
      const uri =
        'data:application/octet-stream,' + encodeURIComponent(content);
      // location.href = uri;
      return uri;
    } else {
      return '';
    }
  };

  return (
    <div>
      <div className="timer-box-container">
        <h3>Timer - Logs</h3>
        {logs.length > 0 && (
          <a
            className="timer-box-export"
            href={uriHref}
            download={`Logs_${formatDate()}.txt`}
          >
            <button className="export-button" onClick={generateFileHref}>
              <figure className="export-figure">
                <img src="./export-button.png" alt="export to file icon" />
              </figure>
            </button>
          </a>
        )}
        <div className="timer-buttons-container">
          <div
            className="timer-stopwatch"
            style={{
              backgroundImage: 'url(stopwatch-pink.png)',
            }}
          >
            <div className="timer-text">{timer}</div>
          </div>
          {/* <hr /> */}
          <div className="timer-buttons">
            <button onClick={onStop}>
              <figure>
                <img src="./stop-button.jpg" alt="stop icon" />
              </figure>
            </button>
            {showPause && (
              <button onClick={onPause}>
                <figure>
                  <img src="./pause-button.jpg" alt="pause icon" />
                </figure>
              </button>
            )}
            {!showPause && (
              <button onClick={onStart}>
                <figure>
                  <img src="./start-button.png" alt="start icon" />
                </figure>
              </button>
            )}
            <button onClick={onReset}>
              <figure>
                <img src="./reset-button.png" alt="reset icon" />
              </figure>
            </button>
          </div>
        </div>
        <hr />
        {logs.length ? (
          <div className="timer-logs-container">
            {logs.map((log, index) => (
              <div key={index} className="timer-log">
                {log}
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-box">No logs yet</div>
        )}
      </div>
    </div>
  );
};

export default TimerBox;
