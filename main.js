
class Sunsign {
    constructor(name, callback){
        this.sunName = name;
        this.callBack = callback;
    }
    getData(){
       this.callBack(this.sunName);
    }
}


hideSign();
function getHoroscope (target){
    let url = "http://sandipbgt.com/theastrologer/api/horoscope/"+target+"/today/";

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let info = [];
            let element = {};
            let myResponse = JSON.parse(this.responseText);
            console.dir(myResponse);
            let sunName = document.getElementById("sName");
            sunName.innerText = myResponse.sunsign;
            element.sunSignName =  myResponse.sunsign;
            let Horoscope = document.getElementById("descript");
            Horoscope.innerText = myResponse.horoscope;
            element.horoscope =  myResponse.horoscope;
            info.push(element);
            let infoData = JSON.stringify(info);
            let storageData = localStorage.getItem("sunsign");
            if(storageData){
               let strdata = JSON.parse(storageData);
               strdata.push(element);
               let data = JSON.stringify(strdata);
                localStorage.setItem("sunsign",data);
            }else{
                localStorage.setItem("sunsign",infoData);
            }
            showSign();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}
function clickedSign(sign){
    let sunsign = new Sunsign(sign, getHoroscope);
    sunsign.getData();
}


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

