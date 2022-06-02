const http=require('http');
const fs=require('fs');
const _=require('lodash');
const server=http.createServer((req,res)=>{
    let num=_.random(0,15);
    console.log(num);
    const greet=_.once(()=>{
        console.log('hello');
    })
    greet();
    greet();
let path='./views/';
switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode=200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode=200;
        break;
    case '/about-us':
        
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end(); //do not have it , not show the correct result
        break;    
    default:
        path+='404.html';
        res.statusCode=404;
        break;
}
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        //res.write(data);
        //res.end();
        res.end(data);
    }
})
});

server.listen('8000','localhost',()=>{
    console.log('listen on local:8000');
})