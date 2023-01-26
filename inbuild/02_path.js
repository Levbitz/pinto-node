const path = require("path");

const filepath = path.join("/content", "subfolder", "text.txt");

console.log(filepath);
const name = path.basename(filepath);
console.log(name);
