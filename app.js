const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const router=require('./routes/blogRoutes');
// const Blog=require('./models/blog');
const app=express();
//access mongoDB database
// const dbURI='mongodb+srv://node_ex1:12345@first.psbjdca.mongodb.net/node_tuts?retryWrites=true&w=majority'
const dbURI='mongodb+srv://node_ex1:12345@first.psbjdca.mongodb.net/node_tuts?retryWrites=true&w=majority'
// mongoose.connect(dbURI);
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>{
         console.log("connect to db");
        app.listen(3000);
    })
    .catch((err)=>{console.log(err)});
app.set('view engine','ejs'); //important
//app.set('views','oldviews/views');//if the folder's name is myview  it is project2

//middleware and static
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

// //mongoose and mongo sandbox routes  check the function of mongoDB and mongoose
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title:'new blog 2',
//         snippet:'new about blog 2',
//         body:'new detail blog 2'
//     })
//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
    
// })

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })

// })
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('62979b39a7a91f04d5a8fab6')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })


app.use((req,res,next)=>{
    console.log("new request made");
    console.log("host",req.hostname);
    console.log("path",req.path);
    next();
})

// app.get('/',(req,res)=>{
//     const blogs = [
//         { title: "food",
//         snippet:"meat milk water " },
//         { title: "fruit",
//         snippet:"apple pear peach " },
//         { title: "vegitable",
//         snippet:"cabbit tomoto potato " },
//     ]
//     // res.send("<p>hei</p>");
//     res.render('index',{title:'home',blogs})
// })
app.get('/',(req,res)=>{
    
    res.redirect('/all-blogs')
})

//app.use('/all-blogs',router);  change the blogRouters.js file delete relative all-blogs
app.use(router);


// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .sort({createdAt:-1})  //newest to oldest it is optional
//         .then((result)=>{
//             res.render('index',{title:'All-blogs',blogs:result})
//         })
// })
// app.post('/all-blogs',(req,res)=>{
//     const blog=new Blog(req.body);   //need app.use(express.urlencoded({extended:true})) converting form-data to JSON
//     blog.save()
//         .then(()=>{
//             res.redirect('/all-blogs')
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

// app.get('/all-blogs/:id',(req,res)=>{
//     const id=req.params.id;
//     console.log(id);
//     Blog.findById(id)    
//         .then((result)=>{
//             res.render('details',{title:'Single detail',blog:result})
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })
// app.delete('/all-blogs/:id',(req,res)=>{
//     const id=req.params.id;
//     Blog.findByIdAndDelete(id)    //find the id match item and delete it
//         .then(()=>{
//             res.json({redirect:'/all-blogs'})   //server send back date to browser.
//         })
// })




app.get('/about',(req,res)=>{
    // res.send("<p>hei</p>");
    res.render('about',{title:'about'});
})
// app.get('/newBlog',(req,res)=>{
//     // res.send("<p>hei</p>");
//     res.render('create',{title:'create'});
// })
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})
