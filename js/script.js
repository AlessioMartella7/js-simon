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
// aggiungiamo un evento al form
    // raccogliamo i numeri inseriti dall'utente
    // confrontiamo i numeri dell'utente con quelli generati random per vedere quali e quanti ne ha indovinati
    // stampare un messagio con il risultato


//# FUNCTIONS   

// funzione per generare una cella che ospitera i numeri random
const createCell = (content ='') => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(content)
    return cell ;
}


// funzione per creare cinque numeri random 

const createRandomNumber = (max = 100) => {
    const numbers =[];
    while(numbers.length < 5) {
    const number = Math.floor(Math.random() * (max-1) ) +1;
    //controlliamo che i numeri inseriti nell'array siano tutti diversi
    if(!numbers.includes(number)) numbers.push(number);}
    return numbers;
}

//# Preparation phase

//recupero dal DOM gli elementi
const cpuField = document.getElementById('cpu-generated')
const timerField = document.getElementById('timer');
const numbersCells = document.getElementById('random-nmb-field');
const playButton = document.getElementById('play-btn');
const form = document.getElementById('user-numbers');
const num1Field= document.getElementById('nmb-1');
const num2Field= document.getElementById('nmb-2');
const num3Field = document.getElementById('nmb-3');
const num4Field = document.getElementById('nmb-4');
const num5Field   = document.getElementById('nmb-5');
const checkButton = document.getElementById('check-btn');
const resultField = document.getElementById('result');

//varibili globali
let cell;
let seconds = 5;
let userNumbers = [];
let checkedNumbers = [];
const randomNumber = createRandomNumber();

//# Elaboration phase

// creiamo un bottone alla quale aggiungere degli eventi al click:
playButton.addEventListener('click', () => {
  
    // disabilitiamo il pulsante start
    playButton.disabled = true;

    // creiamo i riquadri per ospitare i numeri
    for(let i = 0; i < 5; i++ ){     
        cell = createCell(randomNumber[i]);
        numbersCells.appendChild(cell);
    }
    console.log('randomNumb',randomNumber)
    // rendiamo visibili i numeri generati
    numbersCells.classList.remove('d-none')
    timerField.classList.remove('d-none')


    // creiamo un timer di 30 secondi
    const timer = setInterval(() => {
    timerField.innerText = seconds--;
    if(seconds === 0) {
        clearInterval(timer);
        //nascondiamo i numeri usciti, timer e bottone
        cpuField.classList.add('d-none');
        
        //facciamo apparire il campo imput per l'utente e il bottone check
        form.classList.remove('d-none');
    }
    },1000 );

    // array numeri controllati
   

    // aggiungiamo un evento al form
    form.addEventListener ('submit', event => {
    event.preventDefault();
    checkButton.disabled = true;
    // raccogliamo i numeri inseriti dall'utente
    const num1 = parseInt(num1Field.value);
    const num2 = parseInt(num2Field.value);
    const num3 = parseInt(num3Field.value);
    const num4 = parseInt(num4Field.value);
    const num5 = parseInt(num5Field.value);

    //creiamo un array per ricevere i numeri dell'utente
    userNumbers.push(num1,num2,num3,num4,num5);
    
   
    // confrontiamo i numeri dell'utente con quelli generati random per vedere quali e quanti ne ha indovinati
    for(let i = 0; i < randomNumber.length ; i++) {
        if(userNumbers.includes(randomNumber[i])) {
            checkedNumbers.push(randomNumber[i]);
            
        }
        console.log(checkedNumbers);

    }
    //stampo un messaggio in pagina

    resultField.innerText = `Hai indovinato ${checkedNumbers.length} numeri: ${checkedNumbers}`;
  
})

})


