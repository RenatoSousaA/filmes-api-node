function getAllMovies() {
    const token = sessionStorage.getItem('token');
    $.ajax({
        type: 'GET',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/movies`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function getMovie(id) {
    const token = sessionStorage.getItem('token');
    $.ajax({
        type: 'GET',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/movies/${id}`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function postMovie() {
    const token = sessionStorage.getItem('token');
    const movie = {
        title: $("#titulo").val(),
        description: $("#descricao").val(),
        rating: $("#notaInput").val()
    };
    $.ajax({
        type: 'POST',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/movies`,
        data: movie,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function updateMovie(id) {
    const token = sessionStorage.getItem('token');
    const movie = {
        title: $("#titulo").val(),
        description: $("#descricao").val(),
        rating: $("#notaInput").val()
    };
    $.ajax({
        type: 'PUT',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/movies/${id}`,
        data: movie,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function deleteMovie(id) {
    const token = sessionStorage.getItem('token');
    $.ajax({
        type: 'DELETE',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/movies/${id}`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}