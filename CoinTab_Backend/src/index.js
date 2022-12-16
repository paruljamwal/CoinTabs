const express = require("express");
const cors = require("cors");
const app=express();
require("dotenv").config();
const connect=require('./config/db');


app.use(express.json()); //for post

const PORT = process.env.PORT 

// user controller.....
const userController=require("./Controller/user.controller");


//MiddleWare.....
app.use("/user",userController);





app.listen(PORT, async () => {
    try {
      await connect();
      console.log(`Listening on port http://localhost:${PORT}`);
    } catch (error) {
      console.log(error);
    }
  });
  