    let mainWrap = document.getElementById("mainWraper");
    let userWrap = document.getElementById("userInfoWrap");
    getAllUsers(1);






function getData(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let myResponse = JSON.parse(this.responseText);
            console.dir(myResponse);
            callback(myResponse.data);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

 function getAllUsers(pageId) {
     mainWrap.innerHTML = "";
     // let elementsArray = document.querySelectorAll(".page");
     // for (let i = 0; i<pagination.length;i++){
     //     pagination[i].addEventListener("click", function () {
     //         console.log("htmlcol");
     //     });
     // }

     // elementsArray.forEach(function(elem) {
     //     elem.addEventListener("click", function() {
     //         console.log("node obj");
     //     });
     // });


    let allUsersURL = "https://reqres.in/api/users?page="+pageId;
     getData(allUsersURL, createUsersList);
 }
 function getUser(id){
    let oneUser = "https://reqres.in/api/users/"+id;
    getData(oneUser, createUserInfo);
 }

function createUsersList(users){
       for (let i =0; i<users.length; i++){
           let elementWraper = document.createElement("div");
           elementWraper.className = "elementWr";


           let nameField = document.createElement("div");
           nameField.innerHTML = users[i].first_name + " " + users[i].last_name;
            let emailField = document.createElement("div");
            emailField.innerHTML = users[i].email;
            let imgField = document.createElement("img");
           imgField.src = users[i].avatar;


           let moreButton = document.createElement("button");
           moreButton.id = users[i].id;
           moreButton.addEventListener("click",function () {
              moreInfo(this);
           });
           moreButton.innerHTML = "More Info";
           moreButton.className = "btn";


           elementWraper.appendChild(imgField);
           elementWraper.appendChild(nameField);
           elementWraper.appendChild(emailField);
           elementWraper.appendChild(moreButton);

           mainWrap.appendChild(elementWraper);

       }

    }
    function moreInfo(event) {
        userWrap.style.display = "block";
        mainWrap.style.display = "none";
        getUser(event.id);

    }
    function createUserInfo(user) {
        let nameField = document.createElement("div");
        nameField.innerHTML = user.first_name + " " + user.last_name;
        let emailField = document.createElement("div");
        emailField.innerHTML = user.email;
        let imgField = document.createElement("img");
        imgField.src = user.avatar;
        let backButton = document.createElement("button");
        backButton.innerHTML = "Go Back";
        backButton.id = "goBack";
        backButton.className = "btn";
        userWrap.innerHTML = "";
        userWrap.appendChild(imgField);
        userWrap.appendChild(nameField);
        userWrap.appendChild(emailField);
        userWrap.appendChild(backButton);

        backButton.addEventListener("click",function () {
            mainWrap.style.display = "block";
            userWrap.style.display = "none";
        })

    }
    let pagination = document.getElementsByClassName("page");
    for (let i = 0; i<pagination.length;i++){
        pagination[i].onclick = function (evt) {
            let clicked = evt.target.innerText;
            if(clicked ==="2"){
               evt.target.className = "page active";
               evt.target.previousElementSibling.className  = "page notActive";
            } else if(clicked ==="1"){
                evt.target.className = "page active";
                evt.target.nextElementSibling.className  = "page notActive";
            }

            getAllUsers(clicked)
        };
    }

