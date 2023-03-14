const http = require ('http');

// Create server instance
const server = http.createServer ((req, res) => {
    // Set response header
    res.setHeader 
    ('Content-Type', 'text/plain');
    // Write response body
    res.write ('Hello World!');
    // End response
    res.end();
});

// Start server
server.listen (3000, () => {
console.log ('Server running on port 3000')
});