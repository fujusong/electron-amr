// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var fs = require('fs');
  var content = document.getElementById('content');
  var button = document.getElementById('button');
  button.addEventListener('click',function(e){


    fs.readFile(filepath.value,function(err,data){
      //content.textContent = data;

          
   playAmrArray(new Uint8Array(data));

     /* var samples = new AMR({
	  benchmark: true
	}).decode(data);


	AMR.util.play(samples);*/
    });


  });
