window.onload = function() {

    // Input your credentials here
    var username = "Id";
    var password = "Pass";

    var usernameField = document.getElementsByName("usr_name")[0];
    var passwordField = document.getElementsByName("usr_password")[0];

    usernameField.value = username;
    passwordField.value = password;

    document.forms["login"].submit();
};