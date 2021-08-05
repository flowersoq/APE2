$(function() {
    $("form input").attr("disabled", true);
    $("form select").attr("disabled", true);
    $(".btnSubmit").attr("disabled", true);

    $(".btnNew").click(function() {
        $(".locked").attr("disabled", false);
        $(".btnSubmit").attr("disabled", false);
        $(".btnNew").attr("disabled", true);
    });

    $(".btnSubmit").click(function() {
        $("input").val("");
        $(".btnSubmit").val('儲存');
        $(".btnSubmit ").attr("disabled ", true);
        $(".btnNew ").attr("disabled ", false);
        $("input ").attr("disabled ", true);
    });
});