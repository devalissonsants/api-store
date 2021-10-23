const express = require('express');
const app = express();

app.use('/', require('./route/api'));

app.listen(3000);