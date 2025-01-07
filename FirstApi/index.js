import http from "http";
import os from "os";

const port = 8000;
const osData={
                "architecture":os.arch(),
                "endianness":os.endianness(),
                "platform":os.platform(),
                "system_name":os.type()
            }

const server = http.createServer((req,res)=>{
    try {
        if(req.url==="/"){
            res.end("Welcome Home!!");
        }else if(req.url==="/info"){
            res.end(JSON.stringify(osData));
        }else{
            res.end("Page not Found.");
        }
    } catch (error) {
        console.log('error', error);
    }
})

server.listen(port,()=>{
 console.log(`server is running on port ${port}.`);
})