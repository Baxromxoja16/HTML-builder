const fs = require("fs");

var fileName = __dirname + "\\text.txt";

const writeStream = fs.createWriteStream(fileName,"utf-8")

writeStream.write("Hello world")

