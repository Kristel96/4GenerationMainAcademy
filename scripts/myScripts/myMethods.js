define(['jquery','coolmet'],function ($,sw) {
    var allMethods = {};

    allMethods.showAllert = function showAllert(value) {
        alert("boom");
        // $("body").html(value);
    };
    allMethods.logConsole = function logConsole(value) {
        console.log(value);
    };
    allMethods.useCoolFeature = function useCool(){
        sw.giveFive("Cool met triggered");
    };
    allMethods.getElem = function (value){
      let a = document.getElementById(value).innerText;
      return a;
    };
    allMethods.hello = "HelloWorld";
    allMethods.passStringArray = function(array){
        sw.cycle(array);
        console.dir(sw.cycle(array));
    };

    return allMethods;
});

