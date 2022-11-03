// Importing moduls
const fs = require("fs");

var file = ["csv", "js", "css", "txt"];

const dirName = __dirname + "\\secret-folder\\"

fs.readdir(dirName, { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
    console.log(file.name);
  });
});
