console.log("robert, you're in the console.");


// create arrays for characters (special characters, numbers, lowercase, uppercase)
// create object with arrays inside // for (let i = 0; i < lol.specCharArr.length; i++) {}


var specCharArr = ["[", "]", "!", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArr= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(specCharArr);

// prompt user to choose between 8 and 128 for length of pw
// prompt to try again if user doesn't meet criteria

var userLength = prompt("How many characters do you want? Choose between 8 - 128.");
console.log(userLength);




// ______________________________userPrompts function below___________________________________ //

function userPrompts() {

  if (userLength < 8 || userLength > 128) {
    prompt("Please choose at least 8 characters, and no more than 128. Please try again.");
  }
  
  // prompt user to decide yes/no for special characters
  
  var userSpecialCharacters = confirm("Click Okay if you want to use special characters, or else click cancel");
  console.log(userSpecialCharacters);
  
  // prompt user to decide yes/no for lower case letters
  
  var userLowerCase = confirm("Click Okay if you want to use lowercase characters, or else click cancel");
  console.log(userLowerCase);
  
  // prompt user to decide yes/no for upper case letters
  
  var userUpperCase = confirm("Click Okay if you want to use uppercase characters, or else click cancel");
  console.log(userUpperCase);
  
  // if user chooses true on first prompt (special characters)
  
  // iterate through special characters array
  
  // no else statement if false since it will go on to the next array 
  
  if (userSpecialCharacters === true) {
    for (var i = 0; i < specCharArr.length; i++) {
      console.log("Special Characters work");
    }
  } 
  
  // if user chooses true on second prompt (lowercase letters)
  
  // iterate through lowercase letters array
  
  // no else statement if false since it will go on to the next array 
  
  if (userLowerCase === true) {
    for (var i = 0; i < lowerCaseArr.length; i++) {
      console.log("lowercase works");
    }
  } 
  
  // if user chooses false on third prompt (uppercase letters)
  
  // iterate through uppercase letters array

  // no else statement if false since it will go on to the next array 
  
  if (userUpperCase === true) {
    for (var i = 0; i < upperCaseArr.length; i++) {
      console.log("uppercase works");
    }
  } 

  // if user chooses nothing, iterate over cycle to give user another chance to input correctly

  if (userSpecialCharacters === false && userLowerCase === false && userUpperCase === false) {
    alert("Please okay a criterion least once")
    userPrompts();
  }

// ___________________________________________________________________________________________________________________________________________________


    // generate a random number using math floor math random methods to iterate over four arrays
    
    // can I create a function inside of a function? 

    
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(`hello, I'm a random number: ${randomNumber}`);
    
    
    // var trueSpecialCharacters = 0;
    // var trueLowerCase = 1;
    // var trueUpperCase = 2;
    
    if (userSpecialCharacters === true) {
      hello();
      console.log("hi, I'm a true statement");
    }
    

    
    
    // Assign numbers 0, 1, 2, 3 to arrays;
    
    // if (randomNumber === 0 && userSpecialCharacters === true) then push into array
    
    // if (randomNumber === 1 && userLowerCase === true) then push into array
    
    // if (randomNumber === 2 && userUpperCase === true) then push into array
    
    // remember to ensure the user selects at least one criteria
    
  

}

userPrompts();

// _________________create a function to assign numbers to arrays_______________________ //



// function generateRandomNumbers() {

// }
// // above this line is the end of the function curly bracket

// generateRandomNumbers();











//create eventlistener to start rolling out the function when the user clicks on the generate password button.

var generateClick = document.getElementById("generate").addEventListener("click", hello); 

// the function below is just a test function to see if my code is working properly. it is. 



function hello() {

  var resultArr = [];

  for (var i = 0; i < userLength.length; i++) {
    resultArr.push("hello, you need to call on an array argument to push into the result array.");
    console.log(resultArr);
  }
}












// count+=Math.random






// alert the user of the new password (result array)


// learn about scope / scoping