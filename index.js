// Basic Server Syntax
const { urlencoded } = require('express');
var express= require('express');
const path=require('path');
const { urlToHttpOptions } = require('url');

const logger=require('./middleware/logger');

// Initializing express
var app=express();

// routes handling
// app.get('/',(req,res)=>{
//     res.send("Hello World")
//     console.log("Hello");
// })


// app.use(logger);


// Listening to portt
const PORT=process.env.port||5000;
 app.get('/',(req,res)=>{
// // res.send("<h1>Hello Server</h1>")
res.sendFile(path.join(__dirname,'public','index.html'))
 })
 app.use(express.json());
 app.use(urlencoded({extended:false}))
 app.use('/api/members',require('./apis/members'))
// Static folder using middle ware
 app.use(express.static(path.join(__dirname,'public')))


app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`);

})