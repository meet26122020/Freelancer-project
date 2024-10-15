const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://meetkanpariya00:5wxm87UDLXezMlkv@cluster0.0rxxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.log("MongoDB Connection error");
    }
}

module.exports = ConnectDB;
