const port = 4000;
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// database connection with mongoDB
mongoose.connect("mongodb+srv://sauk1346:MVC7eY70l5g1Vo5J@cluster0.lhgod.mongodb.net/project07")

// API

app.get("/", (req,res) => {
    res.send("Express App is Running")
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on port " + port)
    }
    else {
        console.log("Error: " + error)
    }
})