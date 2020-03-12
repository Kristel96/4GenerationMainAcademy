define(['jquery'],function ($) {
var cool = {};
    cool.giveFive = function giveFive(value) {
    prompt(value);
            };
    cool.getElem = function (value){
        let a = document.getElementById(value).innerText;
        return a;
    };
    cool.cycle = function (array) {
        let newArr = [];
        for(let i=0; i<array.length; i++){
           let b =  array[i] +"ing";
           newArr.push(b);
        }
        return newArr;
    };
return cool;
});
