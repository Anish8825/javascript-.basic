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

//--------------------------------------------------------------------------//

//METHOD CHANGIN = Calling one method after another
//                 in one continuous line of code

//----------NO METHOD CHANING-----------//
/*
let username = window.prompt("Enter your user name:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();        //METHODS ARE NOT COMBINED TOGETHER//

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;

console.log(username);
*/


//---------METHOD CHANGING------------//
/*
username = window.prompt("Enter your username:");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
                  --------------------------------------------------------------------------
                        //METHODS ARE COMBINED TOGETHER//
console.log(username);
*/

//---------------------------------------------------------------------------//

//LOICAL OPERATOR = Used to combine or manipulate boolean values(TRUE or FALSE)
//OPERATORS ARE --- AND-&& , OR-|| , NOT-!

//AND OPERATOR = If both values are true then the command is executed 
//Example: TEMPERATURE
/*
const temp = -100;

if(temp > 0 && temp <= 30){
  console.log("The weather is GOOD!..");
}
else{
  console.log("The weather is BAD!..");
}
*/

//OR OPERATOR = If any one value in the command is true
//               then the command is executed
/*
const temp = 1;

if(temp <= 0 || temp > 30){
  console.log("The weather is BAD!..");
}
else{
  console.log("The weather is GOOD!..");
}
*/

//NOT OPERATOR = It is an single operator used to invert the truth value in an expression
/*
const issunny = true;

if(!issunny){
  console.log("The weather is CLOUDY!..");
}
else{
  console.log("The weather is SUNNY!..");
}
*/

//-------------------------------------------------------------------------------------//

//STRICT EQUALITY OPERATORS//
// = assignment operator//
// == comparison operator (compares if values are equal)
// === equality operator (compares equal values & datatypes are equal)
// != inequality operator
// !== strict inequality
/*
const PI = 3.14; // here '=' is assignment operator

if(PI == 3.14){  //here '==' is comparison operator
  console.log("that is PI");
}
else{
  console.log("That is NOT PI");
}
*/
/*
const PI = 3.14; // here '=' is assignment operator

if(PI == 3.14){  //here '===' is equality operator
  console.log("that is PI");
}
else{
  console.log("That is NOT PI");
}
*/
/*
const PI = 3.14; // here '=' is assignment operator

if(PI != 3.14){  //here '!=' is inequality operator
  console.log("that is PI");
}
else{
  console.log("That is NOT PI");
}
*/
/*
const PI = 3.14; // here '=' is assignment operator

if(PI !== 3.14){  //here '==' is comparison operator
  console.log("that is PI");
}
else{
  console.log("That is NOT PI");
}
*/

//-------------------------------------------------------------------------------//

//WHILE LOOP//
//While loop = repeat some code WHILE some condition is true
/*
let username = "Anish";

while(username === ""){
  console.log("you didn't enter your name");
}
console.log(`HELLO ${username}`);
*/
//Example:
/*
let username = "";

while(username === "" || username=null){ //in this it executes any one command and console output//
  username = window.prompt('Enter your name:');
}

console.log(`Hello ${username}`);
*/
//do while loop 
// Example:
/*
let username;

do{
  username = window.prompt(`Enter your name:`);
}while(username === "" || username === null)

console.log(`HELLO ${username}`);
*/
//EXAMPLE USING BOTH LOOP 
/*
let loggedIn = true;
let username;
let password;

do{
  username = window.prompt(`Enter your name:`);
  password = window.prompt(`Enter your password:`);

  if(username === "myUsername" && password === "myPassword"){
    loggedIn = true;
    console.log("You have logged in!..");
  }
  else{
    console.log("Invalid credentials! please try again.");
  }
}while(!loggedIn)
*/
/*
let loggedIn = true;
let username;
let password;

while(!loggedIn){
  username = window.prompt(`Enter your name:`);
  password = window.prompt(`Enter your password:`);

  if(username === "myUsername" && password === "myPassword"){
    loggedIn = true;
    console.log("You have logged in!..");
  }
  else{
    console.log("Invalid credentials! please try again.");
  }
}
*/

//---------------------------------------------------------------//

//FOR LOOP
//For loop = repeat some code a LIMITED smount of times
/*
for(let i = 0; i <= 10; i++){
  console.log(i);
}
*/
/*
for(let i = 10; i > 0; i-=2){
  console.log(i);
}
console.log("HAPPY NEW YEAR!!!...");
*/
/*
for(let i = 1; i <= 20; i ++){
  if(i == 13){
    break;
  }
  else{
    console.log(i);
  }
}
*/

//-------------------------------------------------------------------//

