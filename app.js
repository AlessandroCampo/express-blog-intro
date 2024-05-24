const express = require('express');
const app = express();
const port = process.env.port || 3000;



app.get('/', () => {
    console.log('got a request woho!')
})

app.listen(port, () => {
    console.log('Server running on port ' + port);
});