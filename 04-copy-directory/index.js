const fs = require("fs");

const folderNameCopy = __dirname + "\\file-copy";
const folderName = __dirname + "\\files";

//create folder "file-copy"
fs.mkdir(folderNameCopy, (err) => {
  if (err) return err
  console.log("Directory created successfully!");
});

// View files 
fs.readdir(folderName, (err, files) => {
    
    files.forEach((file) => {
    // Copy files
    fs.copyFile((folderName+`\\${file}`),(folderNameCopy+`\\${file}`),(err)=>{
        if(err) return err

        console.log("Copied successfully");
    })
  });
});
