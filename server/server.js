const express = require('express');
const app = express();
app.use('/', require('./route/api'));
require('./database/connection');


app.listen(3000);
console.log('successful => server start on port 3000');