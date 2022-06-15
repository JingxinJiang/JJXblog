const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const router=require('./routes/blogRoutes');

const app=express();
//access mongoDB database

const dbURI='mongodb+srv://node_ex1:12345@first.psbjdca.mongodb.net/node_tuts?retryWrites=true&w=majority'

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>{
         console.log("connect to db");
        app.listen(3000);
    })
    .catch((err)=>{console.log(err)});
app.set('view engine','ejs'); //important  connect to views

//middleware and static
app.use(morgan('dev'));
app.use(express.static('public'));//connect with css and image
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    console.log("new request made");
    console.log("host",req.hostname);
    console.log("path",req.path);
    next();
})

app.get('/',(req,res)=>{
    
    res.redirect('/all-blogs')
})

app.use(router);

app.get('/about',(req,res)=>{
    // res.send("<p>hei</p>");
    res.render('about',{title:'about'});
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})
