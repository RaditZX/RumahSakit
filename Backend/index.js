const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const Db = require('./db');



//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride('_method'));



// Route
require ('./Route/Route')(app);




//listen on port
app.listen(port, () => {
    console.log('listening on port ' + port);
});




