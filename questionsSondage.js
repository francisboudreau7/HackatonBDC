questions = []
//Banque de questions pour construire le sondage
qBank = [];

qBank.add(app.locals.data.questions.presale.firstContact[(Math.random()*10%3)]);

// Lead vient du site web
if (lead_source.toLowerCase == "website") {
  //Ajouter les questions webOrigin
  qBank.add(app.locals.data.questions.presale.webOrigin[(Math.random()*10%2)]);
}
// Il y a eu une vente
if (lead_status.toLowerCase == "Sold") {
  qBank.add(app.locals.data.questions.sale.completed[(Math.random()*10%2)]);
  qBank.add(app.locals.data.questions.postsale.vehiculeAppreciation[(Math.random()*10%2)]);
  qBank.add(app.locals.data.questions.postsale.futureLeads[(Math.random()*10%2)]);
}
//Pas eu de vente
if (lead_status.toLowerCase == "Sleeping") {
  qBank.add(app.locals.data.questions.sale.aborted[(Math.random()*10%2)]);
}

//Choisir les questions pour le sondage
for (i; i<nbrOfQuestions; i++) {
  qNumber = Math.random()*10%nbrOfQuestions;
  questions.add(qBank[qNumber]);
}
sondages = [
  {"0":"non",1:"Service"},
  {"1":"Prix",3:"Oui"}
];
ansSurvey = {
  0:{"Oui":10,"Non":0},
  1:{"Service":10,"Prix":0, "Proximité":0},
  2:{"Service":10,"Prix":0, "Proximité":0},
  3:{"Oui":0,"Non":0},
  4:{"Oui":0,"Non":0},
  5:{"Oui":10,"Non":0},
  6:{"Oui":0,"Non":0},
  7:{"Oui":10,"Non":0},
  8:{"Oui":0,"Non":0},
  9:{"Oui":0,"Non":0},
  10:{"Oui":0,"Non":0},
  11:{"Sedan":0,"Vus":0,"Sport":0,"Minifourgonnette":0},
  12:{"Certainement":0, "Probablement":0, "Probablement pas":0,"Certainement pas":0},
};
trou = Object.keys(ansSurvey);
for (var i=0; i<trou.length; i++) {
  console.log("trou: "+ Object.keys(trou[i]));
  trouTrou = Object.keys(ansSurvey.trou[i]);
  for (var j=0;j<trouTrou.length;j++) {
    console.log(Object.keys(trouTrou[j]));
  }
}
console.log(Object.keys(ansSurvey));