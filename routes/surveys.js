"use strict"

const express = require('express');
const router = express.Router();

router.get('/new', function (req, res) {
    //TODO Fetch questions and feed it to view
    let data = req.app.locals.data;

    res.setHeader('Content-Type', 'text/html');
    res.render('newSurvey', { data: data });
})

router.post('/new', function (req, res) {
    req.app.locals.data.surveys.push(req.body);
    console.log(req.app.locals.data);
    res.setHeader('Content-Type', 'text/html');
    res.render('index');
})

module.exports = router