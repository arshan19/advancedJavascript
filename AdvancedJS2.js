//CURRYING IN JS 
//using bind function
//which make copy of a function and pass it on in next.
let multiply = function (x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this, 2); // here we fix one number which is x here and
multiplyByTwo(5); // passing the value y here to get result

let multiplyByThree = multiply.bind(this , 3); // same as above for 3 
multiplyByThree(5);

let multiplyFix = multiply.bind(this, 4,5);//here x and y both are fix as well 
multiplyFix(); // no need to pass the argument 

//using closures function method 

let multiply = function(x){  
    return function(y){ // here y is enclosed inside x and its lexical environment
        console.log(x*y);// i.e., x is fixed
    }
}
let multiplyByTwo = multiply(2); // here is fixed with value of 2 
multiplyByTwo(5);

let multiplyByThree = multiply(3);
multiplyByThree(5);