const person = {
  firstName: 'Vanessa',
  lastName: 'Viray',
  hobby: 'Illustration',
};
console.log(person);

const fullName = `${person.firstName}${' '}${person.lastName}`;
console.log("The person's name is:", fullName);

person.job = 'Business Owner';
console.log("This person's current job is:", person.job);

person['previousJob'] = 'Student';
console.log("This person's previous job is:", person['previousJob']);

console.log('The complete person object:', person);
