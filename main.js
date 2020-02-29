
class Sunsign {
    constructor(name, callback){
        this.sunName = name;
        this.callBack = callback;
    }
    getData(){
       this.callBack(this.sunName);
    }
}
function getHoroscope (target){
    let url = "http://sandipbgt.com/theastrologer/api/horoscope/"+target+"/today/";

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let myResponse = JSON.parse(this.responseText);
            console.dir(myResponse);
            let sunName = document.getElementById("sName");
            sunName.innerText = myResponse.sunsign;
            let Horoscope = document.getElementById("descript");
            Horoscope.innerText = myResponse.horoscope;
            showSign();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}
let taurus = new Sunsign("taurus",getHoroscope);
let info = taurus.getData();

function showSign() {
    let elem = document.getElementById("signDescription");
    elem.style.display = "block";
    let elem2 = document.getElementById("signWrap");
    elem2.style.display = "none";

}

function hideSign() {
    let elem = document.getElementById("signDescription");
    elem.style.display = "none";
    let elem2 = document.getElementById("signWrap");
    elem2.style.display = "block";

}





















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

