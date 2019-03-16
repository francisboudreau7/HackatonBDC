"use strict";

// Server constants
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = 8080;

// Bootleg database global variable
app.locals.data = {
    surveys: [],
    questions: {
        "presale":{
          "firstContact":[
            {id: 0, qText:"Avez-vous obtenu l'information que vous cherchiez?", answers:["Oui","Non"]},
            {id: 1, qText:"Que préférez-vous à propos de notre concessionnaire?", answers:["Service","Prix","Proximité"]},
            {id: 2, qText:"Q'est-ce qui détermine votre choix d'un concessionnaire?", answers:["Service","Prix","Proximité"]}
          ],
          "webOrigin":[
            { id: 3, qText:"Notre site-web est-il facile d'utilisation?",answers:["Oui","Non"]},
            { id: 4, qText:"Avez-vous réussi à obtenir un rendez-vous?",answers:["Oui","Non"]}
          ],
        },
        "sale":{
          "completed":[
            { id: 5, qText:"Êtes-vous satisfaits du prix payé pour votre véhicule?",answers:["Oui","Non"]},
            { id: 6, qText:"Votre vendeur vous a-t-il bien conseillé?",answers:["Oui","Non"]}
        ],
          "aborted":[
            { id: 7, qText:"Prévoyez-vous acheter votre véhicule d'un autre fabriquant?",answers:["Oui","Non"]},
            { id: 8, qText:"Votre vendeur vous a-t-il offert un bon prix?",answers:["Oui","Non"]}
        ],
        },
        "postsale":{
          "vehiculeAppreciation":[
            { id: 9, qText:"Aimez-vous la couleur de votre véhicule?",answers:["Oui","Non"]},
            { id: 10, qText:"Votre véhicule est-il assez spacieux?",answers:["Oui","Non"]}
          ],
          "futureLeads":[
            { id: 11, qText:"Quelle voiture acheteriez-vous comme prochain véhicule?",answers:["Sedan","Vus","Sport","Minifourgonnette"]},
            { id: 12, qText:"Ferez-vous l'entretien de votre véhicule chez nous?",answers:["Certainement", "Probablement", "Probablement pas","Certainement pas"]}],
        }
      }
};

// Server routes
const indexRoute = require("./routes/index");
const surveysRoute = require("./routes/surveys");
const analyticsRoute = require("./routes/analytics");

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