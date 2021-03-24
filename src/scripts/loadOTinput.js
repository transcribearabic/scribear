const loadOTinput = (callback) => {
  //   const existingScript = document.getElementById('example-input');
  //     if (!existingScript) {
  //       let uploadedFile;
  //       const script = document.createElement('script');
  //       script.src = 'otinput.js';
  //       script.id = 'googleMaps';
  //       document.body.appendChild(script);
  //       window.input = new oTinput({
  //         element: document.querySelector('.example-input'),
  //         onFileChange: function(file){
  //           uploadedFile = file;
  //             console.log(file);
  //             msg('File is: '+file.name);
  //         },
  //         onFileError: function(err){
  //             console.log(err);
  //             msg('Error: '+err.message);
  //         },
  //         onURLSubmit: function(url){
  //             msg('URL submitted: '+url);
  //         },
  //         onURLError: function(err, url){
  //             msg('Bad URL: '+url);
  //         },
  //         onDragover: function(){
  //             msg('Drop file now to input');
  //         },
  //         onDragleave: function(){
  //             msg('');
  //         }
  //       });
  //       script.onload = () => {
  //         if (callback) callback(uploadedFile);
  //       };
  //     }
};

//   function msg(txt){
//     const existingScript = document.getElementById('message');
//     existingScript.text(txt);
//   }

export default loadOTinput;
