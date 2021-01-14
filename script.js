// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
passwordText.value = password;

}


// GIVEN I need a new, secure password
// need a button or link to get a new password
// need to show the password on the page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ***************function here******************
// write a function called generatePassword which will have a series of prompts for user input

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function generatePassword(){
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialChar = ["!", "@", "#", "$", "%", "&", "*", "+", "-", "=", ":", ";", "<", ">", ",", ".", "/", "_", "~"];
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var passwordLength = false;
}

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// We have to ask the user for how many characters they want in a password
// We have to check to make sure it is between 8 and 128
// Otherwise, we tell the use to fix their input.
while(passwordLength < 8 || passwordLength > 128 || passwordLength == ""){
  var passwordLength = prompt("Create a password with a length between 8 and 128")
}

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// confirm if they want lowercase
var pickLowerCase = confirm("Would you like lowercase in your password?")
// confirm if they want uppercase
var pickUpperCase = confirm("Would you like uppercase in your password?")
// confirm if they want numeric
var pickNum = confirm("Would you like numbers in your password?")
// confirm if they want special characters
var pickSpecialChar = confirm("Would you like special characters in your password?")

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from
if(pickUpperCase === fasle && pickLowerCase === false && pick SpecialChar === false && pickNum === false){
  alert("Invalid Password")
}

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, choose one randomly and add it to our password X a number of times 
var validPass = []

if (pickUpperCase === true){
  vaildPass = valid.concat(upperCase)
}

if (pickLowerCase === true){
  vaildPass = valid.concat(lowerCase)
}

if (pickSpecialChar === true){
  vaildPass = valid.concat(specialChar)
}

if (pickNum === true){
  vaildPass = valid.concat(num)
}

console.log(validPass)

var randomPassword = "";

for (var i = 0; i < passwordLength; i++){
  randomPassword += validPass[Math.floor(Math.random() * validPass.length)];
}
return randomPassword;
// ***************function ends here******************


}