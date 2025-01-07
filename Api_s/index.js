const http = require("http");

const json = { "id": 123, "name": "John Doe", "email": "john@example.com" };
const server = http.createServer((req, res) => {
    console.log("req.url",req.url);
    if(req.url==='/'){
        res.writeHead(200,{
            "content-type":"text/plan"
        });
        res.end(JSON.stringify(json));
    }else if(req.url==="/about"){
        res.end("Welcome to About page.");
    }else{
         res.writeHead(404,{
            "content-type":"text/plan"
        });
        res.end("Page not found. 404")
    }
    // res.end();
})

server.listen((3000), () => {
    console.log("Server is Running");
})