// Import module fs
const fs = require("fs");

// text.txt's path
var fileName = __dirname + "\\text.txt";

const writeStream = fs.createWriteStream(fileName, "utf-8");

// Input text and watch 
writeStream.write("Create text");
