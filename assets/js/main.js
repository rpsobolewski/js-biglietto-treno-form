/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo)
 */

/* 
strumenti:
-if/else
-const
-console.log
-prompt
-Number

 */

//chiedere km
/* const lunghezza = Number(prompt('quanti km devi percorrere?')); 
console.log('km da percorrere: '+ lunghezza)  ;
//chiedere eta
const eta = Number(prompt('quanti anni hai?')) ;
console.log('età: '+ eta + ' anni')  ; */
document.querySelector('button').addEventListener('click', function (e) {
    // loggo in console qualcosa per capire se sto pulsante é stato cliccato
   
    // se funge, posso...
   const lunghezza = document.getElementById("lunghezza").value;
   console.log(lunghezza)
   const eta = document.getElementById("eta").value;
   console.log(eta)
   });


/* //calcolare costo tratta
const costoTratta = lunghezza * 0.21;
console.log('prezzo intero: ' + costoTratta);
//calcolare eventuale sconto

if(eta < 18){
    const costoFinale = (costoTratta / 100) * 80;
    const costoArrotondato = costoFinale.toFixed(2);
   console.log('prezzo con sconto: ' + costoArrotondato); 

} else if(eta > 65){
    const costoFinale = (costoTratta / 100) * 60;
    const costoArrotondato = costoFinale.toFixed(2);
   console.log('prezzo con sconto: ' + costoArrotondato); 
}  */

//log prezzo biglietto