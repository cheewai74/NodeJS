console.log("Hello World")
global.console.log("Hello Earth")

let hello ="Hello Moon from Node.js";
console.log(hello);
let justNode = hello.slice(16)
console.log(justNode)
console.log(`Who let the ${justNode} out?`)

console.log(__dirname);
console.log(__filename);

const path = require("path");
console.log(
    `The file name is ${path.basename(__filename)}`
);

for (let key in global){
    console.log(key);
}