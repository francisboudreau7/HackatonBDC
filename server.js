"use strict";

// Server constants
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = 8080;

// Bootleg database global variable
app.locals.data = {
    surveys: []
};

// Server routes
const indexRoute = require("./routes/index");
const surveysRoute = require("./routes/surveys")

// Set ejs as view engine and place assets
app.set("view engine", "ejs");
app.use('/public', express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Connect routes
app.use("/", indexRoute);
app.use("/surveys", surveysRoute)

// Listening on port
app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
    console.log(`http://localhost:${PORT}`);
});