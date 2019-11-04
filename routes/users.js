const express = require('express');
const router = express.Router();

const Users = require('../controllers/Users');

router.post('/', Users.addUser);
router.get('/:id', Users.getUser);
router.get('/', Users.getAllUsers);
router.put('/:id', Users.updateUser);
router.delete('/:id', Users.deleteUser);

module.exports = router;