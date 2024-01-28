"use strict";
  process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "local";
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
  });

const express = require("express");
const v1Routes = require("./v1/routes/index");
const dbconnect = require("./common/connection")
const bodyParser = require('body-parser');
const responses = require("./common/responses")

const app = express();

const port = 6000;

app.use(express.json());
app.use(responses());

// 404, Not Found
// app.use((req, res) => res.error(404, "NOT_FOUND"));

app.use("/", express.static(__dirname + "/public"));
app.use("/api/", v1Routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Error handling
app.use((error, req, res, next) => {
  console.error(error);
  next();
  return res.error(400, error.message || error);
});

// Listening & Initializing
app.listen(process.env.PORT || port , async () => {
    console.log(`Environment:`, process.env.NODE_ENV);
    console.log(`Running on:`, process.env.PORT);
    dbconnect();
});