const utils = require('../utils.js');
const dbFileName = 'postsDb'

const index = (req, res) => {
    res.format({
        "html": () => {
            //momentary
            return res.type("json").send(utils.readJson(dbFileName));
        },
        "json": () => {
            return res.type("json").send(utils.readJson(dbFileName));
        }
    })
}

module.exports = {
    index
}