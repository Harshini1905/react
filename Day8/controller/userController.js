import user from '../model/usermodel.js';  
/*
export const fetch=async(req,res)=>{
    try{
        res.send("Hello world");
    }
    catch(err){
        res.status(500).json({error:"internal server error"});  
    }
}
    */

export const fetch=async(req,res)=>{
    try{
        const userdata=await user.find();
        if(userdata.length==0){
            res.status(404).json({message:"no user found"});
        }
        res.status(200).json(userdata);
    }
    catch(err){
        res.status(500).json({error:"internal server error"});  
    }
}
    
/*
export const fetch = async (req, res) => {
    try {
      const userid = req.params.id;
      const userdata = await user.findById(userid);
      if (!userdata) {
        return res.status(404).json({ message: "No user found" });
      }
      return res.status(200).json({ userdata });
    } catch (err) {
      console.error(err); 
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  */
  
    

export const create=async (req,res)=>{
    try{
        let userdata=new user(req.body);
        const {email}=userdata;
        const userExist=await user.findOne({email});    
        if(userExist){
            res.status(200).json({message:"user already exists"});
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser});
    }
    catch(err){
        res.status(500).json({error:"internal server error"});  
    }
}


export const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({message:"user not found"});
        }
        const updateuser=await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateuser});
    }
    catch(err){
        res.status(500).json({error:"internal server error"});  
    }
}

export const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({message:"user not found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted successfully"});
    }
    catch(err){
        res.status(500).json({error:"internal server error"});  
    }
}