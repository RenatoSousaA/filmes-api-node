const jwt = require('jsonwebtoken');
const {
    secret
} = require('../config/defaut');

module.exports = (data, expiresIn = '12h') =>
    jwt.sign(
        data,
        secret, {
            expiresIn
        }
    );