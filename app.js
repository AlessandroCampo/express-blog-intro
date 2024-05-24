const express = require('express');
const app = express();
const port = process.env.port || 3000;



app.get('/', (req, res) => {
    console.log('got a request woho!');
    res.send('<h1>Benvenuto nel mio blog</h1>');
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});