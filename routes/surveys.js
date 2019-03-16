"use strict"

const express = require('express');
const router = express.Router();

router.get('/new', function (req, res) {
    //TODO Fetch questions and feed it to view
    let data = req.app.locals.data;

    res.setHeader('Content-Type', 'text/html');
    res.render('newSurvey', { data: data });
});

router.get('/completed', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('completed');
});

router.post('/new', function (req, res) {
    req.app.locals.data.surveys.push(req.body);
    console.log(req.app.locals.data);
    res.setHeader('Content-Type', 'text/html');
    res.redirect('/surveys/completed');
});

module.exports = router