const UsersModel = require('../models/Users');
const userModel = new UsersModel;

class Users {

    static addUser(req, res) {
        const user = {
            'email': req.body.email,
            'password': req.body.password,
            'name': req.body.name
        };

        console.log(user);
        userModel.addUser(user)
            .then(response => {
                console.log(response);
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
                console.log(user);
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static getAllUsers(req, res) {
        userModel.getAllUsers()
            .then(users => {
                console.log(users);
                res.sendStatus(200);
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
            .then(response => {
                console.log(response);
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
            .then(response => {
                console.log(response);
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

}

module.exports = Users;