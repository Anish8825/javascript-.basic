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

//.Checked = property that detrmines the checked ststes of an 
//            HMTL checkbox or radio button element
/*
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

  if (myCheckBox.checked) {
    subResult.textContent = `You are SUBSCRIBED!`;
  }
  else {
    subResult.textContent = `You are NOT SUBSCRIBED!`;
  }
  if(visaBtn.checked) {
    paymentResult.textContent = `you are paying with VISA!`;
  }
  else if(masterCardBtn.checked) {
    paymentResult.textContent = `you are paying with MASTERCARD`;
  }
  else if(payPalBtn.cheked) {
    paymentResult.textContent = `you are paying with PayPal!`;
  }
  else {
    paymentResult.textContent = `you must select a payment method...!`
  }
}
*/


// ---------------------------------------------------------------------//
//TERNARY OPERATOR = A shortcut to if{} and else{} statements
//                   helps to assign variable based on a condition
//                   example: condition ? codeIFTrue : codeIFFalse;


//Examples for terninary operator

//let age = 28;
//let message = age >= 18 ? "you are an adult" : "you are not an adult";
//console.log(message);

//let time = 18;
//let greeting = time < 12 ? "good morning" : "good afternoon";
//console.log(greeting);

//let student = true;
//let message = student ? "you are a student" : "you are not a student"; //THIS IS FOR BOOLEAN //
//console.log(message);

//try this question: if you purchase greater than 100$ you have a 10% discount else no discount//
//ANSWER:
//let purchaseamount = 99;
//let discount = purchaseamount >= 100 ? 10 : 0;
//console.log(`your total is $${purchaseamount - purchaseamount * (discount/100)}`);

//---------------------------------------------------------------------------------------//

//SWITCH = It is used to replace to many else if statements//

//Example : weekdays//
/*
let day = 0;

switch(day){
  case 1:
    console.log("MONDAY!");
    break;
  case 2:
    console.log("TUESDAY!");
    break;
  case 3:
    console.log("WEDNESDAY!");
    break;
  case 4:
    console.log("THURSDAY!");
    break;
  case 5:
    console.log("FRIDAY!");
    break;
  case 6:
    console.log("SATURDAY!");
    break;
  case 7:
    console.log("SUNDAY!");
    break;
  default:
    console.log(`${day} is not a day`);
}
//Enter the day
//It runs through the cases
//Checks cases and gives the output
//The break statement is used to stop after a output case found, else it jumps to next case 
*/
//TRY THIS : Examine a test score if score is 
//high output should be good middle score average low score poor
//ANSWER:
/*let score = 92;
let lettergrade;

switch(true){
  case score >= 90:
    lettergrade = "GOOD!!";
    break;
  case score >= 50:
    lettergrade = "AVERAGE--";
    break;
  case score <= 40:
    lettergrade = "POOR(learn well...)";
    break;
}
console.log(lettergrade);
*/

//--------------------------------------------------------------------//

//STRING METHOD = Allows to manipulate and work with text(string)//
/*
let username = "rammu   ";

console.log(username.charAt(0)); //charAt metod//

console.log(username.indexOf("a")); //indexOf method//

console.log(username.length); //length of the string//

username = username.trim();  //used to clear whitespace//

username = username.toUpperCase(); //used capatalise string// 
console.log(username);

let user = "RAJu";
user = user.toLowerCase(); //used for small letter in string//
console.log(user);

user = user.repeat(3); //Repeats string//
console.log(user);

let rocket = "rakki";
let result = rocket.startsWith("r"); //Checks the start value and says true or false //
console.log(result);

let roc = "rakki";
let resul = roc.endsWith("r"); //Checks the end value and says true or false //
console.log(result);

let ro = "rakki";
let resu = ro.endsWith("r"); //Checks the string contains the value and says true or false //
console.log(result);

let number = "123-876-098";
number = number.replace("-","/");//Used to replace values in the string//
console.log(number);

let num = "12345678";
num = num.padStart(15,1); //Used to add value in the front of the string//
console.log(num);

let no = "123457789999";
no = no.padEnd(20,0);  //Used to enter the value at the end of the string//
console.log(no);
*/

// STRING SLICING//
/*
const fullname = "Anish kumar";

firstname = fullname.slice(0,1);
secondname = fullname.slice(6,7); .//Slice operator is used to slice an operator//
console.log(firstname);
console.log(secondname);
*/

//Example : like this create an slicing program for email 
//          anishmurthi@gamil.com anishmurthi separately and gmail.com separately
/*ANSWER:
const email = "anishmurthi@gmail.com"

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extension);
*/