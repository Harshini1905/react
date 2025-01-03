const express=require('express');  //importing the libraries of express
const app=express();  //creating an instance of express(functionality)
//app.set('view engine','ejs');

app.get('/',(req,res)=>{  
    console.log("hi");
    //res.status(500).send("error occured");
   // res.status(200).send({error:"error occured"});
   //res.json({express:"learning express"});
   res.send("hello world");
   //res.render("index.ejs" ,{text:"Harshini"}); //{textk:"Harshini"} means output would be Hello default
});  
/*
app.get('/user',(req,res)=>{
    res.send("user information");
}   )

app.get("/user/newuser",(req,res)=>{
    res.send("new user added");
}  )

app.listen(3000);
*/

const userRoute=require('./Routes/user');  //importing the user.js file
app.use('/user',userRoute);  //using the user.js file (As here we give /user ,no need to specify it there as /user/newuser in the code not in url u want to mention in url)
app.listen(3000);