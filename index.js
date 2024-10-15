const express = require('express');
const userRoute = require('./routes/userRoute');
const projectRoute = require('./routes/projectRoute');
const paymentRoute = require('./routes/paymentRoute');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const ConnectDB = require('./database');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

ConnectDB()

app.use('/api/', userRoute);
app.use('/api/project', projectRoute);
app.use('/api/payment', paymentRoute);

const PORT = 5000;
app.get("/", (req, res) => {
    res.send(`<center><h1>Freelancer Project Management System</h1><br/><h3>Backend Server is Running on Port ${PORT}</h3></center>`)
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
