import React, { useEffect } from 'react';
import './App.css';
import loadJQuery from './scripts/loadJQuery.js';
import 'react-h5-audio-player/lib/styles.css';
import { ToastContainer } from 'react-toastify';
import Shell from './components/Shell';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    // loadJQuery(() => {
    //   // setLoaded(true);
    // });
  });

  return (
    <>
      <Shell />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
        // toastClassName="toastClass"
        // bodyClassName="bodyToastClass"
      />
    </>
  );
}

export default App;
