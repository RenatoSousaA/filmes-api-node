$(document).ready(() => {
    $("#valorNota").html($("#notaInput").val());

    $("#notaInput").on('input', () => {
        $("#valorNota").html($("#notaInput").val());
    });

    $(".btn:not(.btn-login)").prop('disabled', true);
});

const url = 'http://localhost:3000';

function loginAPI() {
    if ($("#inputEmail").val() != '' && $("#inputSenha").val() != "") {
        const login = {
            email: $("#inputEmail").val(),
            password: $("#inputSenha").val()
        };
        $.ajax({
            method: 'POST',
            data: JSON.stringify(login),
            url: `${url}/auth`,
            success: response => {
                if (response.token) {
                    sessionStorage.setItem('token', response.token);
                    $(".fa-power-off").removeClass("off");
                    $(".fa-power-off").addClass("on");

                    $(".iconError").hide();
                    $(".mensagemError").hide();
                    $(".fa-power-off").show();
                    $(".mensagemError").html('');

                    $("#inputEmail").prop('disabled', true);
                    $("#inputSenha").prop('disabled', true);

                    getAllMovies();
                    getAllUsers();

                    $(".btn").prop('disabled', false);
                }
            },
            error: err => {
                console.log(err);
                $(".iconError").show();
                $(".mensagemError").show();
                $(".fa-power-off").hide();
                $(".fa-power-off").removeClass("on");
                $(".fa-power-off").addClass("off");
                $(".mensagemError").html(err.responseJSON.message);
            },
            contentType: "application/json"
        });
    } else {
        $(".iconError").show();
        $(".mensagemError").show();
        $(".fa-power-off").hide();
        $(".fa-power-off").removeClass("on");
        $(".fa-power-off").addClass("off");
        $(".mensagemError").html('Preencha e-mail e senha');
    }

}