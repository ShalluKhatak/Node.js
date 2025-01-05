import http from "http";

const hostname="127.0.0.1";
const port="8000";

const server = http.createServer((req,res)=>{
    console.log('req.url :>> ', req.url);
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})