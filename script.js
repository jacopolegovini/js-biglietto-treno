console.log('OK')

/* 
1. Collegarsi al DOM e recuperare gli elementi
2. Dichiarare le variabili
3. Raccogliere i dati
    - Richiesta numero chilometri
    - Richiesta età passeggero
4. Elaborazione dati
    - Prezzo al chilometro per chilometri dichiarati
    - Riduzione in base all'età
5. Produzione output
*/

// 1. Collegarsi al DOM e recuperare gli elementi
let ticketPrice = document.getElementById('price');
console.log (ticketPrice);

// 2. Dichiarare le variabili
let totalPrice;
const pricePerKM = 0.21;
const youngDiscount = pricePerKM - (0.21 * 20 / 100);
const seniorDiscount = pricePerKM - (0.21 * 40 / 100);
console.log (seniorDiscount);

// 3. Raccogliere i dati
const KMNumber = prompt('Quanti chilometri vorresti fare?', '10');
const userAge = prompt('Quanti anni hai?', '28');
console.log ('KMNumber:', KMNumber);
console.log ('userAge:', userAge);

// 4. Elaborazione dati
totalPrice = pricePerKM * KMNumber;
console.log(totalPrice);

if (userAge <= 18) {
    totalPrice = youngDiscount * KMNumber
} else if (userAge >= 65) {
    totalPrice = seniorDiscount * KMNumber
}

totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2)
console.log((Math.round(totalPrice * 100) / 100).toFixed(2));

// 5. Produzione output
ticketPrice.innerText = `Ecco qui il tuo prezzo: ${totalPrice}€`;
