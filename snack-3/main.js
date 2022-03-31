/* 
Snack3
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

//Lista dei nomi e cognomi degli invitati
const nameList = ['Simone', 'Benedetta', 'Valeria', 'Salvatore', 'Cloe', 'Nicolas',
 'Alessandro', 'Nicole', 'Sofia', 'Arianna'];
const surnameList = ['Vecchi', 'Rossi', 'Beneventi', 'Magnani', 'Valia', 'Sharma',
 'Magno', 'Borgese', 'Negri', 'Guerriero'];

//Falsa lista degli invitati
const falseList = [];

for (let i = 0; i < 10; i++ ){
    //generatori di numeri casuali
    const first_randomNum = Math.ceil(Math.random() * 10);
    const second_randomNum = Math.ceil(Math.random() * 10);
    //generazione dei falsi invitati
    const firstName = nameList[first_randomNum];
    const secondName = surnameList[second_randomNum];
    const fullName = firstName + ' ' + secondName;

    falseList.push(fullName);
}

console.log(falseList);



