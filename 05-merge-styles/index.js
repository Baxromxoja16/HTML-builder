const fs = require("fs");
const path = require("path");

const stylePath = path.join(__dirname, "styles");
const bandleStyle = path.join(__dirname, "project-dist", "bundle.css");
var answer = ""

fs.readdir(stylePath, (err, files) => {
  // watch styles folder
  files.forEach((val) => {
    if (path.extname(val) == ".css") {
      var createRead = new fs.ReadStream(path.join(stylePath, val), "utf-8");

      // read style files
      createRead.on("readable", () => {
        var data = createRead.read();

        if (data != null) {
          answer += data
          var createWrite = fs.createWriteStream(bandleStyle);
          createWrite.write(answer);
        }
      });
    }
  });
});
