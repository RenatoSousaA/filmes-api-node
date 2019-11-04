const MoviesModel = require('../models/Movies');
const movieModel = new MoviesModel

class Movies {

    static addMovie(req, res) {
        const movie = {
            'title': req.params.title,
            'description': req.params.description,
            'rating': req.params.rating
        };
        movieModel.addMovie(movie)
            .then(response => {
                console.log(response);
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static getMovie(req, res) {
        const id = req.params.id;
        movieModel.getMovie(id)
            .then(movie => {
                console.log(movie);
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static getAllMovies(req, res) {
        movieModel.getAllMovies()
            .then(movies => {
                console.log(movies);
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static updateMovie(req, res) {
        const id = req.params.id;
        const movie = {
            'title': req.params.title,
            'description': req.params.description,
            'rating': req.params.rating
        };
        movieModel.updateMovie(id, movie)
            .then(response => {
                console.log(response);
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static deleteMovie(req, res) {
        const id = req.params.id;
        movieModel.deleteMovie(id)
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

module.exports = Movies;