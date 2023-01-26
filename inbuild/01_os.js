const os = require("os");

const platform = os.platform();
const type = os.type();
const DoM = os.release();
const freeMem = os.freemem();

console.log(platform);
console.log(type);
console.log(DoM);
console.log(freeMem);
