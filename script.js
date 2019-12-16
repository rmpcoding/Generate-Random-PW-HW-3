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
var userLength = parseInt(userLength);

handleGeneratePassword.addEventListener("click", function() {
  userLength = prompt(
    "How many characters do you want? Choose between 8 - 128."
  );
  validateLength();
});

// COPY PASSWORD BUTTON FUNCTION
// ===================================================================================================

copyPassword.onclick = function() {
  textArea.select();
  document.execCommand("copy");
};

// VALIDATE LENGTH FUNCTION
// ===================================================================================================

var invalidLength = userLength < 8 || userLength > 128;

validateLength = () => {
  invalidLength = userLength < 8 || userLength > 128;
  if (invalidLength) {
    validateLength(); //starts the process over again
  } else {
    userPrompts(); //this is the main function that runs everything
  }
};

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
  randomNumber2 = Math.floor(Math.random() * nestedArr[randomNumber1].length);

  userPassword = "";

  for (var i = 0; i < userLength; i++) {
    userPassword = userPassword + nestedArr[randomNumber1][randomNumber2];
    randomNumber1 = Math.floor(Math.random() * nestedArr.length);
    randomNumber2 = Math.floor(Math.random() * nestedArr[randomNumber1].length);
  }
  textArea.append(userPassword);
  // clear();
  // need to add logic here to start password again.
};

// NEXT STEPS: WORK ON CLEAR FUNCTION
// NEXT STEPS: VALIDATE/WARN USER TO ENTER ONLY NUMERIC CHARACTERS ON LENGTH PROMPT
// NEXT STEPS: CREATE README
// ===================================================================================================
clear = () => {
  handleGeneratePassword.addEventListener("click", function() {
    textArea.value = "";
  });

  handleGeneratePassword.addEventListener("click", function() {
    userLength = prompt(
      "How many characters do you want? Choose between 8 - 128."
    );
    validateLength();
  });
};
