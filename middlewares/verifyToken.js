const jwt = require('jsonwebtoken');
const {
    secret
} = require('../config/defaut');

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        res.status(401).send({
            code: 'not_authorized',
            message: 'Unauthorized'
        });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                err
            });
        }
        next();
    });
};