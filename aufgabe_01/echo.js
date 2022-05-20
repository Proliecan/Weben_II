const http = require('http');

const port = 8000

const server = http.createServer((req, res) => {
    if (req.method == "GET") {
            res.writeHead(200, {
                // "Content-Type": "application/txt"
            });
            res.end(req.url);
        }
    if (req.method == "POST") {
        req.on("data", (body) => {
            console.log(body.toString())
            res.end(body)
        })
    }
})

server.listen(port);
console.log("server started on", port)