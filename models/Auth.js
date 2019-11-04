const BaseModel = require('./BaseModel');

class Auth extends BaseModel {

    constructor() {
        super();
    }

    login(req) {
        return this.db
            .collection('users')
            .where('email', '==', req.body.email)
            .where('password', '==', req.body.password)
            .get();
    }
}

module.exports = Auth;