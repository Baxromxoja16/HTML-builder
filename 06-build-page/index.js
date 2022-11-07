const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

const distFolder = path.join(__dirname, "project-dist");
const distHtmlFile = path.join(__dirname, "project-dist", "index.html");
var stylesFolder = path.join(__dirname, "styles");
const assetsFolder = path.join(__dirname, "assets");
const distAssetsFolder = path.join(distFolder, "assets");
const componentsFolder = path.join(__dirname, "components");
const templateFile = path.join(__dirname, "template.html");

fs.mkdir(distFolder,()=>{
    console.log("folder created");
});

// Create dir in dist assets
function mkdirFunc(param) {
  fs.mkdir(path.join(distAssetsFolder, param), { recursive: true }, (err) =>
    console.log("Directory created successfully in dist assets!")
  );
}
