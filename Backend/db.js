//database
require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.DBLINK, { useNewUrlParser: true},(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});


