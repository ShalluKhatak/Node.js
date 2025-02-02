import express from "express";
import fs from "fs";

const app=express();
app.set("view engine",'ejs');
// app.use(express.static(path.join(__dirname, 'public')));
const port=3000;
const data = fs.readFileSync('posts.json', 'utf8');
// const data = fs.readFileSync('posts.json', 'utf8');
const posts_data=JSON.parse(data);



app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/index.html',(req,res)=>{
    res.render("index",posts_data);
})

app.get('/create.html',(req,res)=>{
    res.render('create');
})
app.get('/post.html',(req,res)=>{
    res.render('post');
})
app.get('/edit.html',(req,res)=>{
    res.render('edit');
})
app.get('/script.js',(req,res)=>{
    res.render('script.js');
})
app.get('/style.css',(req,res)=>{
    res.render('style.css');
})
app.listen(port,()=>{
    console.log("Server is working on port ",port);
})