//Create a new file called app.js in your project directory. And Import the os module using the require() function:
const os = require('os');

//Use the os module to get information about the operating system.
console.log(os.platform());

//Use the os module to get information about the system's CPUs:
console.log(os.cpus());

//Output: the total amount of system memory in bytes
console.log(os.totalmem());