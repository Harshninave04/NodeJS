/* const myModule = require("./module_function");
console.log("Addition is", myModule.add(34, 34));

console.log("Multiplication is", myModule.mul(10, 24)); */

const { add, mul } = require("./module_function");
console.log("Answer for Addition is", add(234, 23));
console.log("Answer for Multiplication is", mul(123, 32));
