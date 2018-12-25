const fs = require('fs');

function readFileList(year, moon) {
  const fileList = []
  const path = `./docs/${year}/${moon}/`;
  const files = fs.readdirSync(path);
  files.forEach((item, index) => {
    const currentFile = item.slice(0, 2)
    fileList.push([
      `/${year}/${moon}/${currentFile}`,
      `${year}年${moon}月${currentFile}日`
    ]);
  });
  return fileList.reverse();
}

module.exports = readFileList;
