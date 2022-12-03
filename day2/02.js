// A (rock) - Y (paper)
// B (paper) - Z (scissors)
// C (scissors) - X (rock)

// rock - 1pt
// paper - 2pt
// scissors - 3pt

// loss - 0pt
// draw - 3pt
// win - 6pt

// total at end of round = my choice + outcome
// sum of all eor totals

const fs = require("fs");

const input = fs.readFileSync("./02.txt").toString();
const rounds = input.split("\n").map((s) => s.trim());

const outcomes = {
  ["A X"]: 1 + 3,
  ["A Y"]: 2 + 6,
  ["A Z"]: 3 + 0,
  ["B X"]: 1 + 0,
  ["B Y"]: 2 + 3,
  ["B Z"]: 3 + 6,
  ["C X"]: 1 + 6,
  ["C Y"]: 2 + 0,
  ["C Z"]: 3 + 3,
};

console.log(
  rounds
    .map((round) => {
      return outcomes[round];
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0)
);

const outcomes2 = {
  ["A X"]: 3 + 0,
  ["A Y"]: 1 + 3,
  ["A Z"]: 2 + 6,
  ["B X"]: 1 + 0,
  ["B Y"]: 2 + 3,
  ["B Z"]: 3 + 6,
  ["C X"]: 2 + 0,
  ["C Y"]: 3 + 3,
  ["C Z"]: 1 + 6,
};

console.log(
  rounds
    .map((round) => {
      return outcomes2[round];
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0)
);
