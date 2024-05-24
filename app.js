const express = require('express');
const app = express();
app.use(express.static('public'));
const port = process.env.port || 3000;
const post_cotroller = require('./controllers/posts.js')



app.get('/', (req, res) => {
    console.log('got a request woho!');
    res.send('<h1>Benvenuto nel mio blog</h1>');
});

app.get('/posts', post_cotroller.index);

app.listen(port, () => {
    console.log('Server running on port ' + port);
});