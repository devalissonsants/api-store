const express = require('express');
const router = express.Router();
const postsService = require('../service/orderService');

router.get('/order-of-service', async function(req, res) {
    res.json('teste');
});

router.get('/order-of-service/:id', async function(req, res) {

});

router.post('/order-of-service', async function(req, res) {

});

router.put('/order-of-service/:id', async function(req, res) {

});

router.delete('/order-of-service/:id', async function(req, res) {

});

module.exports = router;