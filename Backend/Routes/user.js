const express = require('express');
let router = express.Router();  //here router is used as a variale name


router.get('/',(req,res)=>{
    res.send("user information");
}   )

router.get("/user/newuser",(req,res)=>{
    res.send("new user added");
}  )

router.route('/:id')
      .get((req,res)=>{
        console.log(req.usery);
    res.send("user id is "+req.params.id);
})
        .put((req,res)=>{
        res.send("updated id is "+req.params.id);
    })
        .delete((req,res)=>{
        res.send("deleted id is "+req.params.id);
    })
/*
router.get("/:id/:name", (req, res) => { // passing parameters (can be of any datatype)
    res.send("updated id is " + req.params.id + " and updated name is " + req.params.name);
});

router.put("/:id",(req,res)=>{                       
    res.send("updated id is "+req.params.id);
}  )

router.delete("/:id",(req,res)=>{                       
    res.send("deleted id is "+req.params.id);
}  )
*/
const users=[{name:"Harshini"},{name:"Jai"},{name:"Deva"}];
router.param('id',(req,res,next,id)=>{  //middleware function
    console.log(id)
    req.usery=users[id];
    next();
})

module.exports = router;  //exporting the router to server.js