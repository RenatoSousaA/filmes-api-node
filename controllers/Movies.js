const MoviesModel = require('../models/Movies');
const movieModel = new MoviesModel;

class Movies {

    static addMovie(req, res) {
        const movie = {
            'title': req.body.title,
            'description': req.body.description,
            'rating': req.body.rating
        };
        movieModel.addMovie(movie)
            .then(() => {
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
                res.sendStatus(200);
                res.json(movie.data());
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }

    static getAllMovies(req, res) {
        movieModel.getAllMovies()
            .then(movies => {
                res.sendStatus(200);
                res.json(movies.docs.map(movie => ({
                    id: movie.id,
                    ...movie.data()
                })));
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
            .then(() => {
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
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            });
    }
}

module.exports = Movies;