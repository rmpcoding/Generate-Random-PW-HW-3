console.log("robert, you're in the console.");

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

// create empty nested array
// push only what user chooses into nested array

var nestedArr = [];

// console.log(nestedArr);

// ______________________________userPrompts below______________________________________________________ //
// prompt user to choose between 8 and 128 for length of pw
// prompt to try again if user doesn't meet criteria

// create variable asking user length

var askUserLengthOfCharacters =
  "How many characters do you want? Choose between 8 - 128.";

// create function to return the value of user input

function getLengthOfCharacters() {
  return prompt(askUserLengthOfCharacters);
}

// create variable to fetch returned value of user input. This is how I can get the variable outside of a function.

var userLength = getLengthOfCharacters();

console.log(userLength);

var userFailsCriteria =
  "Sorry, you need to enter between 8 - 128 numeric characters. Please try again.";

function testUserParameters() {
  if (parseInt(userLength) >= 8 && parseInt(userLength) <= 128) {
    userPrompts();
  } else if (parseInt(userLength) < 8 || parseInt(userLength) > 128) {
    return prompt(userFailsCriteria);
  } else if (typeof userLength === "NaN" || typeof userLength === "string") {
    return prompt(userFailsCriteria);
  }
}

testUserParameters();

// prompt(`You chose ${userLength} characters, but you need between 8 - 128 numeric characters. Please try again`);
// prompt(`You chose ${userLength} characters, but you need between 8 - 128 numeric characters. Please try again`);

// prompt("Please choose at least 8 characters, and no more than 128. Please try again.");
// console.log(typeof userLengthNum);

// else if (typeof userLength === "string") {
//   prompt("I'm a string. Please choose at least 8 characters, and no more than 128. Please try again.");
// }

// var userLengthNum = parseInt(userLength);

// console.log(typeof userLengthNum);

// what if it's null (i.e. someone enters letters)

// ______________________________userPrompts function below, along with conditionals for for loop_____________________________________________ //

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

  // generate a random number using math floor math random methods to iterate over four arrays

  var randomNumber1 = Math.floor(Math.random() * nestedArr.length);
  var randomNumber2 = Math.floor(
    Math.random() * nestedArr[randomNumber1].length
  );

  var userPassword = "";

  for (var i = 0; i < userLength; i++) {
    // select random index of array
    // select random index of inside array
    // concat such character to userPassword
    userPassword = userPassword + nestedArr[randomNumber1][randomNumber2];

    randomNumber1 = Math.floor(Math.random() * nestedArr.length);
    randomNumber2 = Math.floor(Math.random() * nestedArr[randomNumber1].length);
  }

  console.log(userPassword);

  // select text box by id // document.getelementbyid
  // update textContent with value of user password
  // .innerText() --pass in userPassword

  // if true
  // iterate through loop
  // if not true
  // move on to next loop

  // user inputs number (this is not housed within the userPrompt function)
  // retrieve user-inputted number
  // use that as length for randomized number generator
  // iterate through nestedArr with both randomNumber1 and randomNumber2 as arguments

  // __________acts as a function below becausae it's housed within the userPrompt function___________________________________

  // if user confrims true to special characters, run loop to extract random special characters
}

// no need to call the function because it calls the function in the test parameters function.
// userPrompts();

// nested array is empty [] (descriptive name for array)
// if user chooses true characters (any)
// push array into empty nested array [].

// Calling the function above.

// ___________________________________________________________________________________________________________________________________________________

//create eventlistener to start rolling out the function when the user clicks on the generate password button.

// var generateClick = document.getElementById("generate").addEventListener("click", randomLoop);

// var displayPassWord = document.getElementById("password").addEventListener("click")

// Assign numbers 0, 1, 2, 3 to arrays;

// if (randomNumber === 0 && userSpecialCharacters === true) then push into array

// if (randomNumber === 1 && userLowerCase === true) then push into array

// if (randomNumber === 2 && userUpperCase === true) then push into array

// remember to ensure the user selects at least one criteria

// _________________create a function to assign numbers to arrays_______________________ //

// alert the user of the new password (result array)

// learn about scope / scoping

// if all criteria are met.
// if (userSpecialCharacters === true && userNumbers === true && userLowerCase === true && userUpperCase === true) {
//   console.log("heyyyy, you can try the loop now");
// }

// specCharArr,
// numbersArr,
// lowerCaseArr,
// upperCaseArr
