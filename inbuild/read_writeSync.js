//const fs = require("fs");
const { readFileSync, writeFileSync } = require("fs");

const readFile = readFileSync("./content/subfolder/text.txt", "utf-8");

writeFileSync(
  "./content/subfolder/xyz.txt",
  "Am from India i study from Sambram"
);

console.log(readFile);

// // destructuring

// const you = {
//   name: "Pinto",
//   age: 24,
//   nationality: "INDIAN",
//   collage: "Sambram",
// };

// const { collage, age, nationality } = you;
// console.log(collage);
// console.log(age);
// console.log(nationality);
// console.log(you.collage);
// console.log(you.age);
// console.log(you.nationality);
