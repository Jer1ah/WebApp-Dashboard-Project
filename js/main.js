

$("#alert img").on("click", function() {
    $("#alert").remove();
    $("#noti").remove();
    $("#bell").css("margin-right", "1em");
});

$("#subme").on("click", function() {
    if ($("textarea").val() == "") {
        alert("Sorry, must enter a message!");
    } else {
        $("#subme").html("Success!");
        $("#subme").css("background-color", "lime");
        $("textarea").val("");
        $("textarea").attr("placeholder", "Message for User"); 
    }
});