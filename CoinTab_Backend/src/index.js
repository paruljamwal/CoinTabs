const express = require("express");
const cors = require("cors");
const app=express();
require("dotenv").config();
const connect=require('./config/db');


app.use(cors());
app.use(express.json()); //for post

const PORT = process.env.PORT 

// user controller.....
const userController=require("./Controller/user.controller");


//MiddleWare.....
app.use("/user",userController);





app.listen(PORT, async () => {
    try {
    let a=  await connect();
  //  a.db.insert({"name":"p"}) 
  let db = a.Mongoose
  console.log(db)
    console.log(`Listening on port http://localhost:${PORT}`);
    } catch (error) {
      console.log(error);
    }
  });
  