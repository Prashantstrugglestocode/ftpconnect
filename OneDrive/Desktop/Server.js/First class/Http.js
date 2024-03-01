const http = require('http');
const port = 5000

const server = http.createServer((req, res) =>{
     if(req.url === '/'){
        res.end('Welcome to the homepage.');
    }
    if(req.url === '/about'){
        res.end('Welcome to the about page.');
    }
    res.end(`<h1>Opssl</h1>`)
})

server.listen(port);