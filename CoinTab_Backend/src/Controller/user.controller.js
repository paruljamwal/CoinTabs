
const express=require('express');
const router=express.Router();
const User=require('../Model/user.model');

// User Crud...
router.get("/", async (req, res) => {
    try {
      const user = await User.find().lean().exec();
      return res.status(200).send({ user: user });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  

  
  // delete User...
  router.delete("/:id", async(req,res)=>{
      try {
          const user=await User.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });

  module.exports=router;
  