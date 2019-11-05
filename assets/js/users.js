function getAllUsers() {
    const token = sessionStorage.getItem('token');
    $.ajax({
        type: 'GET',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/users`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function getUser(id) {
    const token = sessionStorage.getItem('token');
    $.ajax({
        type: 'GET',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/users/${id}`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function postUser() {
    const token = sessionStorage.getItem('token');
    const user = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#senha").val()
    };
    $.ajax({
        type: 'POST',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/users`,
        data: user,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function updateUser(id) {
    const token = sessionStorage.getItem('token');
    const user = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#senha").val()
    };
    $.ajax({
        type: 'PUT',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/users/${id}`,
        data: user,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function deleteUser(id) {
    const token = sessionStorage.getItem('token');
    $.ajax({
        type: 'DELETE',
        headers: {
            'x-access-token': token
        },
        url: `https://my-movies-renato.herokuapp.com/users/${id}`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}