function register(){
    let users = [];
    let user ={};

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("confirmpass").value;
    if (fullname === "" && email === "" && pass === "" && confpass ===""){
        alert("Input Should Not be empty!")
    }else{
        if (pass === confpass) {
            user.email = email;
            user.fullname = fullname;
            user.password = pass;
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            location.href = "login.html";
        }else {
            document.getElementById("errorField").innerHTML = "The passwords do no match!";
            setTimeout(function () {
                document.getElementById("errorField").innerText="";
            }, 4000);
        }
    }

}
let storedUsers = JSON.parse(localStorage.getItem("users"));

//location href --- to redirect pages
