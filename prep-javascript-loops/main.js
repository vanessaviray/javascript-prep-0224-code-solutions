// While Loops #1-2:
function whileLoop1() {
  const numArray = [];
  let index = 0;
  while (index < 10) {
    numArray.push(index);
    index++;
  }
  return numArray;
}

const whileLoop1Result = whileLoop1();
console.log('whileLoop1 output', whileLoop1Result);

// While Loops #3-4:
function whileLoop2() {
  const numArray2 = [];
  let index = 0;
  while (index < 20) {
    numArray2.push(index);
    index += 2;
  }
  return numArray2;
}

const whileLoop2Result = whileLoop2();
console.log('whileLoop2 output', whileLoop2Result);

// For Loops #1-2:
function forLoop1() {
  const numArray3 = [];
  for (let index = 0; index < 10; index++) {
    numArray3.push(index);
  }
  return numArray3;
}

const forLoop1Result = forLoop1();
console.log('forLoop1 output', forLoop1Result);

//For Loops #3-4:
function forLoop2() {
  for (let index = 100; index >= 0; index--) {
    console.log('Time until explosion: ', index);
  }
}

const forCountdownResult = forLoop2();

//For...in Loops #1-4:
const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const propArray = [];
  for (const prop in person) {
    propArray.push(prop);
  }
  return propArray;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const propArray2 = [];
  for (const key in person) {
    propArray2.push(person[key]);
  }
  return propArray2;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
