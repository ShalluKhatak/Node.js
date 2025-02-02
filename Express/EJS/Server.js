import express from "express";
import fs from "fs";
// import index from "../EJS/View/index.ejs";

const app=express();
const port=3000;

app.set("view engine",'ejs');
const data={
    head:"Hello!",
    footer:"The End."
}
app.get("/",(req,res)=>{
    res.render('index',data)
})

app.listen(port,()=>{
    console.log('Server is runing on port :', port);
})