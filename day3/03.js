const fs = require("fs");

const input = fs.readFileSync("./03.txt").toString();
const rucksacks = input.split("\n").map((s) => s.trim());

function findPriority(char) {
  if (char === char.toLowerCase()) {
    return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
  }
  return char.charCodeAt(0) - "A".charCodeAt(0) + 27;
}

console.log(
  rucksacks
    .map((sack) => {
      let first = sack.substring(0, sack.length / 2);
      let second = sack.substring(sack.length / 2, sack.length);

      for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
          if (first[i] === second[j]) {
            return findPriority(first[i]);
          }
        }
      }
    })
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0)
);

let total = 0;
for (let i = 0; i < rucksacks.length; i += 3) {
  let acc = [...rucksacks[i]];
  for (let j = i + 1; j < i + 3; j++) {
    acc = acc.filter((char) => rucksacks[j].includes(char));
  }
  total += findPriority(acc[0]);
}
console.log(total);
