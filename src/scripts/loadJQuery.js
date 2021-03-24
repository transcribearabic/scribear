const loadJQuery = (callback) => {
  const script = document.createElement('script');
  script.src =
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
  document.body.appendChild(script);
  script.onload = () => {
    if (callback) callback();
  };
  if (callback) callback();
};

export default loadJQuery;
