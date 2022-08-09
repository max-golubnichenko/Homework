const humburger = 'humburger';
const cheeseburger = 'cheeseburger';
const priceHumburger = 10;
const priceCheeseburger = 15;
let finalPrice = 0;
let finalBulka = '';

let chooseBurger = prompt('hamburger or cheeseburger?');

if (chooseBurger !== null && chooseBurger !== ``) {
    chooseBurger = chooseBurger.replaceAll(` `,``).toLowerCase();
    if (chooseBurger === `humburger`) {
        finalBulka = humburger;
        finalPrice = priceHumburger;
    } else if (chooseBurger === `cheeseburger`) {
        let doubleCheese = confirm(`Would you like to add double cheese?`);
        if (doubleCheese) {
            finalBulka = cheeseburger;
            finalPrice = priceCheeseburger + 5;
        } else {
            finalBulka = cheeseburger;
            finalPrice = priceCheeseburger;
        }
    } else {
        finalBulka = humburger;
        finalPrice = priceHumburger;
    }
} else {
    finalBulka = humburger;
    finalPrice = priceHumburger;
}

const smallSize = 'small';
const middleSize = 'middle';
const bigSize = 'big';
const smallPrice = 10;
const middlePrice = 15;
const bigPrice = 20;
let finalSize = '';

let potato = confirm('Would you like potato?');

if (potato) {
    let chooseSize = prompt('Choose potato size: small/middle/big');
    if (chooseSize !== null && chooseSize !== ``) {
        chooseSize = chooseSize.replaceAll(` `,``).toLowerCase();
        if (chooseSize === 'small') {
            finalSize = smallSize;
            finalPrice += smallPrice;
        } else if (chooseSize === 'middle') {
            finalSize = middleSize;
            finalPrice += middlePrice;
        } else if (chooseSize === 'big') {
            finalSize = bigSize;
            finalPrice += bigPrice;
        } else {
            finalSize = smallSize;
            finalPrice += smallPrice;
        }
    } else {
        finalSize = smallSize;
        finalPrice += smallPrice;
    }
}


const ketchup = 'ketchup';
const mayonnaise = 'mayonnaise';
const ketchupPrice = 2;
const mayonnaisePrice = 3;
let finalSauce = '';

let sauce = confirm('Would you like sauce?');

if (sauce) {
    let chooseSauce = prompt('Choose sauce: ketchup/mayonnaise');
    if (chooseSauce !== null && chooseSauce !== ``) {
        chooseSauce = chooseSauce.replaceAll(` `,``).toLowerCase();
        if (chooseSauce === 'ketchup') {
            finalSauce = ketchup;
            finalPrice += ketchupPrice;
        } else if (chooseSauce === 'mayonnaise') {
            finalSauce = mayonnaise;
            finalPrice += mayonnaisePrice;
        } else {
            finalSauce = ketchup;
            finalPrice += ketchupPrice;
        }
    } else {
        finalSauce = ketchup;
        finalPrice += ketchupPrice;
    }
}

document.write(`<h2>Your order:</h2>
    <ul>`);

if (chooseBurger === 'humburger') {
    document.write(`<li>Bulka 🍔: ${finalBulka}</li>`)
} else if (chooseBurger === 'cheeseburger') {
    document.write(`<li>Bulka 🍔: ${finalBulka}</li>`)
} else {
    document.write(`<li>Bulka 🍔: ${finalBulka}</li>`)
}

if (potato) {
    document.write(`<li>Potato 🍟: ${finalSize}</li>`)
}

if (sauce) {
    document.write(`<li>Sauce 🧂: ${finalSauce}</li>`)
}

document.write(`</ul>`);

document.write(`<p>Price: ${finalPrice}$</p>`);