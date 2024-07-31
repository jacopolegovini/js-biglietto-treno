console.log('OK')

/* 
1. Collegarsi al DOM e recuperare gli elementi
2. Dichiarare le variabili
3. Raccogliere i dati
    - Richiesta numero chilometri
    - Richiesta età passeggero
4. Controllo dati
    - Controllare età
5. Elaborazione dati
    - Prezzo al chilometro per chilometri dichiarati
    - Riduzione in base all'età
6. Produzione output
*/

// 1. Collegarsi al DOM e recuperare gli elementi
const totalPrice = document.getElementById('price');
console.log (totalPrice);

// 2. Dichiarare le variabili
const pricePerKM = 0.21;
const youngDiscount = 0.21 - (0.21 * 20 / 100);
const seniorDiscount = 0.21 - (0.21 * 40 / 100);
console.log (seniorDiscount);