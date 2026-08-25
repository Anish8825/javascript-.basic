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

//Random number generator//
/*
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
};
*/
//-------------------------------------------------------------//

// IF STATEMENTS : if a condition is true, then a block of code will be executed
//                 if not , do somenting else

/*example  
  let age = 2;
  if (age >= 18){
    console.log("You are an adult");
  }
  else{
    console.log("You are a minor");
  }
*/
//for boolean example

/*
let isstudent = false;

if(isstudent){
  console.log("You are a student");
}
else{
  console.log("You are not a student");
}
*/

//------------------------//
//assignment//
//Example: Create a program that asks the user for their age and displays a message indicating whether they are an adult or a minor.//
/*
const myText = document.getElementById("mytext");
const mySubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function () {
    const age = parseInt(myText.value);
    if (age >= 18) {
        resultElement.textContent = "You are an adult.";
    } else {
        resultElement.textContent = "You are a minor.";
    }
};
*/
//-------------------------------------------------------------//

//This is an assignment to check the people who are kids, adults, middle aged & old//
/*

const myText = document.getElementById("mytext");
const mySubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
    let age = myText.value;
    age = Number(age);

    if (age < 0) {
        resultElement.textContent = "Your age can't be below 0";
    }
    else if (age === 0) {
        resultElement.textContent = "You can't enter the website. You are a kid";
    }
    else if (age >= 100) {
        resultElement.textContent = "You are too OLD";
    }
    else if (age >= 18) {
        resultElement.textContent = "You are old enough to enter this website";
    }
    else {
        resultElement.textContent = "You must be 18+ to enter this website";
    }
};

*/

//----------------------------------------------------------------------------------------//