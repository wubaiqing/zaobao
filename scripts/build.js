const fs = require("fs");
const path = require("path");

function readFileList(year, moon) {
  const fileList = [];
  const dirPath = path.resolve(`./docs/${year}/${moon}/`);
  const isDir = fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }

  const files = fs.readdirSync(dirPath);
  files.forEach((item) => {
    const currentFile = item.slice(0, 2);
    fileList.push([
      `/${year}/${moon}/${currentFile}`,
      `${year}年${moon}月${currentFile}日`,
    ]);
  });
  return fileList.reverse();
}

module.exports = readFileList;
