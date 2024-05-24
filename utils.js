const path = require('path');
const fs = require('fs');



const readJson = (fileName) => {
    const filePath = path.join(__dirname, fileName + '.json');
    const jsonContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonContent);
};

module.exports = {
    readJson
}
