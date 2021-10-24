const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const clientService = require('../service/clientService');
const productService = require('../service/productService');
const orderService = require('../service/orderService');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// restful => client
router.get('/client', async function(req, res) {
    res.send(await clientService.getAllClient());
});
router.get('/client/:id', async function(req, res) {
    res.send(await clientService.getClient(req.params['id']));
});
router.post('/client', async function(req, res) {
    res.send(await clientService.postClient(req.body));
});
router.put('/client/:id', async function(req, res) {
    res.send(await clientService.putClient(req.params['id'], req.body));
});
router.delete('/client/:id', async function(req, res) {
    res.send(await clientService.delClient(req.params['id']));
});

// restful => product
router.get('/product-or-service', async function(req, res) {
    res.send(await productService.getAllProduct());
});
router.get('/product-or-service/:id', async function(req, res) {
    res.send(await productService.getProduct(req.params['id']));
});
router.post('/product-or-service', async function(req, res) {
    res.send(await productService.postProduct(req.body));
});
router.put('/product-or-service/:id', async function(req, res) {
    res.send(await productService.putProduct(req.params['id'], req.body));
});
router.delete('/product-or-service/:id', async function(req, res) {
    res.send(await productService.delProduct(req.params['id']));
});

//restful => order of service
router.get('/order-of-service', async function(req, res) {
    res.send(await orderService.getAllOrder());
});
router.get('/order-of-service/:id', async function(req, res) {
    res.send(await orderService.getOrder(req.params['id']));
});
router.post('/order-of-service', async function(req, res) {
    res.send(await orderService.postOrder(req.body));
});
router.put('/order-of-service/:id', async function(req, res) {
    res.send(await orderService.putOrder(req.params['id'], req.body));
});
router.delete('/order-of-service/:id', async function(req, res) {
    res.send(await orderService.delOrder(req.params['id']));
});

module.exports = router;