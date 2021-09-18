const http = require('http')
const fs = require('fs')

http.createServer((request, respose) => {
    if (request.url === '/favicon.ico') {
        respose.writeHead(200)
        respose.end('hello')
        return
    }
    respose.writeHead(200)
    respose.end(fs.readFileSync(__dirname + '/../index.html', 'utf-8'))
}).listen(3000)