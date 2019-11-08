const createToken = require('../utils/createToken');

const AuthModel = require('../models/Auth');
const authModel = new AuthModel;

class Auth {
    static login(req, res) {
        authModel.login(req)
            .then(users => {
                if (users.docs.length === 0) {
                    return res.status(401).send({
                        message: 'Unauthorized'
                    });
                }
                const [{
                    id
                }] = users.docs;
                res.json({
                    token: createToken({
                        id
                    })
                });
            })
            .catch(err => {
                if (err.status == 404) {
                    res.status(404).send('Not Found');
                } else if (err.status == 500) {
                    res.status(500).send('Internal server error');
                }                
            });
    }
}

module.exports = Auth;