const mongoose = require('mongoose');
const mongoConnection = require('dotenv').config();
const uri = process.env.MONGO_URI;

const dbconnect = () => {
    mongoose.connect(uri, {
        useUnifiedTopology: true,
        // useFindAndModify: false,
        useNewUrlParser: true,
        // useCreateIndex: true
    });
    mongoose.connection.on('error', err => {
        console.log('connection failed')
    })
    mongoose.connection.on('connected', connected => {
        console.log('connected with database successfully')
    })
}
module.exports = dbconnect;
