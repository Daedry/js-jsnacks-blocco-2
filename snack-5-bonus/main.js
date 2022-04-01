/*  
Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

const stones = ['Azeztulite', 'Moldavite', 'Nummite', 'Apofillite', 'Galena', 'Shungite'];
const numbers = [23,43,55,66];

let i = 0;
while (i < stones.length){

    if(numbers.length < stones.length){
        const randomNum = Math.ceil(Math.random() * 50)
        numbers.push(randomNum);
    }
    
    i++
}
console.log(stones)
console.log(numbers)


