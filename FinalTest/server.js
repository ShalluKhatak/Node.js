import http from "http";
import path from "path";
import fs from "fs";

const port = 4000;
const current_path= process.cwd();
const all_files=[`data_one.txt`,`data_two.txt`,`data_three.txt`];
const accepted_route=['/get-first','/retrieve-second','/fetch-third','/combine','/all-data'];


const createFile=(file='testfile')=>{
    try {
        const file_name= path.basename(file);
        const new_file=path.join(current_path,file_name);
        fs.writeFile(new_file, `${file_name}, Hello, World! `, 'utf8', (err) => {
            if (err) {
                return console.error('Error creating file:', err);
            }
            console.log('File created successfully!');
        });

    } catch (error) {
        console.log('error', error);
    }
}


const readFileData = (file) => {
    try {
         const file_name= path.basename(file);
          let read_file='';
          if(file_name==='get-first'){
              read_file=path.join(current_path,`data_one.txt`);
            }else if(file_name==='retrieve-second'){
              read_file=path.join(current_path,`data_two.txt`);
            }else {
              read_file=path.join(current_path,`data_three.txt`);
          }
         const data = fs.readFileSync(read_file, 'utf8');
         return data;
         
     } catch (error) {
        console.log('error', error);
     }
}


const combineAllFilesData=()=>{
    try {
        let read_file='';
        for(let i=0;i<all_files.length;i++){
                read_file=path.join(current_path,all_files[i]);
                const data = fs.readFileSync(read_file , 'utf8');
                fs.appendFile(`combine.txt`, data + '\n', (err) => {
            if (err) {
            console.error(`Error appending ${read_file} to ${`combine.txt`}:`, err);
            return;
            }
            console.log(`${read_file} has been appended to ${`combine.txt`}`);
        });
        }
    } catch (error) {
        console.log('error', error);
    }
}



const server = http.createServer((req,res)=>{
    try {
        if(req.url !=='/favicon.ico' && req.url !==''){
            if(req.url ==='/'){
                res.end("Welcome Home!")
            }else if(accepted_route.includes(req.url)){
                if(req.url==='/combine'){
                    combineAllFilesData();
                    const combine_data = fs.readFileSync(`combine.txt` , 'utf8');
                    res.end(combine_data);
                    fs.writeFile('combine.txt', '', function(){console.log('done')});
                    
                }else if(req.url==='/all-data'){
                    combineAllFilesData();
                    let  combine_data = fs.readFileSync(`combine.txt` , 'utf8');
                    combine_data=combine_data.split('\n');
                    combine_data=combine_data.reverse();
                    combine_data=combine_data.join('\n');
                    res.end(combine_data);
                    fs.writeFile('combine.txt', '', function(){console.log('done')});
                }else{
              const read_data=  readFileData(req.url);
              res.end(read_data);
              }
            }else if(req.url.includes("create")){
                createFile(req.url);
            }else{
                res.end("Page not found.")
            }
        }else{
            res.end("Invalid route. Try /get-first, /retrieve-second, /fetch-third, /combine, or /all-data")
        }
    } catch (error) {
        console.log('error', error);
    }
})

server.listen(port,()=>{
    console.log(`Server is working on port ${port}.`);
})