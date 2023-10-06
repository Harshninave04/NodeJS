const fs = require("fs");

fs.writeFileSync(
  "./blocking.txt",
  "Hello everyone\nHarsh Ninave: +91 9359436297\nSanjay Ninave: +91 9970936025"
);

const result = fs.readFileSync("blocking.txt", "utf-8");
console.log(result);

// Blocking Operation

console.log("___________________Blocking___________________");
console.log("1");
const answer = fs.readFileSync("blocking.txt", "utf-8");
console.log(answer);
console.log("2");
// This is known as blocking operation where operation are waiting for execution.

// Non-Blocking Operation

console.log("______________________Non-Blocking_________________________");
console.log("1");
fs.readFile("text.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log("2");

// In Non-Blocking operation , file system function are not making barrier to execute a further operation
