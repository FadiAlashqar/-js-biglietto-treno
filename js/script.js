let km = parseInt(prompt("inserisci km da percorrere"));
let age = parseInt(prompt("inserisci l'età"));
let price = km * 0.21;
let finalPrice;

if (age <= 18) {
    finalPrice = price - (price * 20 / 100);
}
else if (age >= 65) {
    finalPrice = price - (price * 40 / 100);
}
else{
    finalPrice = price;
}
console.log(`il prezzo è di ${finalPrice}`)