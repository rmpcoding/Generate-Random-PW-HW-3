console.log("robert, you're in the console.");


// prompt user to choose between 8 and 128 for length of pw

var userLength = prompt("How many characters do you want? Choose between 8 - 128.");
console.log(userLength);

if (userLength < 8) {
  prompt("Please choose at least 8 characters, and no more than 128. Please try again.");
} else if (userLength > 128) {
  prompt("No more than 128 characters. That's way too much work for lil ol' me. Please try again.")
}

// prompt user to decide yes/no for special characters

var userSpecialCharacters = confirm("Click Okay if you want to use special characters, or else click cancel");
console.log(userSpecialCharacters);


// prompt user to decide yes/no for lower case letters

var userLowerCase = confirm("Click Okay if you want to use special characters, or else click cancel");
console.log(userLowerCase);

// prompt user to decide yes/no for upper case letters

var userUpperCase = confirm("Click Okay if you want to use special characters, or else click cancel");
console.log(userUpperCase);

// create arrays for characters (special characters, numbers, lowercase, uppercase)

var specCharArr = ["[", "]", "\", "/", "^", \"$", "|", "?", "*", "+", "(", ")"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArr= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//create eventlistener to start rolling out the function when the user clicks on the generate password button.

var generateClick = document.getElementById("generate").addEventListener("click", hello);

// if user chooses true on first prompt (special characters)

// iterate through special characters array

// no else statement if false since it will go on to the next array 

if (userSpecialCharacters === true) {
  for (var i = 0; i < specCharArr.length; i++) {
    console.log(i);
  }
} 

// if user chooses true on second prompt (lowercase letters)

// iterate through lowercase letters array

// no else statement if false since it will go on to the next array 

if (userLowerCase === true) {
  for (var i = 0; i < lowerCaseArr.length; i++) {
    // 
    console.log(i);
  }
} 

// if user chooses false on third prompt (uppercase letters)

// iterate through uppercase letters array

// no else statement if false since it will go on to the next array 

if (userUpperCase === true) {
  for (var i = 0; i < upperCaseArr.length; i++) {
    // 
    console.log(i);
  }
} 




// generate a random number using math.floor.random

var randomNumber = Math.floor(Math.random() * specCharArr.length);
console.log(randomNumber);





// create a result array to push stuff into

var resultArr = [];



// the function below is just a test function to see if my code is working properly. it is. 

function hello() {
  for (var i = 0; i < userLength; i++) {
    resultArr.push(userLength.length);
  }
  console.log(resultArr);
}


// alert the user of the new password (result array)
