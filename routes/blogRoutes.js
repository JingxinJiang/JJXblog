const express=require('express');
const router=express.Router();
const controller=require('../controller/blogController')
const Blog=require('../models/blog');
router.get('/all-blogs',controller.blog_index
// (req,res)=>{
//     Blog.find()
//     .sort({createdAt:-1})  //newest to oldest it is optional
//         .then((result)=>{
//             res.render('index',{title:'All-blogs',blogs:result})
//         })}
)
router.get('/newBlog',controller.blog_details
// (req,res)=>{
//     // res.send("<p>hei</p>");
//     res.render('create',{title:'create'});
// }
)
router.post('/all-blogs',controller.blog_create_get
//(req,res)=>{   //must ahead /all-blogs/:id
    // const blog=new Blog(req.body);   //need app.use(express.urlencoded({extended:true})) converting form-data to JSON
    // blog.save()
    //     .then(()=>{
    //         res.redirect('/all-blogs')
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })}
)

router.get('/all-blogs/:id',controller.blog_create_post
// (req,res)=>{
//     const id=req.params.id;
//     console.log(id);
//     Blog.findById(id)    
//         .then((result)=>{
//             res.render('details',{title:'Single detail',blog:result})
//         })
//         .catch((err)=>{
//             console.log(err);
//         })}
)
router.delete('/all-blogs/:id',controller.blog_delete
// (req,res)=>{
//     const id=req.params.id;
//     Blog.findByIdAndDelete(id)    //find the id match item and delete it
//         .then(()=>{
//             res.json({redirect:'/all-blogs'})   //server send back date to browser.
//         })
// }
)
module.exports=router;