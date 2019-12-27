$(document).ready(() => {
    console.log("Hello World");

    let userData = [];
    $("#submit").on("click", function (event) {
        event.preventDefault();
        // Create an object for the user"s data
        userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        console.log(userData)
    });



})