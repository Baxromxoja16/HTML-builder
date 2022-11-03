const fs = require("fs");

var fileName = __dirname + "\\text.txt";

const readStream = new fs.ReadStream(fileName, "utf-8");

readStream.on("readable", () => {

  var data = readStream.read();
  
  if (data != null) {
    console.log(data);
  }
});
