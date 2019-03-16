"use strict"

const express = require('express');
const router = express.Router();

router.get('/new', function (req, res) {
    //TODO Fetch questions and feed it to view

    let questions = req.app.locals.data.questions
    //console.log(questions);

    // Bootleg randomiser for questions
    let randomQ = [
        questions["presale"]["firstContact"],
        questions["presale"]["webOrigin"],
        questions["sale"]["completed"],
        questions["sale"]["aborted"],
        questions["postsale"]["vehiculeAppreciation"],
        questions["postsale"]["futureLeads"]
    ]

    // SALE ! to put in utility class ?
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randIndex = getRandomInt(0, randomQ.length - 1)

    res.setHeader('Content-Type', 'text/html');
    res.render('newSurvey', { data: randomQ[randIndex] });
});

router.get('/completed', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('completed');
});

router.post('/new', function (req, res) {
    //console.log(req.body);
    req.app.locals.data.surveys.push(req.body);

    res.setHeader('Content-Type', 'text/html');
    res.redirect('/surveys/completed');
});

module.exports = router