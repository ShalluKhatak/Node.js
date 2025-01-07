import http from "http";
import fs from "fs";


const port="8000";
const file_path="log2.txt";

//file created first time.
// fs.writeFile(file_path,"Here log list :",(err)=>{
//     if(err){
//         console.log('err', err);
//     }
//     console.log('File created');
// })

const updateLogFile=(req)=>{
    try {
        fs.appendFile(file_path,`${req.url}\n`,'utf8',(err)=>{
            if(err){
                console.log('err', err);
            }
            // console.log('Log file updated');
        })
    } catch (error) {
        console.log('error', error);
    }
}


// const readLogFile=(r_file)=>{
//     try {
//         fs.readFile(r_file,'utf8',(err,data)=>{
//             if(err){
//             }
//             return data;
//         })
//     } catch (error) {
//         console.log('error', error);
//     }
// }


const readLogFile2 = (r_file) => {
  try {
    const data = fs.readFileSync(r_file, 'utf8');
    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};



const server = http.createServer((req,res)=>{
    try {
        console.log('req.url', req.url);
        if(req.url !== '/favicon.ico'){
            updateLogFile(req);
            if(req.url === '/log'){
            const res_data=readLogFile2(file_path);
            res.end(res_data);
        }
        }
    } catch (error) {
        console.log('error', error);
    }
})


server.listen(port,()=>{
    console.log(`Server is running on ${port}.`);
})