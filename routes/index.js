const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

const users = require('./users');
const movies = require('./movies');
const auth = require('./auth');
const router = express.Router();

router.use('/auth', auth);
router.use('/users', verifyToken, users);
router.use('/movies', verifyToken, movies);

module.exports = router;