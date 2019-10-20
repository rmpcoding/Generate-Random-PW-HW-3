// create arrays for characters (special characters, numbers, lowercase, uppercase)

var specCharArr = [
  "[", 
  "]", 
  "!", 
  "/", 
  "^", 
  "$", 
  "|", 
  "?", 
  "*", 
  "+", 
  "(", 
  ")"
  ];
var numbersArr = [
  "0", 
  "1", 
  "2", 
  "3", 
  "4", 
  "5", 
  "6", 
  "7", 
  "8", 
  "9"
  ];
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

// create empty nested array
// push only what user chooses into nested array. This will be for our result array inside a function later on.

var nestedArr = [];

// prompt user to choose between 8 and 128 for length of pw
// create function to return the value of user input

var askUserLengthOfCharacters =
"How many characters do you want? Choose between 8 - 128.";

function getLengthOfCharacters() {
  return prompt(askUserLengthOfCharacters);
}

// create variable to fetch returned value of user length input. This is how I can get the variable outside of a function.

var userLength = getLengthOfCharacters();

// create test function for user inputted characters.

function successfulPasswordLength() {
  if (parseInt(userLength) >= 8 && parseInt(userLength) <= 128) {
    userPrompts(); //this is the main function that runs everything
  } else {
    userPrompts(); //as you will see below, I couldn't get my test parameters working.
  }
}
successfulPasswordLength();

// tried to create failsafe but it didn't work out.____________________________________________________________________________________________________________________________________________________

// prompt to try again if user doesn't meet criteria
var userFailsCriteria =
  "Sorry, you need to enter between 8 - 128 numeric characters. Please try again.";

function testUserParameters() {
  if (parseInt(userLength) < 8 || parseInt(userLength) > 128) {
    // alert(userFailsCriteria);
    getLengthOfCharacters();
  } else {
    successfulPasswordLength(); // I spent around two hours trying to figure this part out but couldn't :(
  }
}

// ______________________________userPrompts main function below, along with conditionals for for loop_____________________________________________ //

function userPrompts() {
  // prompt user to decide yes/no for special characters
  var userSpecialCharacters = confirm(
    "Click Okay if you want to use special characters, or else click cancel"
  );
  console.log(userSpecialCharacters);

  // defaults to checking whether the statement below is true
  if (userSpecialCharacters) {
    nestedArr.push(specCharArr);
  }

  // prompt user to decide yes/no for numbers
  var userNumbers = confirm(
    "Click Okay if you want to use number characters, or else click cancel"
  );
  console.log(userNumbers);

  // defaults to checking whether the statement below is true
  if (userNumbers) {
    nestedArr.push(numbersArr);
  }

  // prompt user to decide yes/no for lower case letters
  var userLowerCase = confirm(
    "Click Okay if you want to use lowercase characters, or else click cancel"
  );
  console.log(userLowerCase);

  // defaults to checking whether the statement below is true
  if (userLowerCase) {
    nestedArr.push(lowerCaseArr);
  }

  // prompt user to decide yes/no for upper case letters
  var userUpperCase = confirm(
    "Click Okay if you want to use uppercase characters, or else click cancel"
  );
  console.log(userUpperCase);

  // defaults to checking whether the statement below is true
  if (userUpperCase) {
    nestedArr.push(upperCaseArr);
  }

  // if user chooses nothing, iterate over cycle to give user another chance to input correctly
  if (
    userSpecialCharacters === false &&
    userNumbers === false &&
    userLowerCase === false &&
    userUpperCase === false
  ) {
    alert("Please okay a criterion least once");
    userPrompts();
  }

  // if criterion meets true from user prompts (i.e., confirm if you want special characters)
  // iterate through loop of such array
  // if criterion not true
  // move on to next

  // generate a random number using math floor math random methods to iterate over four arrays
  // select random index of array
  // select random index of inner array
  // concat (push) such character to userPassword (push characters into new string)

  var randomNumber1 = Math.floor(Math.random() * nestedArr.length);
  var randomNumber2 = Math.floor(
    Math.random() * nestedArr[randomNumber1].length
  );

  var userPassword = "";

  for (var i = 0; i < userLength; i++) {
    userPassword = userPassword + nestedArr[randomNumber1][randomNumber2];
    randomNumber1 = Math.floor(Math.random() * nestedArr.length);
    randomNumber2 = Math.floor(Math.random() * nestedArr[randomNumber1].length);

    // Click events and functions below:
    // Create eventlistener to start rolling out the function when the user clicks on the generate password button.
    var displayPassword = document
      .getElementById("generate")
      .addEventListener("click", function() {
        document.getElementById("password").innerText = userPassword;
      });

    var textArea = document.getElementById("password");
    var copyPassword = document.getElementById("copy");

    copyPassword.onclick = function() {
      textArea.select();
      console.log("hello");
      document.execCommand("copy");
    };
  }
  return console.log(userPassword);
}
