"use strict"

const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('index');
})

let ejs = require('ejs');
let myFileLoader = function (path) {
    return 'myFileLoader: ' + fs.readFileSync(filePath);
};

ejs.fileLoader = myFileLoad;
