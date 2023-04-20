// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letters2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var toUpper = function(x) {return x.toUpperCase();};
var letters2 = letters2.map(toUpper);
var upper = [];
var criteria;
// Write password to the #password input
function generatePassword() {
    var passwordLength = prompt('How many characters would you like in your password? Please choose any number from 8 to 128.');
    
    if (!passwordLength) {
        alert('Need a value! Please try again!');
        return 'Click Generate Button to try again!';
    } else if (passwordLength < 8) {
        alert('This number is too low. Please select another number that meets the criteria.');
        return 'Click Generate Button to try again!';
    } else if (passwordLength > 128) {
        alert('This number is too high. Please select another number that meets the criteria.');
        return 'Click Generate Button to try again!';
    } else {
        var lowercase = confirm('Would you like to include lowercase letters?')
        var uppercase = confirm('Would you like to include uppercase letters?')
        var numbers = confirm('Would you like to include numbers?')
        var special = confirm('Would you like to include special characters?')
    }

    if (!lowercase && !uppercase && !numbers && !special) {
        criteria = alert('Creteria must be selected! Please try again!');
        return 'Click Generate Button to try again!';
    } else if (lowercase && uppercase && numbers && special) {
        criteria = char.concat(num, letters, letters2);
    } else if (uppercase && numbers && special) {
        criteria = char.concat(num, letters2);
    } else if (lowercase && numbers && special) {
        criteria = char.concat(num, letters);
    } else if (lowercase && uppercase && special) {
        criteria = char.concat(letters, letters2);
    } else if (lowercase && uppercase && numbers) {
        criteria = num.concat(letters, letters2);
    } else if (numbers && special) {
        criteria = char.concat(num);
    } else if (lowercase && special) {
        criteria = char.concat(letters);
    } else if (uppercase && special) {
        criteria = char.concat(letters2);
    } else if (lowercase && uppercase) {
        criteria = letters.concat(letters2);
    } else if (lowercase && numbers) {
        criteria = letters.concat(num);
    } else if (uppercase && numbers) {
        criteria = num.concat(letters2);
    } else if (special) {
        criteria = char;
    } else if (numbers) {
        criteria = num;
    } else if (lowercase) {
        criteria = letters;
    } else if (uppercase) {
        criteria = upper.concat(letters2);
    };

    password = [];

    for (var i = 0; i < passwordLength; i++) {
        var randomChar = criteria[Math.floor(Math.random() * criteria.length)];
        password.push(randomChar);
    }

    passwordText = password.join('');
    return passwordText;

};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
