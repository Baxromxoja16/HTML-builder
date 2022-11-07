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

var answer = "";

// Project-dist folder created
fs.mkdir(distFolder, () => {
  console.log("folder created");
});

// Compare styles
CompareFunc(stylesFolder);

// Created index.html
fs.createWriteStream(path.join(distFolder, "index.html"), "utf-8");

// Read template
async function readFileTem() {
  const components = await fsPromises.readdir(componentsFolder, {
    withFileTypes: true,
  });
  let componentList = {};

  for (const component of components) {
    const componentFilePath = path.join(componentsFolder, component.name);
    const componentTemplateName = `{{${path.basename(
      component.name,
      ".html"
    )}}}`;
    const componentMarkup = await fsPromises.readFile(
      componentFilePath,
      "utf-8"
    );

    componentList = {
      ...componentList,
      ...{
        [componentTemplateName]: componentMarkup,
      },
    };
  }

  let templateHtml = await fsPromises.readFile(templateFile, "utf-8");
  templateHtml = templateHtml.replace(
    /{{\w+}}/gi,
    (template) => componentList[template]
  );
  await fsPromises.writeFile(distHtmlFile, templateHtml);
}
readFileTem();

// Write function
function writeFunc(folderName, fileName) {
  const writeCss = fs.createWriteStream(
    path.join(folderName, fileName),
    "utf-8"
  );

  writeCss.write(answer);
}

// Compare function
function CompareFunc(FolderPath) {
  fs.readdir(FolderPath, (err, files) => {
    files.forEach((elem) => {
      const readStream = new fs.ReadStream(
        path.join(FolderPath, elem),
        "utf-8"
      );

      readStream.on("readable", () => {
        var data = readStream.read();

        if (data != null) {
          pushToAnswer(data);
        }
      });
    });
  });
}

function pushToAnswer(data) {
  answer += data;
  // Created style.css file
  writeFunc(distFolder, "style.css");
}

// ===== Copy assets
fs.mkdir(distAssetsFolder, { recursive: true }, (err) =>
  console.log("Directory created successfully!")
);
fs.readdir(assetsFolder, (err, folders) => {
  folders.forEach((element) => {
    if (!path.extname(element)) {
      fs.readdir(path.join(assetsFolder, element), (err, files) => {
        files.forEach((x) => {

          var srcFile = path.join(assetsFolder, element, x);
          var destFile = path.join(distAssetsFolder, element, x);

          fs.copyFile(srcFile, destFile, (err) => {
            if(err){
                console.log(err);
            }
          });
        });
      });
      mkdirFunc(element);
    }
  });
});

// Create dir in dist assets
function mkdirFunc(param) {
  fs.mkdir(path.join(distAssetsFolder, param), { recursive: true }, (err) =>
    console.log("Directory created successfully in dist assets!")
  );
}
