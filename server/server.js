const express = require('express');
const app = express();

app.use('/', require('./route/api'));

app.listen(3000);
console.log('successful => server start on port 3000');