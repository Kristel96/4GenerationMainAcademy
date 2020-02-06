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

