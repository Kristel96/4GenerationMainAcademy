


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
    // https://reqres.in/api/users
function sendData(){

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 201) {
              let a =  JSON.parse(this.responseText);
                console.dir(a);
            }
        };
        xhttp.open("POST", "https://reqres.in/api/users", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("fname=Henry&lname=Ford");


}

