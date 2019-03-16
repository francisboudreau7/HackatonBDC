"use strict"

const express = require('express');
const router = express.Router();

router.get('/new', function (req, res) {
    //TODO Fetch questions and feed it to view
    let questions = req.app.locals.data.questions["presale"]["firstContact"];
    //console.log(questions);

    res.setHeader('Content-Type', 'text/html');
    res.render('newSurvey', { data: questions });
});

router.get('/completed', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('completed');
});

router.post('/new', function (req, res) {
    console.log(req.body);
    req.app.locals.data.surveys.push(req.body);

    res.setHeader('Content-Type', 'text/html');
    res.redirect('/surveys/completed');
});

module.exports = router