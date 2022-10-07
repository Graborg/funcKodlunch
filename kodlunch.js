const sendMail = (data) => console.log("mailing", data);
const saveToDb = (data) => console.log("saving", data);

function mailPreferences(arr) {
  let result = [];
  let beerDrinkers = 0;
  let wineDrinkers = 0;
  let pulqueDrinkers = 0;
  let buchDrinkers = 0;

  for (let index = 0; index < arr.length; index++) {
    const person = arr[index];
    if (person.age >= 50) {
      person.drink = "pulque";
      result.push(person);
      pulqueDrinkers += 1;
    } else if (person.age >= 40) {
      person.drink = "kombucha";
      result.push(person);
    } else if (person.age >= 20) {
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
    console.log(`wineDrinkers ${toPercentage(wineDrinkers, arr.length)}%`);
    console.log(`beerDrinkers ${toPercentage(beerDrinkers, arr.length)}%`);
    console.log(`pulqueDrinkers ${toPercentage(pulqueDrinkers, arr.length)}%`);
    console.log(`kombuchaDrinkers ${toPercentage(buchDrinkers, arr.length)}%`);
    console.log(
      `excluded ${toPercentage(arr.length - result.length, arr.length)} %`
    );
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
const printEntry = (line) => console.log(line);
const toPercentage = (amount, total) => Math.round((amount * 100) / total);

function mailPreferencesFunc(arr) {
  res = arr
    .filter(({ age }) => age > 18)
    .map((e) => {
      if (e.age >= 50) {
        return Object.assign({
          drink: "pulque",
          e,
        });
      } else if (e.age >= 40) {
        return Object.assign({
          drink: "kombucha",
          e,
        });
      } else if (e.age >= 20) {
        return Object.assign({
          drink: "wine",
          e,
        });
      } else if (e.age >= 18) {
        return Object.assign({
          drink: "beer",
          e,
        });
      }
    });

  const printDrinkerStats = (list, totalNr) =>
    Object.entries(
      list
        .map(({ drink }) => drink)
        .reduce((acc, drink) => {
          if (!acc[drink]) {
            acc[drink] = 1;
          } else {
            acc[drink] = acc[drink] + 1;
          }
          return acc;
        }, {})
    )
      .map(([drink, drinkers]) => [drink, toPercentage(drinkers, totalNr)])
      .map(([drink, percent]) => `${drink}Drinkers ${percent} %`)
      .concat([`excluded ${toPercentage(totalNr - list.length, totalNr)} %`])
      .map(printEntry);

  if (res) {
    printDrinkerStats(res, arr.length);
    sendMail(res);
  } else {
    console.log("nothing to send");
  }
}

mailPreferences(persons);
saveToDb(persons);
