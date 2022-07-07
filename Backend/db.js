//database
let dotenv = require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.DBLINK, { useNewUrlParser: true },() => {
    console.log('connected to mongodb')});
