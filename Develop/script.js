// Assignment Code
var generateBtn = document.querySelector("#generate");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const characters = '!@#$%^&*()';
const upperCase = randUpper;
const lowerCase = randLower;

// Write password to the #password input
function writePassword() {

  

  
  enter = (prompt("Password length? Choose between 8 and 128 characters"));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));
  }

  else {
    var password = ""

    // Continues once user input is validated
    randNumber = confirm("Will this contain numbers?");
    randCharacter = confirm("Will this contain special characters?");
    randUppercase = confirm("Will this contain Uppercase letters?");
    randLowercase = confirm("Will this contain Lowercase letters?"); 

     // Else if for 4 negative options
     if (!randCharacter && !randNumber && !randUppercase && !randLowercase) {
      choices = alert("At least one of the criteria must be met!");
     }

     else{
       var usedNum = false
       var usedChar = false
       var usedUpper = false
       var usedLower = false
       var allAllowed = ""

      for (let i = 0; i < enter; i++) {
        
        if (randNumber && !usedNum){
          password += (Math.floor(Math.random()*10));
          usedNum = true
          for (let j = 0; j <= 9; j++) {
            allAllowed += j   //"0123456789"
          }
        }
        else if (randCharacter && !usedChar) {
          password += characters[Math.floor(Math.random()*characters.length)]
          usedChar = true
          allAllowed += characters  //     "0123456789!@#$%^&*()"
        }
        else if (randUppercase && !usedUpper) {
          password += randUpper()
          usedUpper = true
          for (let j = 0; j < 26; j++) {
            allAllowed += String.fromCharCode(j + 65)   // "0123456789!@#$%^&*()A-Z"
          }
        }
        else if (randLowercase && !usedLower) {
          password += randLower()
          usedLower = true
          for (let j = 0; j < 26; j++) {
            allAllowed += String.fromCharCode(j + 97)   // "0123456789!@#$%^&*()A-Za-z"
          }
        }
        else {
          password += allAllowed[Math.floor(Math.random()*allAllowed.length)]    // "0123456789!@#$%^&*()A-Za-z"
          
        }
        console.log(i)
        console.log(allAllowed)
      }
     }
    }

      // Else for 3 negative options
    //   else if (randNumber) {
    //     choices = numbers;
    //     console.log (numbers)
    //   }

    //   else if (randCharacter) {
    //     choices = characters;
    //     console.log (characters)
    //   }

    //   else if (randUppercase) {
    //     choices = upperCase;
    //     console.log (randUpper)
    //   }
      
    //   else if (randLowercase) {
    //     choices = lowerCase;
    //     console.log (randLower)
    //   }
    //  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }


function randLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

