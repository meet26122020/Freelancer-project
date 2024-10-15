const express = require('express');
const route = express();
const controller = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');

route.use(authMiddleware); 

route.post('/pay', controller.markPaymentAsPaid);

module.exports = route;
