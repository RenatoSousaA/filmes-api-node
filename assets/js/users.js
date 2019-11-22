let idSelectedUser = '';

function getAllUsers() {
    const token = sessionStorage.getItem('token');
    $.ajax({
        method: 'GET',
        headers: {
            'x-access-token': token
        },
        url: `${url}/users`,
        success: response => {
            $('.listUsers').html('');
            response.forEach(element => {
                $('.listUsers').append(`
                    <tr>
                        <td>
                            ${element.name}
                        </td>
                        <td>
                            ${element.email}
                        </td>
                        <td>
                            <i class="fas fa-edit" onclick="getUser('${element.id}')"></i>
                        </td>
                    </tr>
                `);
            });
        },
        error: err => {

        },
        contentType: "application/json"
    });
}

function getUser(id) {
    const token = sessionStorage.getItem('token');
    $.ajax({
        method: 'GET',
        headers: {
            'x-access-token': token
        },
        url: `${url}/users/${id}`,
        success: response => {
            $("#nome").val(response.name);
            $("#email").val(response.email);
            $("#senha").val(response.password);
            idSelectedUser = id;
        },
        error: err => {

        },
        contentType: "application/json"
    });
}

function postUser() {
    const token = sessionStorage.getItem('token');
    const user = {
        name: $("#nome").val(),
        email: $("#email").val(),
        password: $("#senha").val()
    };
    $.ajax({
        method: 'POST',
        headers: {
            'x-access-token': token
        },
        url: `${url}/users`,
        data: JSON.stringify(user),
        success: () => {
            getAllUsers();
        },
        error: err => {

        },
        contentType: "application/json"
    });
}

function updateUser() {
    const token = sessionStorage.getItem('token');
    const user = {
        name: $("#nome").val(),
        email: $("#email").val(),
        password: $("#senha").val()
    };
    $.ajax({
        method: 'PUT',
        headers: {
            'x-access-token': token
        },
        url: `${url}/users/${idSelectedUser}`,
        data: JSON.stringify(user),
        success: () => {
            getAllUsers();
        },
        error: err => {

        },
        contentType: "application/json"
    });
}

function deleteUser() {
    const token = sessionStorage.getItem('token');
    $.ajax({
        method: 'DELETE',
        headers: {
            'x-access-token': token
        },
        url: `${url}/users/${idSelectedUser}`,
        success: () => {
            getAllUsers();
        },
        error: err => {

        },
        contentType: "application/json"
    });
}