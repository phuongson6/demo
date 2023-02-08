$(document).ready(function () {
    var no = 1;

    $("#add_user").click(function () {
        // alert("add user");
        let fullname = $('[name="fullname"]').val();
        let address = $('[name="address"]').val();
        let age = $('[name="age"]').val();
        let email = $('[name="email"]').val();
        let phone_number = $('[name="phonenumber"]').val();
        no++;
        $("#dataList").append("<tr>" +
            "<td>No</td>" +
            "<td>" + fullname + "</td>" +
            "<td> " + address + "</td" > +
            "<td> " + age + "</td>" +
            "<td> " + email + "</td" > +
            "<td> " + phonenumber + "</td>" +
            "</tr>");
    });
});