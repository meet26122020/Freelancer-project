const Payment = require('../models/paymentModel');

// Mark a payment as paid (creating a new payment entry)
const markPaymentAsPaid = async (req, res) => {
    const { projectId, amount } = req.body;

    // Create a new payment with status 'paid'
    const payment = new Payment({ projectId, amount, status: 'paid' });
    await payment.save();

    res.status(201).json(payment);
};

module.exports = {
    markPaymentAsPaid,
};
