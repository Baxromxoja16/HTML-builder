// Importing moduls
const fs = require("fs");
const path = require("path");

const dirName = __dirname + "\\secret-folder\\";

fs.readdir(dirName, { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
    fs.stat(dirName+file.name, (err, stats) => {
      var name = file.name.split(".")[0] // file name
      var ext = file.name.split(".")[1] // file extension 

      if(stats.size !== 0){
        console.log(`${name} - ${ext} -  ${(stats.size / 1024).toFixed(3)}kb`);
      }
    });
  });
});
