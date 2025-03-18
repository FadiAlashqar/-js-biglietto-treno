let km = parseInt(prompt("inserisci km da percorrere"));
let age = parseInt(prompt("inserisci l'età"));
let price = km * 0.21;
let finalPrice;
let message;

if (age <= 18) {
    finalPrice = price - (price * 20 / 100);
    message = `hai diritto ad uno sconto del 20%. Il prezzo del biglietto è di: ${finalPrice.toFixed(2)}`
    
}
else if (age >= 65) {
    finalPrice = price - (price * 40 / 100);
    message = `hai diritto ad uno sconto del 40%. Il prezzo del biglietto è di: ${finalPrice.toFixed(2)}`
}
else{
    finalPrice = price;
}
console.log(message)