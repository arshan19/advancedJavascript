// // Write a function and  use 'call' to call the function
// var player = {liverpool :2 };

// var premierLeague = function(a,b,c){
//     return this.liverpool + a + b + c;
// }
// console.log(premierLeague.call(player,10)); 

// //Write a program using apply

// var extra = [2,4,6];
// console.log(premierLeague.apply(player,extra));

// //Write a program using bind

// var substitude = premierLeague.bind(player);
// console.log(substitude(5,10,15));

// // Create a new object called Student with age 20 ,write a function which prints the 
// // age of the student from the student object.
// // Dont pass in args. Read from 'this' and use BIND

var obj = {age :20};
var output = function(){
    return this.age;
}
var bound = output.bind(obj);
console.log(bound());