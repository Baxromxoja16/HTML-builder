const fs = require("fs");
// const path = require("path");

var fileName = __dirname + "\\text.txt";

const readStream = new fs.ReadStream(fileName, { encoding: "utf-8" });

readStream.on("readable", () => {

  var data = readStream.read();
  
  if (data == null) {
    return null;
  } else {
    console.log(data);
  }
});
