/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const filtraIniziale = (array, letter) => {
    const result = []
    const letteraDaControllare = letter.toLowerCase()

    for (let i = 0; i < array.length; i++) {
        const parola = array[i];
        const iniziale = parola[0].toLowerCase();

        console.log(i, parola, iniziale);

        if (iniziale === letter) {
            result.push(parola);

        }

        console.log("Stato attuale array", i, result);




    }

    return result;

}




// Invoca la funzione qui e stampa il risultato in console
let inizialiParole = filtraIniziale(names, "a");


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log("Risultato finale", inizialiParole);