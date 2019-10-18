console.log("robert, you're in the console.");

// create arrays for characters (special characters, numbers, lowercase, uppercase)

var specCharArr = ["[", "]", "!", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArr= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// create object with arrays inside

var obj = {
  specCharArr: ["[", "]", "!", "/", "^", "$", "|", "?", "*", "+", "(", ")"],
  numbersArr: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  lowerCaseArr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCaseArr: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}

console.log(obj.upperCaseArr[2]);


// ______________________________userPrompts below______________________________________________________ //
// prompt user to choose between 8 and 128 for length of pw
// prompt to try again if user doesn't meet criteria (at very bottom)

var userLength = prompt("How many characters do you want? Choose between 8 - 128.");
console.log(userLength);

// ______________________________userPrompts function below_____________________________________________ //

function userPrompts() {

  if (userLength < 8 || userLength > 128) {
    prompt("Please choose at least 8 characters, and no more than 128. Please try again.");
  }
  
  // prompt user to decide yes/no for special characters
  var userSpecialCharacters = confirm("Click Okay if you want to use special characters, or else click cancel");
  console.log(userSpecialCharacters);
  
    // prompt user to decide yes/no for numbers
  var userNumbers = confirm("Click Okay if you want to use number characters, or else click cancel");
  console.log(userNumbers);
  
    // prompt user to decide yes/no for lower case letters
  var userLowerCase = confirm("Click Okay if you want to use lowercase characters, or else click cancel");
  console.log(userLowerCase);
  
    // prompt user to decide yes/no for upper case letters
  var userUpperCase = confirm("Click Okay if you want to use uppercase characters, or else click cancel");
  console.log(userUpperCase);

  // if user chooses nothing, iterate over cycle to give user another chance to input correctly

  if (userSpecialCharacters === false && userNumbers === false && userLowerCase === false && userUpperCase === false) {
    alert("Please okay a criterion least once")
    userPrompts();
  }
}

userPrompts();
// Calling the function above.


// ___________________________________________________________________________________________________________________________________________________

// if all criteria are met. 
// How do i invoke the variables within a function? do they need to be placed globally? If I place it outside, the code won't execute properly. Unsure why.


if (userSpecialCharacters === true && userNumbers === true && userLowerCase === true && userUpperCase === true) {
  console.log("heyyyy");
}


















    // var trueSpecialCharacters = 0;
    // var trueLowerCase = 1;
    // var trueUpperCase = 2;
    
    // if (userSpecialCharacters === true) {
    //   randomLoop();
    //   console.log("hi, I'm a true statement");
    // }
    

    
    // Assign numbers 0, 1, 2, 3 to arrays;
    
    // if (randomNumber === 0 && userSpecialCharacters === true) then push into array
    
    // if (randomNumber === 1 && userLowerCase === true) then push into array
    
    // if (randomNumber === 2 && userUpperCase === true) then push into array
    
    // remember to ensure the user selects at least one criteria



// _________________create a function to assign numbers to arrays_______________________ //



//create eventlistener to start rolling out the function when the user clicks on the generate password button.

// var generateClick = document.getElementById("generate").addEventListener("click", randomLoop); 

// var displayPassWord = document.getElementById("password").addEventListener("click")


    // generate a random number using math floor math random methods to iterate over four arrays
    

    
    var randomNumberSpecChar = Math.floor(Math.random() * specCharArr.length);
    var randomNumberLowerCase = Math.floor(Math.random() * lowerCaseArr.length);
    var randomNumberUpperCase = Math.floor(Math.random() * upperCaseArr.length);

    console.log(randomNumberSpecChar);
    console.log(randomNumberLowerCase);
    console.log(randomNumberUpperCase);

    console.log(`hello, I'm a random number: ${randomNumberSpecChar}`);
    console.log(`hello, I'm a random number: ${randomNumberLowerCase}`);
    console.log(`hello, I'm a random number: ${randomNumberUpperCase}`);
    











// the function below is not exactly what I want. Most likely will abandon this one. 

function randomLoop(length, characters) {

  var resultString = "";

  for (var i = 0; i < length; i++) {
    resultString += characters.charactersAt(Math.floor(Math.random() * characters.length));
    console.log("hello, you need to call on an array argument to push into the result array.");
    console.log(resultString);
  }
  return resultString;
}

randomLoop(length, characters);
















// need a function with two arguments.








// count+=Math.random






// alert the user of the new password (result array)


// learn about scope / scoping




  // // if statements below are just tests to see if it works______________________________________extraneous code.
  
  // // if user chooses true on first prompt (special characters)
  
  // // iterate through special characters array
  
  // // no else statement if false since it will go on to the next array 
  
  // if (userSpecialCharacters === true) {
  //   for (var i = 0; i < specCharArr.length; i++) {
  //     console.log("Special Characters work");
  //   }
  // } 
  
  // // if user chooses true on second prompt (lowercase letters)
  
  // // iterate through lowercase letters array
  
  // // no else statement if false since it will go on to the next array 
  
  // if (userLowerCase === true) {
  //   for (var i = 0; i < lowerCaseArr.length; i++) {
  //     console.log("lowercase works");
  //   }
  // } 
  
  // // if user chooses false on third prompt (uppercase letters)
  
  // // iterate through uppercase letters array

  // // no else statement if false since it will go on to the next array 
  
  // if (userUpperCase === true) {
  //   for (var i = 0; i < upperCaseArr.length; i++) {
  //     console.log("uppercase works");
  //   }
  // } 
  // if statements above are just tests to see if it works______________________________________extraneous code.