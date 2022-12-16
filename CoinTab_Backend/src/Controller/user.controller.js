const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();
const User = require("../Model/user.model");
var MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
let dbs;

const URL = process.env.MONGODB_URL;

// User Crud...
router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      `https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb`
    );
    const data = await response.json();
    MongoClient.connect(URL, (err, db) => {
      if (err) {
        throw err;
      }
      dbs = db.db("CoinTab");
      dbs.collection("users").insertMany(data?.results[0]);
      // console.log(dbs)
    });
    // console.log(data.results);
    // console.log(db);
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    // console.log(limit);
    let skip = (page - 1) * limit;
    const user = await User.find().skip(skip).limit(limit).lean().exec();
    const totalPages = Math.ceil((await User.find().countDocuments()) / limit);
    // console.log(totalPages,"t")

    return res.status(200).send({ user, totalPages });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// single User...
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send({ user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// delete User...
router.delete("/delete", async (req, res) => {
  try {
    const user = await User.deleteMany().lean().exec();
    return res.status(201).send({ user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
