// let name = prompt("What is your name?");
// let age = prompt("What is your age");
// let text = `Hello ${name}. Your age is ${age}`;
//  prompt(text);
//


// let input = +prompt("please enter some figure");
// if(input>0){
//     alert("the figure is possitive");
// } else {
//     alert("the figure is negative");
// }



// Find the max and min in array
// let arr = [34,-23,11,1,8,29,4,6,-3];
//
// let min = arr[0];
// let max = arr[0];
//
// for (let i=0; i<arr.length; i++){
//     if (min > arr[i+1]){
//         min =arr[i+1]
//     }else if(max<arr[i+1]){
//         max =arr[i+1];
//     }
// }
// console.log(max);
// console.log(min);

// let arr = [34,-23,11,1,8,29,4,6,-3];
// for (let i=0; i<arr.length; i++){
//     if (arr[i]%3===0){
//         alert("кратне 3ці "+arr[i]);
//     } else{
//         alert(" не кратне 3ці "+arr[i])
//     }
// }
// let temp = arr[0];
// arr[0] = arr[5];
// arr[5] = temp;
//
// console.log(arr);


// let chambers = [["Oleg","Ihor","Eugeniy","Orest"],["Lili","Mila","Igor"],["Pasha","Nick","Katya"]];
// console.log(chambers);
//
// for(let i =0; i<chambers.length;i++){
//     for(let j=0; j<chambers[i].length;j++){
//        if(chambers[i][j] ==="Katya"){
//            console.log("We found her in "+(j+1)+" room!");
//        }
//     }
// }




// let cars = [{mark:"Skoda", volume:3.5, color:"white"},
//     {mark:"BMW", volume:4.5, color:"white"},
//     {mark:"Audi", volume:6, color:"white"},
//     {mark:"Renault", volume:9, color:"white"}];
// console.log(cars);
// let max =cars[0].volume;
// let mark;
// for(let i =0;i<cars.length;i++ ){
//    if(((i+1)<cars.length) &&  max<cars[i+1].volume){
//        max=cars[i+1].volume;
//        mark =cars[i+1].mark;
//    }
// }
// alert(mark+ "has the biggest volume");


// let arr = [5,0,6,6,2,3,0,5,2,1,0,5,3,0,3,3];
// let newarr = [];
// for (let i=0; i<arr.length;i++) {
//     if(arr[i]!==0){
//         newarr.push(arr[i]);
//     }
// }
// console.log(newarr);

//
// let myarr = [[2,3,5,4],
//              [1,1,3,9],
//              [2,4,3,9],
//              [2,6,4,8]];
// let count =0;
//
// for(let i =0; i<myarr.length;i++){
//     for(let j =0; j<myarr[i].length;j++){
//        if(i===j) {
//            if(myarr[i][j]%2===0){
//                count++;
//            }
//        }
//     }
// }
//
// console.log(count);
//
// let myarr = [[2,3,5,4],
//              [1,1,3,9],
//              [2,4,3,9],
//              [2,6,4,8]];
//
// for (let i=0;i<myarr.length;i++){
//     for (let j=0;j<myarr[i].length;j++){
//         if(i===j) {
//             myarr[i][j] =1;
//         }
//         if (i<j){
//             myarr[i][j] =0;
//         }
//         if(j<i){
//             myarr[i][j] =2;
//         }
//     }
// }
//
// console.log(myarr);

// let xiaomiusers = [];
// let kabinets = [[{name:"Oleg",phone:"xiaomi"},
//                 {name:"Igor",phone:"samsung"},
//                 {name:"Ivan",phone:"iphone"}],
//
//                 [{name:"Orest",phone:"xiaomi"},
//                  {name:"Liuda",phone:"meizu"},
//                  {name:"Olga",phone:"xiaomi"}],
//
//                 [{name:"Roma",phone:"xiaomi"}],
//
//                 [{name:"Lesya",phone:"xiaomi"},
//                  {name:"Nick",phone:"samsung"},
//                  {name:"Josh",phone:"xiaomi"}]];
// for (let i=0;i<kabinets.length;i++) {
//     for (let j =0; j<kabinets[i].length; j++) {
//         if(kabinets[i][j].phone ==="xiaomi"){
//             xiaomiusers.push(kabinets[i][j]);
//         }
//     }
//  }
// console.log(xiaomiusers);

// function max(a,b) {
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }
// function min(a,b){
//     if(a>b){
//         return b;
//     }else{
//         return a;
//     }
// }
//
// function task(a,b,c,d) {
//     let min1 = min(a,b);
//     let min2= min(c,d);
//      return max(min1,min2);
// }
//
// let result = task(1,2,3,4);
// console.log(result);
//
//
//

// function area(a,b,c){
//     if(a===b){
//         isosceles(c,a)
//     }else if(a===c){
//         isosceles(b,a)
//     } else if(c===b){
//         isosceles(a,b)
//     }else{
//         Geron(a,b,c);
//     }
//
// }
// function isosceles(b,a) {
//    let S = (b/2)*Math.sqrt((a+(b/2))*(a-(b/2)));
//     console.log(S);
//    return S;
// }
// function Geron(a,b,c) {
//     let P = a+b+c;
//     let p = P/2;
//     let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
//     console.log(S);
//     return S;
// }
//
// area(6,8,4);
let array = [];
document.body.addEventListener("keydown", function (event) {
    array.push(event.key);
    console.log(array);

});






















