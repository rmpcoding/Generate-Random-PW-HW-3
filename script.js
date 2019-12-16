// create arrays for characters (special characters, numbers, lowercase, uppercase)

var specCharArr = ["[", "]", "!", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// DOM traversal variables below:
var handleGeneratePassword = document.getElementById("generate");
var textArea = document.getElementById("password");
var copyPassword = document.getElementById("copy");

// DOM addEventListeners below:

handleGeneratePassword.addEventListener("click", generatePassword);

// NEXT STEPS:
// Once generate password button is clicked, display the password in the text area content box.

copyPassword.onclick = function() {
  textArea.select();
  console.log("hello");
  document.execCommand("copy");
};

// Create empty nested array, in which we will push characters from user-chosen criteria into such empty array.
// This will be for our result array inside a function later on.

// VARIABLES MADE GLOBAL FOR FUNCTIONS BELOW
// ===================================================================================================
var nestedArr = [];
var userSpecialCharacters;
var userNumbers;
var userLowerCase;
var userUpperCase;


console.log("This is right above the generatePassword function");


// VALIDATE LENGTH FUNCTION
// ===================================================================================================

var userLength = parseInt(userLength);
var invalidLength = userLength < 8 || userLength > 128;

validateLength = () => {
  userLength = prompt(
    "How many characters do you want? Choose between 8 - 128."
  );
  invalidLength = userLength < 8 || userLength > 128;
  if (invalidLength) {
    validateLength(); //starts the process over again
  } else {
    userPrompts(); //this is the main function that runs everything
  }
};

// RUNS GENERATEPASSWORD FUNCTION
// ===================================================================================================
function generatePassword() {
  validateLength();
}

// PROMPTS USER TO DECIDE ON SPECIAL CHARACTERS
// ===================================================================================================
specialChar = () => {
  userSpecialCharacters = confirm(
    "Click Okay if you want to use special characters, or else click cancel"
  );
  // defaults to checking whether the statement below is true
  if (userSpecialCharacters) {
    nestedArr.push(specCharArr);
  }
};

// PROMPTS USER TO DECIDE ON NUMBER CHARACTERS
// ===================================================================================================
numberChar = () => {
  userNumbers = confirm(
    "Click Okay if you want to use number characters, or else click cancel"
  );
  // defaults to checking whether the statement below is true
  if (userNumbers) {
    nestedArr.push(numbersArr);
  }
};

// PROMPTS USER TO DECIDE ON LOWERCASE CHARACTERS
// ===================================================================================================
lowercaseChar = () => {
  userLowerCase = confirm(
    "Click Okay if you want to use lowercase characters, or else click cancel"
  );
  // defaults to checking whether the statement below is true
  if (userLowerCase) {
    nestedArr.push(lowerCaseArr);
  }
};

// PROMPTS USER TO DECIDE ON UPPERCASE CHARACTERS
// ===================================================================================================
uppercaseChar = () => {
  userUpperCase = confirm(
    "Click Okay if you want to use uppercase characters, or else click cancel"
  );
  // defaults to checking whether the statement below is true
  if (userUpperCase) {
    nestedArr.push(upperCaseArr);
  }
};

// RUNS USERPROMPTS FUNCTION
// ===================================================================================================
function userPrompts() {

  specialChar();
  numberChar();
  lowercaseChar();
  uppercaseChar();
  
  // if user chooses nothing, iterate over cycle to give user another chance to input correctly
  
  if (
    userSpecialCharacters === false &&
    userNumbers === false &&
    userLowerCase === false &&
    userUpperCase === false
  ) {
    alert("Please choose at least one criterion");
    userPrompts();
  } else {
    passwordGenerator();
  }
}

// RUNS PASSWORDGENERATOR FUNCTION
// ===================================================================================================

var userPassword = "";
var randomNumber1;
var randomNumber2;

passwordGenerator = () => {
  randomNumber1 = Math.floor(Math.random() * nestedArr.length);
  randomNumber2 = Math.floor(
    Math.random() * nestedArr[randomNumber1].length
  );

  userPassword = "";

  for (var i = 0; i < userLength; i++) {
    userPassword = userPassword + nestedArr[randomNumber1][randomNumber2];
    randomNumber1 = Math.floor(Math.random() * nestedArr.length);
    randomNumber2 = Math.floor(Math.random() * nestedArr[randomNumber1].length);
  }
  return console.log(userPassword);
}

  // if criterion meets true from user prompts (i.e., confirm if you want special characters)
  // iterate through loop of such array
  // if criterion not true
  // move on to next

  // generate a random number using math floor math random methods to iterate over four arrays
  // select random index of array
  // select random index of inner array
  // concat (push) such character to userPassword (push characters into new string)

// Need to return the password into the text area.
// Need to copy to clipboard once button is clicked.










