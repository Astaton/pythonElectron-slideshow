function getFiles() {
  let python = require("python-shell");
  let path = require('path');


  let options = {
    scriptPath: path.join(__dirname, '../../engine'),
    args: 'test'
  }

  let files = new python('get_files.py', options);

  files.on('message', (message) => {
    swal(message);
  })
} 