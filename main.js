function register(){
    let users = [];
    let user ={};

    let email = document.getElementById("email");
    let fullneme = document.getElementById("fullname");
    let pass = document.getElementById("password");
    let confpass = document.getElementById("confirmpass");
    if (pass === confpass) {
        user.email = email;
        user.fullname = fullneme;
        user.password = pass;
        users.push(user);
    }

}
