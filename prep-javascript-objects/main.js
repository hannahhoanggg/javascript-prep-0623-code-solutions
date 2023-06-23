const person = { firstName: 'Hannah', lastName: 'Hoang', hobby: 'Dancing' };
console.log(person);

const fullName =
  "The person's name is " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'unemployed';
console.log("The person's current job is: " + person.job + '.');

person['previousJob'] = 'Behavior Interventionist';
console.log("The person's previous job is: " + person['previousJob'] + '.');

console.log('The complete person object: ', person);
