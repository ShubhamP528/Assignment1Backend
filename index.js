const express=require('express');
const app= express();
const mongoose=require('mongoose');
// const seedDB=require('./seedDB');

const route=require('./route/product');

mongoose.connect('mongodb://127.0.0.1:27017/Assignment')
.then(()=>{
    console.log("DB is connnected");
})
.catch((e)=>{
    console.log("DB is not connected");
    console.log(e.message);
})


// seedDB();

app.use(route);

app.listen(8080,()=>{
    console.log("server is connected at port number 8080");
})