const BaseModel = require('./BaseModel');

class Movies extends BaseModel {

    constructor() {
        super();
    }

    addMovie(user) {
        return this.db
            .collection('movies')
            .set(user);
    }

    getMovie(id) {
        return this.db
            .collection('movies')
            .doc(id)
            .get();
    }

    getAllMovies() {
        return this.db
            .collection('movies')
            .get();
    }

    updateMovie(id, user) {
        return this.db
            .collection('movies')
            .doc(id)
            .set(user);
    }

    deleteMovie(id) {
        return this.db
            .collection('movies')
            .doc(id)
            .delete();
    }

}

module.exports = Movies;