const fs = require("fs");
const path = require("path");

const distFolder = path.join(__dirname, "project-dist");
const assetsFolder = path.join(__dirname, "assets");

fs.mkdir(distFolder,()=>{
    console.log("folder created");
});

// fs.readdir(assetsFolder,(err,files)=>{
//     files.forEach(element => {
//         console.log(element);
//     });
// })
