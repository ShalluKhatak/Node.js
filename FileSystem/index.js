import fs from "fs"; 

// const data = fs.readFileSync('example.txt', 'utf8');

// console.log("reading");
// console.log(data);
// console.log("end");





fs.readFile('example.txt', 'utf8',(err,data)=>{
if(err){
    return console.log('err :>> ', err);
}
console.log('data :>> ', data);

});

