const BaseModel = require('./BaseModel');

class Users extends BaseModel {

    constructor() {
        super();
    }

    addUser(user) {
        return this.db
            .collection('users')
            .set(user);
    }

    getUser(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    getAllUsers() {
        return this.db
            .collection('users')
            .get();
    }

    updateUser(id, user) {
        return this.db
            .collection('users')
            .doc(id)
            .set(user);
    }

    deleteUser(id) {
        return this.db
            .collection('users')
            .doc(id)
            .delete();
    }

}

module.exports = Users;