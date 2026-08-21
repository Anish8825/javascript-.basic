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

document.getElementById("mysubmit").onclick = function () {
    username = document.getElementById("mytext").value;
    console.log(username);
    
}