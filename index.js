//variable = A container that stores values

// declaration let x ;
// assigning the variable  x = 10;

//let age = 25;
//let price = 20;
//let gpa = 2.5;

// string
//example
//let firstname = "idly";

// boolean
//example
//let online = "false";

//let fullname = "Raju";
//let age = 27;
//let student = true;

//document.getElementById("p1").textContent = `your name is${fullname}`;
//document.getElementById("p2").textContent = `your age is ${age}`;
//document.getElementById("p3").textContent = student;


//-----------------------------------------------------------//

//Arithimetic operator = operands(values, variables, etc)
// example (+,-,*,/) :  11 = x * 5;

//let student = 30;

//student = student + 1;
//student = student - 1;
//student = student * 1;
//student = student / 1;
//student = student ** 1;

//student += 1;
//student -= 2;
//student *= 3;
//student /= 4;
//student **= 5;

/*increment & decrement
   1. student++;
   2. student--;
*/

//console.log(student);

/*operator precedence
  1. parenthisis ()
  2. exponents
  3. multiplication & division & modulo
  4. addition & subtraction
*/
/* Example 
let result = 6 / 2 ** (2+5);
console.log(result);*/

//-------------------------------------------------------------//

//user input//
/*let username;

username = window.prompt("What is your username");

console.log(username);
*/
/*let username;

document.getElementById("mysubmit").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("myuu").textContent = `Hello ${username}`;
}
  */
//------------------------------------------------------------//

/*
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/
//-------------------------------------------------------------//


//const = a variable that can't be changed//
/*
const PI = 3.14159;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("mytext").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
}
*/

//-------------------------------------------------------------//

//Counter program//
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resretbtn");
const increaseBtn = document.getElementById("incresaebtn");
const countLabel = document.getElementById("countlabel");

let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
} 

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}
*/

//-------------------------------------------------------------//

/*math = built-in objects that provides a collection
of properties*/

/*
console.log(Math.PI);
console.log(Math.E)*/
/*
let x = 3;
let y = 2; //assigning values to variables
let z;*/

/*
z = Math.round(x);//round value
z = Math.floor(x);//floor value
z = Math.ceil(x);//ceil value
z = Math.trunc(x);//truncate value
z = Math.pow(x,y);//power value
z = Math.sqrt(x);//square root value   //Math function types with assigned values//
z = Math.log(x);//logarithm value
z = Math.sin(x);//log table value
z = Math.abs(x);//absolute value
z = Math.sign(x);//sign value
z = Math.min(x,y);//minimum value
z = Math.max(x,y);//maximum value


console.log(z);
*/
/*
const min = 50;
const max = 100;

let randomnum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomnum);
*/
//---------------------------------------------------------------//

/*
const myButton = document.getElementById("myButton");

const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

const min = 1;
const max = 6;

myButton.onclick = function () {

    let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;

    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
};
*/

//---------------------------------------------------------------------//