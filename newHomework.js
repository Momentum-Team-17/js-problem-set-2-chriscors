let friends = ["phoebe", "ross", "rachel", "chandler", "joey", "monica"];
let dogs = ["pitbull", "lab", "golden", "poodle", "irish setter", "boxer"];
let sports = ["baseball", "football", "softball", "soccer"];

function shortest(array) {
  let arrayCopy = array.slice();

  return arrayCopy.reduce((current, next) => {
    if (current.length <= next.length) {
      return current;
    } else {
      return next;
    }
  });
}

shortest(friends);
shortest(dogs);
shortest(sports);

function shortestSimple(array) {
  let arrayCopy = array.slice();

  let shortestWord = arrayCopy[0];
  for (let word of arrayCopy) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
for (const iterator of object) {
}
