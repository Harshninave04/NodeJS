const fs = require("fs");

// For Writing data :

fs.writeFileSync("./text.txt", "Hello world,Sync hai yee");
// By using above method "writeFileSync" we write data to a .txt file.

fs.writeFile("./text2.txt", "Async hai yee", (err) => {});
// "writeFile" method is an Async type

// For Reading file :

const read = fs.readFileSync("./text.txt", "utf-8");
// This is synchronous and it returns something but async doesn't return anything
console.log(read); // Output: Hello world,Sync hai yee
// fs.readFile() or fs.readFileSync() methods used to read the contents of a file

fs.readFile("./text2.txt", "utf-8", (err, read) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(read);
  }
});

// This is asynchronous and it doesn't return anything i.e. void
// But everytime it expects one callback function called error

// Append File Sync

fs.appendFileSync("./text.txt", " Hey There\n");
fs.cpSync("./text.txt", "./copy.txt"); // This is responsible for copying the content of respective file
fs.rmSync("./copy.txt"); // This is used to delete the particular file

console.log(fs.statSync("./text.txt")); // It shows the stat of the files

// We can do anything with file system (fs).



const os = require("os");
console.log("There are total " + os.cpus().length + " threads");