// const myModule = require("./myModule");

// console.log(myModule.anything);
// console.log(myModule.inc());

const {inc, dec, getCount} = require("./myModule");
inc();
inc();
dec();
getCount();

console.log(`the count is ${getCount()}`);
