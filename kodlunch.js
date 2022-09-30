const arr = [
  {
    name: 'Mikael',
    age: 15,
  },
  {
    name: 'Alexander',
    age: 19,
  },
];
let result = [];

for (let index = 0; index < arr.length; index++) {
  const person = arr[index];
  if (person.age >= 18) {
    person.drink = 'beer';
  } else {
    person.drink = 'water';
  }
  result.push(person);
}

console.log(result);
