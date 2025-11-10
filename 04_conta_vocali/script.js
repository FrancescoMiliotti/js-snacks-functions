/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const contaVocali = (stringa) => {
    const vocali = [ "a","e","i","o","u"]
    let result = 0

    for (let i = 0; i < stringa.length; i++) {
        const lettera = stringa.charAt(i).toLowerCase();

        if ( vocali.includes(lettera)){
            result++;
        }
        
    }
    return result;
}

    

    console.log(contaVocali(word));

    

        







// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)