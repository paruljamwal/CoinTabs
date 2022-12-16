const express = require("express");
const cors = require("cors");
const app=express();
require("dotenv").config();
app.use(express.json()); //for post

const PORT = process.env.PORT 
const connect=require('./config/db');




app.listen(PORT, async () => {
    try {
      await connect();
      console.log(`Listening on port ${PORT}`);
    } catch (error) {
      console.log(error);
    }
  });
  