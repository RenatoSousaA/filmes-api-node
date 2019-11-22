let idSelectedMovie = '';

function getAllMovies() {
    const token = sessionStorage.getItem('token');
    $.ajax({
        method: 'GET',
        headers: {
            'x-access-token': token
        },
        url: `${url}/movies`,
        success: response => {
            $('.listMovies').html('');
            response.forEach(element => {
                $('.listMovies').append(`
                    <tr>
                        <td>
                            ${element.title}
                        </td>
                        <td>
                            ${element.description}
                        </td>
                        <td>
                            ${element.rating}
                        </td>
                        <td>
                            <i class="fas fa-edit" onclick="getMovie('${element.id}')"></i>
                        </td>
                    </tr>
                `)
            });
        },
        error: err => {

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
        url: `${url}/movies/${id}`,
        success: response => {
            $("#titulo").val(response.title);
            $("#descricao").val(response.description);
            $("#notaInput").val(response.rating);
            $("#valorNota").html(response.rating);
            idSelectedMovie = id;
        },
        error: err => {

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
        url: `${url}/movies`,
        data: JSON.stringify(movie),
        success: () => {
            getAllMovies();
        },
        error: err => {

        },
        contentType: "application/json"
    });
}

function updateMovie() {
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
        url: `${url}/movies/${idSelectedMovie}`,
        data: JSON.stringify(movie),
        success: () => {
            getAllMovies();
        },
        error: err => {

        },
        contentType: "application/json"
    });
}

function deleteMovie() {
    const token = sessionStorage.getItem('token');
    $.ajax({
        method: 'DELETE',
        headers: {
            'x-access-token': token
        },
        url: `${url}/movies/${idSelectedMovie}`,
        success: () => {
            getAllMovies();
        },
        error: err => {

        },
        contentType: "application/json"
    });
}