/*Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.  */
// RACCOLTA DATI
const userEmail = prompt(`Immetti la tua email`);
const listEmail = [`me@email.it`, `tu@email.it`, `io@email.it`, `lei@email.it`];
const isValidEmail = userEmail.includes(`@`) && userEmail.includes(`.`);
let emailOk = false;
if (!isValidEmail) {
  alert(`Per favore immetti una email valida`);
}
for (let i = 0; i < listEmail.length; i++)
  if (userEmail === listEmail[i]) {
    emailOk = true;
  }
alert(emailOk ? `email ok` : `email NON va bene`);

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */
const userNumber = Math.round(Math.random() * 5) + 1;
alert(`il numero che ti è capitato è ${userNumber}`);

const userPc = Math.round(Math.random() * 5) + 1;
alert(`invece al PC è capitato ${userPc}`);
if (userNumber > userPc) {
  alert(`Hai vinto`);
} else if (userNumber < userPc) {
  alert(`Hai perso`);
} else {
  alert(`Hai pareggiato`);
}
