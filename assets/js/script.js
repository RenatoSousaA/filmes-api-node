$(document).ready(() => {
    $("#valorNota").html($("#notaInput").val());

    $("#notaInput").on('input', () => {
        $("#valorNota").html($("#notaInput").val());
    });
});