//NUMBER GUESSING GAME//
/*
const minNum = 1;   // constant minimum number//
const maxNum = 100;  // constant maximum number//
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
              //in this random number is choosed. maxnum is subtracted by minnum and 1 is added and 
              //random num and calculated num is multiplied and atlast minnum is added//

let attempts = 0;
let guess;
let running = true;

while(running){

  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`); //gives alert prompt on top of the window//
  guess = Number(guess); 
  
  if(isNaN(guess)){
    window.alert("Please enter a validate number"); //alert prompt//
  }
  else if(guess < minNum || guess > maxNum){ 
    window.alert("Please enter a valid number");
  }
  else{
    attempts++;
    if(guess < answer){
      window.alert("TOO LOW! TRY AGAIN!");
    }
    else if(guess > answer){
      window.alert("TOO HIGH! TRY AGAIN!");
    }
    else{
      window.alert(`CORRECT ! THE ANSWER WAS ${answer}. IT TOOK YOU ${attempts} ATTEMPTS`);
      running = false;
    }
  }

}
*/
//--------------------------------------------------------------------------//

//FUNCTION = 
          //A section of reusable code and declare code, use it whenever you want.
          //call the function to execute that code.

//EXAMPLE : calculations
/*
function add(x,y){
  return x + y;
}
function subtract(x,y){
  return x - y;
}
function multiply(x,y){
  return x * y;
}
function divide(x,y){
  return x / y;
}
console.log(add(5,3));
console.log(subtract(5,3));
console.log(multiply(5,3));
console.log(divide(5,3));
*/
//ANOTHER EXAMPLE : odd or even
/*
function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}
console.log(isEven(100));
*//*
function validmail(email){
  if(email.includes("@")){
    return true;
  }
  else{
    return false;
  }
}
console.log(validmail("anish@"));*/

//------------------------------------------------------------------//

//VARIABLE SCOPE = 
                  //Where a variable is recognized and accessible (local or global)
/* //EXAMPLE:
function1();
function function1(){
  let x = 1;
  console.log(x);
}
function function2(){
  let x = 2;
  console.log(x);
}*/

//-------------------------------------------------------------------------------------//
//TEMPERATURE CONVERSION PROGRAM
/*
const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

  if(toFahrenheit.checked){
    temp = Number(textbox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  }
  else if(toCelsius.checked){
    temp = Number(textbox.value);
    temp = (temp - 32) * 5/9;
    result.textContent = temp.toFixed(1) + "°C";
  }
  else{
    result.textContent = "SELECT A UNIT";
  }
}
*/

//-------------------------------------------------------------------------------------------------------//

//ARRAY = A variable that can only hold more than 1 value
/*
let fruits = ["apple", "banana", "orange", "grapes"];

fruits[0] = "mango"; //replacing the value of the array//
console.log(fruits[0]);
console.log(fruits.length); //length of the array//
console.log(fruits[fruits.length - 1]); //last value of the array//
*/

//EXAMPLE :
/*let fruits = ["apple", "banana", "orange", "grapes"];

 for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
 }
*/
/*
let fruits = ["apple", "banana", "orange", "grapes"];  //REVERSE ORDER OF THE ARRAY//

for (let i = fruits.length - 1; i >= 0; i--){
  console.log(fruits[i]);
}
*/
/*
let fruits = ["apple", "banana", "orange", "grapes"];  //SORTING THE ARRAY//
fruits.sort();
for (fruits of fruits){
  console.log(fruits);
}
*/

//---------------------------------------------------------------------------------------------------------//

//SPREAD OPERATOR = ... allows an iterable such as an array or string
//                  to be expanded into separate arguments in function
//                  calls or elements in array literals
/*
let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(min);
console.log(max); 
*/

//EXAMPLE:
/*
let username = "Anish kumar";
let letter = [...username].join("-");

console.log(letter); */
/*
let fruits = ["apple","orange","banana"];
let newfruits = [...fruits];

console.log(newfruits);
*/

//-----------------------------------------------------------------------------------------------------------//

//REST PARAMETERS = (...rest) allows a function work with a variable number 
//                  of arguments by building them into an array
//SPREAD = expands an array into individual elements
//REST = bundles or collects separate elements into an array
/*
function openfridge(...foods){
  console.log(...foods);
}
function getFood(...foods){
  return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "pasta";
const food4 = "sandveg";

//openfridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);

console.log(foods);  */
//EXAMPLE : REST PARAMETERS
/*
function sum(...numbers){
  let result = 0;
  for (let number of numbers){
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`YOUR TOTAL IS $${total}`);  */
/*
function getAverage(...numbers){
  let result = 0;
  for (let number of numbers){
    result += number;
  }
  return result / numbers.length;
}

const total = getAverage(50,70,90,100);

console.log(total);   */
/*
function combinestring(...strings){
  return strings.join(" ");
}

const fullname = combinestring("MR.", "Anish","kumar","M");

console.log(fullname)  */

//==================================================================================================//

//CALLBACK = A function that is passed as an argument to another 
//           function and is executed after some operation has been completed
/*
hello(wait);

function hello(callback){
  console.log("Hello");
  callback();
}

function wait(){
  console.log("Wait");
}

function leave(){
  console.log("Leave");
}

function goodbye(){
  console.log("goodbye");
} */
//======================================================================================================//  