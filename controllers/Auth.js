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
                res.status(500).send('Internal server error');               
            });
    }
}

module.exports = Auth;