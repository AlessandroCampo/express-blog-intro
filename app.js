const express = require('express');
const app = express();
app.use(express.static('public'));
const port = process.env.port || 3000;
const post_cotroller = require('./controllers/posts.js')
const utils = require('./utils.js')



app.get('/', (req, res) => {
    const htmlContent = utils.readFile('index', 'html');
    res.send(htmlContent);
});

app.get('/posts', post_cotroller.index);

app.listen(port, () => {
    console.log('Server running on port ' + port);
});