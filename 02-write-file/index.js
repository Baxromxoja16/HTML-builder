// Import module fs
const fs = require("fs");

// text.txt's path
var fileName = __dirname + "\\text.txt";

const writeStream = fs.createWriteStream(fileName, "utf-8");

// Input text and watch
writeStream.write("Create text");

// Read text
const readStream = fs.createReadStream(fileName, "utf-8");

readStream.on("readable", () => {
  var data = readStream.read();

  if (data != null) {
    console.log(`Created text in ${"text.txt"} file, "${data}" `);
  }
});
