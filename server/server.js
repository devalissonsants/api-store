const express = require('express');
const app = express();
app.use('/', require('./route/api'));

(async() => {
    const database = require('./infra/sequelizeDB');
    const Client = require('./model/client');

    try {
        const result = await database.sync();
        console.log('successful => create tables');
    } catch (error) {
        console.log(error);
    }
})();


app.listen(3000);
console.log('successful => server start on port 3000');