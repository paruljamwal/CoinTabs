
const express=require('express');
const router=express.Router();
const User=require('../Model/user.model');


// async function dataFetch(){
//   let res = await fetch(`https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb`)
//   let data = await res.json();
//   return (data.results);
// }


// User Crud...
router.get("/", async (req, res) => {

    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 10 ;
      let skip = (page-1) * limit ;
      const user = await User.find().skip(skip).limit(limit).lean().exec();
      
      const totalPages = Math.ceil(await User.find().countDocuments()) / limit 
    
      return res.status(200).send({ user , totalPages});
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  

  
  // single User...
  router.get("/:id", async(req,res)=>{
      try {
          const user=await User.findById(req.params.id).lean().exec();
          return res.status(201).send({user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  

  
  // delete User...
  router.delete("/:id", async(req,res)=>{
      try {
          const user=await User.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(201).send({user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });

  module.exports=router;
  