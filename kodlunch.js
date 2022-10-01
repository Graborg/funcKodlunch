const sendMail = (data) => console.log("mailing", data);
const saveToDb = (data) => console.log("saving", data);

// function mailPreferences(arr) {
//   let result = [];

//   for (let index = 0; index < arr.length; index++) {
//     const person = arr[index];
//     if (person.age >= 18) {
//       person.drink = "beer";
//       result.push(person);
//     } else {
//     }
//   }
//   if (result) {
//     sendMail(result);
//   } else {
//     console.log("nothing to send");
//   }
// }

const persons = [
  {
    name: "Mikael",
    age: 15,
    meta: {
      //lots of other info
    },
  },
  {
    name: "Alexander",
    age: 19,
    meta: {
      //lots of other info
    },
  },
];

function mailPreferencesFunc(arr) {
  res = arr
    .filter(({ age }) => age > 18)
    .map((e) => {
      e.drink = "beer";
      return e;
    });
  if (res) {
    sendMail(res);
  } else {
    console.log("nothing to send");
  }
}

mailPreferencesFunc(persons);
saveToDb(persons);
