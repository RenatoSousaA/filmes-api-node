$(document).ready(() => {
    $("#valorNota").html($("#notaInput").val());

    $("#notaInput").on('input', () => {
        $("#valorNota").html($("#notaInput").val());
    });
});

function loginAPI() {
    const login = {
        email: $("#inputEmail").val(),
        password: $("#inputSenha").val()
    };
    $.ajax({
        type: 'POST',
        body: login,
        url: `https://my-movies-renato.herokuapp.com/auth`,
        success: function (response) {
            if (response.token) {
                sessionStorage.setItem('token', response.token);
                $(".fa-power-off").removeClass("off");
                $(".fa-power-off").addClass("on");
            }
        },
        contentType: "application/json"
    });
}