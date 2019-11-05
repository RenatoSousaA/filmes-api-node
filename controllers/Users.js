const UsersModel = require('../models/Users');
const userModel = new UsersModel;

class Users {

    static addUser(req, res) {
        const user = {
            'email': req.body.email,
            'password': req.body.password,
            'name': req.body.name
        };
        userModel.addUser(user)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static getUser(req, res) {
        const id = req.params.id;
        userModel.getUser(id)
            .then(user => {
                res.sendStatus(200);
                res.json(user.data());
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static getAllUsers(req, res) {
        userModel.getAllUsers()
            .then(users => {
                res.sendStatus(200);
                res.json(users.docs.map(user => ({
                    id: user.id,
                    ...user.data()
                })));
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    }

    static updateUser(req, res) {
        const id = req.params.id;
        const user = {
            'email': req.body.email,
            'password': req.body.password,
            'name': req.body.name
        };
        userModel.updateUser(id, user)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static deleteUser(req, res) {
        const id = req.params.id;
        userModel.deleteUser(id)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

}

module.exports = Users;