const axios = require('axios');

axios.get('http://localhost:3000/posts').then(res => {
    console.log(res);
})