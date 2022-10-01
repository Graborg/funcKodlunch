const sendMail = (data) => console.log("mailing", data);
const saveToDb = (data) => console.log("saving", data);

function mailPreferences(arr) {
  let result = [];
  let beerDrinkers = 0;
  let wineDrinkers = 0;

  for (let index = 0; index < arr.length; index++) {
    const person = arr[index];
    if (person.age >= 20) {
      person.drink = "wine";
      result.push(person);
      wineDrinkers += 1;
    } else if (person.age >= 18) {
      person.drink = "beer";
      result.push(person);
      beerDrinkers += 1;
    }
  }
  if (result) {
    console.log(`wineDrinkers ${wineDrinkers / arr.length}%`);
    console.log(`beerDrinkers ${beerDrinkers / arr.length}%`);
    console.log(`excluded ${(arr.length - result.length) / arr.length}%`);
    sendMail(result);
  } else {
    console.log("nothing to send");
  }
}

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
  {
    name: "Andreas",
    age: 22,
    meta: {
      //lots of other info
    },
  },
];

function mailPreferencesFunc(arr) {
  res = arr
    .filter(({ age }) => age > 18)
    .map((e) => {
      if (e.age >= 20) {
        return Object.assign({
          drink: "wine",
          e,
        });
      } else {
        return Object.assign({
          drink: "beer",
          e,
        });
      }
    });
  const statsFor = (drink, persons, total) =>
    `${drink}Drinkers ${
      persons.filter((p) => p.drink === drink).length / total
    }%`;
  if (res) {
    console.log(statsFor("wine", res, arr.length));
    console.log(statsFor("beer", res, arr.length));
    console.log(`excluded ${(arr.length - res.length) / arr.length}%`);
    sendMail(res);
  } else {
    console.log("nothing to send");
  }
}

mailPreferencesFunc(persons);
saveToDb(persons);
