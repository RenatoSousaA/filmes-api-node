function getAllMovies() {
    const token = sessionStorage.getItem('token');
    $.ajax({
        method: 'GET',
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
        method: 'GET',
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
        method: 'POST',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/movies`,
        data: JSON.stringify(movie),
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
        method: 'PUT',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/movies/${id}`,
        data: JSON.stringify(movie),
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function deleteMovie(id) {
    const token = sessionStorage.getItem('token');
    $.ajax({
        method: 'DELETE',
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