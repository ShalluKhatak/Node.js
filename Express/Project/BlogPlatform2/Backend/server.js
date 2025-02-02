import express from "express";
import cors from "cors";

// const data = fs.readFileSync('posts.json', 'utf8');
const app=express();
const port=3000;
const data  = {
    "id": "1",
    "title": "The Power of JavaScript",
    "author": "John Doe",
    "content": "JavaScript is a versatile language used for both client-side and server-side programming. In this post, we explore its features and capabilities.",
    "date": "2025-01-17"
  };
app.use(cors())
app.get("/",(req,res)=>{
    console.log('`test` :>> ', `test`);
    res.json(data);
})

app.listen(port,()=>{
    console.log('Server is running on: ', port);
})