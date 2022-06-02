const express=require('express');
const router=express.Router();
const controller=require('../controller/blogController')
const Blog=require('../models/blog');
router.get('/all-blogs',controller.blog_index

)
router.get('/newBlog',controller.blog_details

)
router.post('/all-blogs',controller.blog_create_get

)

router.get('/all-blogs/:id',controller.blog_create_post

)
router.delete('/all-blogs/:id',controller.blog_delete

)
module.exports=router;