function registry() {
    let faultCount = 0;
    let filmname1 = $("#movies").val();
    if (filmname1 === "Select film") {
        faultCount++;
        $("#div1").html("select one film");
        alert("select one film");
    }
    let watcher = $("#count1").val();
    if ((watcher === "" || watcher === 0)) {
        faultCount++;
        alert("Choose watcher count");
    }

    let epost = $("#email").val();
    if (epost === "") {
        faultCount++;
        alert("Write your email");
    }
    if (faultCount === 0) {
        const info = {
            filmname: filmname1,
            count1: watcher,
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            phone: $("#phone").val(),
            email: epost

        };


        $.post("/save", info, function () {
            getAll();
        });
        cleaner2();
    }
}

function getAll() {
    $.get("/show", function (data) {
        formater(data)
    });
}

function formater(tickets) {

    let out = "<table class='table table-striped mt-4 '  border='1px' style='background-color:#C8E6C9 '><tr'><th>Filmname</th><th>Count</th><th>Firstname</th><th>Lastname</th>" +
        "<th>PhoneNumber</th><th>Epost</th></tr>";

    for (let b of tickets) {
        out += "<tr style='color: brown'><td>" + b.filmname + "</td><td>" + b.count1 + "</td><td>" + b.firstname + "</td><td>" + b.lastname +
            "</td><td>" + b.phone + "</td><td>" + b.email + "</td></tr>"
    }
    out += "</table>"
    $("#write").html(out);
}

function cleaner() {
    $.get("/cleaner", function () {
        getAll();
    });
}

function cleaner2() {

    $("#movies").val("")
    $("#count1").val("")
    $("#firstname").val("")
    $("#lastname").val("")
    $("#phone").val("")
    $("#email").val("")
}