const http = require ('http');
const fs = require ('fs')
const server = http.createServer ((req, res) =>{
  if(req.url === './'){  fs.readFile('index.html', 'utf-8', function(err, data) {
        if (err) throw err;
        res.end(data)
    });}else if (req.url === '/about'){
        fs.readFile('x.html', 'utf-8', function(err, data) {
            if (err) throw err;
            res.end(data);
    })}
    else if (req.url === '/contact'){
        fs.readFile('y.html', 'utf-8', function(err, data) {
            if (err) throw err;
            res.end(data);
    })}
});
server.listen (3500, () => {
    console.log ('server running on port 3500')
});