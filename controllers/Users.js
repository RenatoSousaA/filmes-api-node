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
                res.status(500).send('Internal server error');
            });
    }

    static getUser(req, res) {
        const id = req.params.id;
        userModel.getUser(id)
            .then(user => {
                res.json(user.data());
            })
            .catch(err => {
                res.status(500).send('Internal server error');
            });
    }

    static getAllUsers(req, res) {
        userModel.getAllUsers()
            .then(users => {
                res.json(users.docs.map(user => ({
                    id: user.id,
                    ...user.data()
                })));
            })
            .catch(err => {
                res.status(500).send('Internal server error');
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
                res.status(500).send('Internal server error');
            });
    }

    static deleteUser(req, res) {
        const id = req.params.id;
        userModel.deleteUser(id)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send('Internal server error');
            });
    }

}

module.exports = Users;