//RANDOM PASSWORD GENERATOR

function generatePassword(length, lowerCase, upperCase, numbers, symbols) {

    const lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberchars = '0123456789';
    const symbolchars = '!@#$%^&*()_+[]{}\|;:,./<>`~?';
    
    let allowedchars = "";
    let password = "";
    
    allowedchars += includelowerCase ? lowercasechars : "";
    allowedchars += includeuppercase ? uppercasechars : "";
    allowedchars += includeNumbers ? numberchars : "";
    allowedchars += includeSymbols ? symbolchars : "";

    if(length <= 0){
        return '(password length must be atleast 1)';
    }
    if(allowedchars.length === 0){
        return `(Atleast one character type must be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }
    return password;
}

const passwordLength = 10; // Length of the password
const includelowerCase = true; //lowercase letters
const includeuppercase = true; //uppercase letters
const includeNumbers = true; //numbers
const includeSymbols = true; //symbols

const password = generatePassword(passwordLength, includelowerCase, 
                                 includeuppercase, includeNumbers, includeSymbols)

console.log(`Generated password: ${password}`);