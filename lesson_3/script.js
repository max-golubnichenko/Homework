const now = new Date();

const date = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

const captionString = `Food prices for ≠ ${date}.${month}.${year}`.replace(`≠`,`-`);

console.log(captionString);

const apple = `🍎`;
const applePrice = 10;
const appleCount = 3;
const appleSalePercent = 7;

const finalApplePrice = +(applePrice * appleCount) - (((applePrice * appleCount) / 100) * appleSalePercent).toFixed();

console.log(`Final price for ${appleCount} ${apple} = ${finalApplePrice} UAH`);

const orange = `🍊`;
const orangePrice = 12;
const orangeCount = 2;
const orangeSalePercent = 3;

const finalOrangePrice = +(orangePrice * orangeCount) - (((orangePrice * orangeCount) / 100) * orangeSalePercent).toFixed();

console.log(`Final price for ${orangeCount} ${orange} = ${finalOrangePrice} UAH`);

const kiwi = `🥝`;
const kiwiPrice = 15;
const kiwiCount = 10;
const kiwiCountryPercent = 10;

const finalKiwiPrice = +((kiwiPrice + (kiwiPrice * kiwiCountryPercent / 100)) * kiwiCount).toFixed();

console.log(`Final price for ${kiwiCount} ${kiwi} = ${finalKiwiPrice} UAH`);

const priceTotal = finalApplePrice + finalOrangePrice + finalKiwiPrice;

console.log(`Final price for all products = ${priceTotal} UAH`);
