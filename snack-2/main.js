/* 
Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

const number = parseInt(prompt('Inserisci un numero'));

let sumEven, addNum;
addNum = 1;

if(number % 2 === 0){
    console.log(`Il numero è pari: ${number}`);
    document.write(`Il numero è pari: ${number}`)

} else if (number % 2 != 0){
    sumEven = number + addNum;
    console.log(`Il numero: ${number} è diventato pari: ${sumEven}`);
    document.write(`Il numero: ${number} è diventato pari: ${sumEven}`)
}



