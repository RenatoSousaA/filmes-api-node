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
                res.status(500).send('Internal server error');
            });
    }

    static getMovie(req, res) {
        const id = req.params.id;
        movieModel.getMovie(id)
            .then(movie => {
                res.json(movie.data());
            })
            .catch(err => {
                res.status(500).send('Internal server error');
            });
    }

    static getAllMovies(req, res) {
        movieModel.getAllMovies()
            .then(movies => {
                res.json(movies.docs.map(movie => ({
                    id: movie.id,
                    ...movie.data()
                })));
            })
            .catch(err => {
                res.status(500).send('Internal server error');
            });
    }

    static updateMovie(req, res) {
        const id = req.params.id;
        const movie = {
            'title': req.body.title,
            'description': req.body.description,
            'rating': req.body.rating
        };
        movieModel.updateMovie(id, movie)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send('Internal server error');
            });
    }

    static deleteMovie(req, res) {
        const id = req.params.id;
        movieModel.deleteMovie(id)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send('Internal server error');
            });
    }
}

module.exports = Movies;