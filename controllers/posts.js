const utils = require('../utils.js');
const dbFileName = 'postsDb'

const index = (req, res) => {
    res.format({
        "html": () => {
            const htmlContent = utils.readFile('posts', 'html');
            // const htmlPath = utils.getPath('index.html');
            return res.type("html").send(htmlContent);
            // return res.type("json").send(utils.readFile(dbFileName, 'json'));
        },
        "json": () => {
            return res.type("json").send(utils.readFile(dbFileName, 'json'));
        }
    })
}

module.exports = {
    index
}