const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.use(function (req, res, next) {
    res.status(404).send("Desculpe, caminho não identificado. Virifique o caminho e tente novamente!")
})

const port = process.env.PORT || 3000;
app.listen(port);