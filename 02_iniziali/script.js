/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function inizialiNomi(array) {
    let lettereiniziali = []

    for (let i = 0; i < array.length; i++) {
        console.log(i,lettereiniziali)

        const primoCarattere = array[i][0];
        console.log(primoCarattere)
        lettereiniziali.push(primoCarattere);
    }

    return lettereiniziali;

}




// Invoca la funzione qui e stampa il risultato in console

let initials = inizialiNomi(names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(initials)