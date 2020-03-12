define(['jquery','coolmet'],function ($,sw) {
    var allMethods = {};

    allMethods.showAllert = function showAllert(value) {
        alert("boom");
        $("body").html(value);
    };
    allMethods.logConsole = function logConsole(value) {
        console.log(value);
    };
    allMethods.useCoolFeature = function useCool(){
        sw.giveFive("Cool met triggered");
    };
    allMethods.hello = "HelloWorld";
    return allMethods;
});

