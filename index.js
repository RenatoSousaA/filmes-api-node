const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.get('*', res => {
    res.status(404).send('NOT FOUND');
});

const port = process.env.PORT || 3000;
app.listen(port);