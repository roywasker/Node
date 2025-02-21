const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/factoryDB')
    .then(() => console.log('connected to DB'))
    .catch(console.log);
};

module.exports = connectDB;
