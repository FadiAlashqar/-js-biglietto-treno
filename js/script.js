let km = parseInt(prompt("inserisci km da percorrere"));
let age = parseInt(prompt("inserisci l'età"));
let price = km * 0.21;
let finalPrice;

if (age <= 18) {
    finalPrice = price - (price * 20 / 100);
}


console.log(`il prezzo è di ${finalPrice}`)