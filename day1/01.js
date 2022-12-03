const fs = require("fs");

const input = fs.readFileSync("./01.txt").toString();
const elves = input.split("\n\n").map((s) => s.trim());
const totals = elves.map((elf) => {
  return elf
    .trim()
    .split("\n")
    .reduce((acc, line) => {
      return acc + Number(line.trim());
    }, 0);
});
totals.sort((a, b) => b - a);
const part1 = totals[0];
console.log(part1);
const part2 = totals[0] + totals[1] + totals[2];
console.log(part2);

// function getMost1(lines) {
//   let curr = 0;
//   let best = 0;
//   for (const line of lines) {
//     if (line !== "") {
//       curr += Number(line);
//       continue;
//     }
//     best = Math.max(best, curr);
//     curr = 0;
//   }
//   return best;
// }

// console.log(getMost1(lines));

// function getMost3(lines) {
//   let curr = 0;
//   let top = 0;
//   let middle = 0;
//   let third = 0;
//   for (const line of lines) {
//     if (line !== "") {
//       curr += Number(line);
//       continue;
//     }
//     if (curr > top) {
//       third = middle;
//       middle = top;
//       top = curr;
//     } else if (curr > middle) {
//       third = middle;
//       middle = curr;
//     } else if (curr > third) {
//       third = curr;
//     }
//     curr = 0;
//   }
//   return third + middle + top;
// }

// console.log(getMost3(lines));
