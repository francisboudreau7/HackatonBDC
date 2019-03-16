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
            {qText:"Avez-vous obtenu l'information que vous cherchiez?",answers:["Oui","Non"]},
            {qtext:"Que préférez-vous à propos de notre concessionnaire?",answers:["Service","Prix","Proximité"]},
            {qText:"Q'est-ce qui détermine votre choix d'un concessionnaire?",answers:["Service","Prix","Proximité"]}
          ],
          "webOrigin":[
            {qtext:"Notre site-web est-il facile d'utilisation?",answers:["Oui","Non"]},
            {qtext:"Avez-vous réussi à obtenir un rendez-vous?",answers:["Oui","Non"]}
          ],
        },
        "sale":{
          "completed":[
            {qtext:"Êtes-vous satisfaits du prix payé pour votre véhicule?",answers:["Oui","Non"]},
          {qtext:"Votre vendeur vous a-t-il bien conseillé?",answers:["Oui","Non"]}
        ],
          "aborted":[
            {qtext:"Prévoyez-vous acheter votre véhicule d'un autre fabriquant?",answers:["Oui","Non"]},
          {qtext:"Votre vendeur vous a-t-il offert un bon prix?",answers:["Oui","Non"]}
        ],
        },
        "postsale":{
          "vehiculeAppreciation":[
            {qtext:"Aimez-vous la couleur de votre véhicule?",answers:["Oui","Non"]},
            {qtext:"Votre véhicule est-il assez spacieux?",answers:["Oui","Non"]}
          ],
          "futureLeads":[
            {qtext:"Quelle voiture acheteriez-vous comme prochain véhicule?",answers:["Sedan","Vus","Sport","Minifourgonnette"]},
            {qtext:"Ferez-vous l'entretien de votre véhicule chez nous?",answers:["Certainement", "Probablement", "Probablement pas","Certainement pas"]}],
        }
      }
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