function logIn(){


    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;


    let retrievedUsers = localStorage.getItem("users");
    retrievedUsers = JSON.parse(retrievedUsers);
    for (let i =0; i< retrievedUsers.length; i++){
        let us = retrievedUsers[i];
        if(us.fullname ===fullname && us.email === email && us.password ===pass){
            location.href = "content.html";
        }
        else {
            document.getElementById("wrongInfo").innerHTML = "Input is incorrect!"
            setTimeout(function () {
                document.getElementById("wrongInfo").innerText="";
            }, 4000);
        }
    }
}


//location href --- to redirect pages
