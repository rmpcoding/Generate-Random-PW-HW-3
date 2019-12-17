// ARRAYS FOR ALL CHARACTERS
// ===================================================================================================

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

// VARIABLES MADE GLOBAL FOR FUNCTIONS
// ===================================================================================================

var nestedArr = [];
var userSpecialCharacters;
var userNumbers;
var userLowerCase;
var userUpperCase;

// DOM TRAVERSAL VARIABLES
// ===================================================================================================

var handleGeneratePassword = document.getElementById("generate");
var textArea = document.getElementById("password");
var copyPassword = document.getElementById("copy");

// HANDLE GENERATE PASSWORD BUTTON EVENT
// ===================================================================================================

handleGeneratePassword.addEventListener("click", function() {
  initialPrompt();
  validateLength();
});

initialPrompt = () => {
  userLength = prompt(
    "How many characters do you want? Choose between 8 - 128."
  );
};

// VALIDATE LENGTH && NUMBERS FUNCTION
// ===================================================================================================

validateLength = () => {
  invalidLength = userLength < 8 || userLength > 128;
  if (invalidLength === true || isNaN(userLength) === true) {
    alert("Please use a valid number between 8 - 128");
    initialPrompt();
    validateLength();
  } else {
    userPrompts(); //this is the main function that runs everything
  }
};

// COPY PASSWORD BUTTON FUNCTION
// ===================================================================================================

copyPassword.onclick = function() {
  textArea.select();
  document.execCommand("copy");
};

// PROMPTS USER TO DECIDE ON SPECIAL CHARACTERS
// ===================================================================================================

specialChar = () => {
  userSpecialCharacters = confirm(
    "Click Okay if you want to use special characters, or else click cancel"
  );

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

  // (if user chooses nothing, iterate over cycle to give user another chance to input correctly)

  if (
    userSpecialCharacters === false &&
    userNumbers === false &&
    userLowerCase === false &&
    userUpperCase === false
  ) {
    alert("Please choose at least one type of character");
    userPrompts();
  } else {
    passwordGenerator();
  }
}

// RUNS PASSWORDGENERATOR FUNCTION
// ===================================================================================================

var userPassword = "";

passwordGenerator = () => {
  randomNumber1 = Math.floor(Math.random() * nestedArr.length);
  randomNumber2 = Math.floor(Math.random() * nestedArr[randomNumber1].length);

  for (var i = 0; i < userLength; i++) {
    userPassword = userPassword + nestedArr[randomNumber1][randomNumber2];
    randomNumber1 = Math.floor(Math.random() * nestedArr.length);
    randomNumber2 = Math.floor(Math.random() * nestedArr[randomNumber1].length);
  }
  textArea.append(userPassword);
  clear(); //this function doesn't work properly yet. Still need to figure out the logic behind it.
};

// NEXT STEPS: WORK ON CLEAR FUNCTION
// NEXT STEPS: CREATE README FILE
// ===================================================================================================
clear = () => {
  handleGeneratePassword.addEventListener("click", function() {
    return textArea.append("");
  });
};


// user has generated password, but needs to generate another one without refreshing page
// user clicks generate password button again
// textArea needs to clear
// run process over again