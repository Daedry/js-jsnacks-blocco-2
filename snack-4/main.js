/*  
Snack4
Crea un array di numeri interi 
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

//Array di numeri interi
const wholeNum = [23, 44, 57, 77, 43, 22, 4, 8, 20, 41];
let number, sum;
sum = 0;

for(let i = 0; i < wholeNum.length; i++){
    if(i % 2 != 0) {
        console.log(`dispari: ${i} `);
        sum += wholeNum[i]
    }
}

console.log(sum)




