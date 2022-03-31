/* 
SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/
let numero_utente, somma;
somma = 0;

for(let i = 0; i < 5; i++){
    numero_utente = parseInt(prompt('Inserisci un numero'));
    somma += numero_utente;
}
console.log(somma)

let index;
while(index < 5){
    numero_utente = parseInt(prompt('Inserisci un numero'));
    somma += numero_utente;
    index++
}
console.log(somma)
