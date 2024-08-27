/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS 1:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
BONUS 2:
Generiamo gli input da JS, invece di scriverli nel codice
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */

// recuperiamo dal DOM gli elementi di cui abbiamo bisogno
// creiamo un bottone alla quale aggiungere degli eventi al click:
    // creiamo i riquadri per ospitare i numeri
    // generiamo 5 numeri random
    // creiamo un timer di 30 secondi che allo scadere farà:
        //1 sparire i numeri precedentemente generati
        //2 apparire gli input per l'utente dove inserire i numeri
        //3 far sparire il bottone "play"
// creiamo un secondo bottone per controllare il risultato
    // raccogliamo i numeri inseriti dall'utente
    // confrontiamo i numeri dell'utente con quelli generati random per vedere quali e quanti ne ha indovinati
    // stampare un messagio con il risultato


//# FUNCTIONS   

// funzione per generare una cella che ospitera i numeri random
const createCell = content => {
    const cell = document.createElement('div');
    cell.classList = 'cell';
    cell.appendChild(content)
    return cell ;
}

// funzione per creare un numero random tra 1 e 99

const createRandomNumber = (max = 100) => {
    const number = Math.floor(Math.random() * max ) ;
    return number;
}

const randomNumber = createRandomNumber();
console.log('randomNumber', randomNumber);


//# preparation phase

//recupero dal DOM gli elementi
const timerField = document.getElementById('timer');
const numbersCells = document.getElementById('random-nmb-field');
const playButton = document.getElementById('play-btn');
const userNumbersField = document.getElementById('user-numbers');
const num1Field= document.getElementById('nmb-1');
const num2Field= document.getElementById('nmb-2');
const num3Field = document.getElementById('nmb-3');
const num4Field = document.getElementById('nmb-4');
const num5Field   = document.getElementById('nmb-5');
const checkButton = document.getElementById('check-btn');
const resultField = document.getElementById('');


// creiamo un bottone alla quale aggiungere degli eventi al click:
playButton.addEventListener('click', () => {

})
