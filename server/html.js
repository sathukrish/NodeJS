const http = require ('http');
const fs = require ('fs')
const server = http.createServer ((req, res) =>{
    fs.readFile('index.html', 'utf-8', function(err, data) {
        if (err) throw err;
        res.end(data);
    });
});
server.listen (3500, () => {
    console.log ('server running on port 3500')
});