$(document).ready(() => {
    console.log("Hello World");

    $("#submit").on("click", function (event) {
        event.preventDefault();

        function validateForm() {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") isValid = false;
            });
            $(".chosen-select").each(function () {
                if ($(this).val() === "") isValid = false;
            });
            return isValid;
        }
        if (validateForm() == true) {
            const friend = {
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
            console.log(friend);

            var currentURL = window.location.origin;
            $.ajax({
                type: 'POST',
                url: currentURL + "/api/friends",
                data: friend
            }).then(res => {
                $("#container").hide();
                $("#resultDisplay").show();

                $("#matchName").text(res.name);
                $("#matchImg").attr("src", res.photo);

                $("#closeBtn").on("click", () => {
                    $("#container").show();
                    $("#resultDisplay").hide();
                })
            });

        } else {
            alert("Please fill out all fields before submitting!");
        }
        return false;
    });
})

