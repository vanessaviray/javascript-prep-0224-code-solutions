const number1 = 5;
const number2 = 6;
const product = number1 * number2;
console.log(product);
console.log(typeof product);

const charge = 12;
const payment = 7;
const amountRemaining = charge - payment;
console.log(amountRemaining);
console.log(typeof amountRemaining);

const tests = 9;
const assignments = 10;
const final = 8;
const grade = (tests + assignments + final) / 3;
console.log(grade);
console.log(typeof grade);

const firstName = 'Vanessa';
const lastName = 'Viray';
const fullName = `${firstName}${' '}${lastName}`;
console.log(fullName);
console.log(typeof fullName);

const pH = 6;
const isAcidic = Boolean(pH < 7);
console.log(isAcidic);
console.log(typeof isAcidic);

const numberOfSoldiers = 200;
const isSparta = numberOfSoldiers === 300;
console.log(isSparta);
console.log(typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT';
console.log(nickname);
console.log(typeof nickname);
