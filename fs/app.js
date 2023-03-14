//1. Import the fs module using the require() function:
const fs = require('fs');

//2. Write to a file using the fs.writeFile() method:
fs.writeFile('file.txt', 'Hello World!', function(err) {
    if (err) throw err;
    console.log('File written successfully');
  });

//3. Read a file using the fs.readFile() method:
fs.readFile('file.txt','utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });

//4. Create a directory using the fs.mkdir() method:
fs.mkdir('mydir', function(err) {
    if (err) throw err;
    console.log('Directory created successfully');
  });

// //5. Delete a file using the fs.unlink() method:
fs.unlink('file.txt', function(err) {
    if (err) throw err;
    console.log('File deleted successfully');
  });

// // //6. Delete a directory using the fs.rmdir() method:
fs.rmdir('mydir', function(err) {
    if (err) throw err;
    console.log('Directory deleted successfully');
  });