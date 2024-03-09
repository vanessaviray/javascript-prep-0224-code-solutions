const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(languages);

const firstElement = languages[0];
console.log(`${'the first element of the array is '}${firstElement}`); // 'Terminator'

const thirdElement = languages[3];
console.log(`${'the 3rd element of the array is '}${thirdElement}`); // 'javascript'

let length = languages.length;
console.log(`${'the length of the array is '}${length}`); // 6

let lastElement = languages[length - 1];
console.log(`${'the last element of the array is '}${lastElement}`);
