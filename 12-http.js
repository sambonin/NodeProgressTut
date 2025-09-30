const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to the home page')
    }
    if (req.url === '/about') {
        res.end('here is our short history')
    }
})

server.listen(1000)