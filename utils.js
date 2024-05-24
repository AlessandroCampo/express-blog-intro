const path = require('path');
const fs = require('fs');



const readFile = (fileName, extension) => {
    const filePath = path.join(__dirname, fileName + '.' + extension);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (extension == 'json') return JSON.parse(fileContent);
    return fileContent
};

const getPath = (fileName) => {
    return path.join(__dirname, fileName)
}




module.exports = {
    readFile,
    getPath
}
