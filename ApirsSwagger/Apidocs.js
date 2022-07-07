const express = require('express');
const app = express();
const swagger = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const apidocs = require('./apidocs.json');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use('/api-Rumahsakit', swaggerUi.serve, swaggerUi.setup(apidocs));


app.listen(4000, () => {
    console.log('Server started at port 3000');
    }
);