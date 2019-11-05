function getAllUsers() {
    $.ajax({
        type: 'GET',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlncWc4bnN6aHZjSE1GZG5ubXJNIiwiaWF0IjoxNTcyOTY4ODk4LCJleHAiOjE1NzMwMTIwOTh9.gBtwQO2vzbYEnEklxm1klgeth-o9vrcVoy1JEH4qImQ'
        },
        url: `https://my-movies-renato.herokuapp.com/users`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function getUser(id) {
    $.ajax({
        type: 'GET',
        url: `https://my-movies-renato.herokuapp.com/users/${id}`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function postUser() {
    const user = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#senha").val()
    };

    $.ajax({
        type: 'POST',
        url: `https://my-movies-renato.herokuapp.com/users`,
        data: user,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function updateUser(id) {
    const user = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#senha").val()
    };

    $.ajax({
        type: 'PUT',
        url: `https://my-movies-renato.herokuapp.com/users/${id}`,
        data: user,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}

function deleteUser() {
    $.ajax({
        type: 'DELETE',
        url: `https://my-movies-renato.herokuapp.com/users/${id}`,
        success: function (response) {
            console.log(response);
        },
        contentType: "application/json"
    });
}