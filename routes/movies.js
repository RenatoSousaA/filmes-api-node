const express = require('express');
const router = express.Router();

const Movies = require('../controllers/Movies');

router.post('/', Movies.addMovie);
router.get('/:id', Movies.getMovie);
router.get('/', Movies.getAllMovies);
router.put('/:id', Movies.updateMovie);
router.delete('/:id', Movies.deleteMovie);

module.exports = router;