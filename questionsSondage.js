questions = []
//Banque de questions pour construire le sondage
qBank = [];

qBank.add(applicationCache.locals.data.questions.presale.firstContact[(Math.random()*10%3)]);

// Lead vient du site web
if (lead_source.toLowerCase == "website") {
  //Ajouter les questions webOrigin
  qBank.add(applicationCache.locals.data.questions.presale.webOrigin[(Math.random()*10%2)]);
}
// Il y a eu une vente
if (lead_status.toLowerCase == "Sold") {
  qBank.add(applicationCache.locals.data.questions.sale.completed[(Math.random()*10%2)]);
  qBank.add(applicationCache.locals.data.questions.postsale.vehiculeAppreciation[(Math.random()*10%2)]);
  qBank.add(applicationCache.locals.data.questions.postsale.futureLeads[(Math.random()*10%2)]);
}
//Pas eu de vente
if (lead_status.toLowerCase == "Sleeping") {
  qBank.add(applicationCache.locals.data.questions.sale.aborted[(Math.random()*10%2)]);
}

//Choisir les questions pour le sondage
for (i; i<nbrOfQuestions; i++) {
  qNumber = Math.random()*10%nbrOfQuestions;
  questions.add(qBank[qNumber]);
}