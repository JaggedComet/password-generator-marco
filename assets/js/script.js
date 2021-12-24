// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// Added variables for the 4 diff strings that can be added to the password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "01234567890";
var specialCharacters = "!@#$%^&*()";


function generatePassword() {
  // Changed password to passwordGenerated in order to make it longer so I can tell which variable is which
  var passwordGenerated = " ";
  // TODO: add code to generate the password here

  // Added Variable for the required strings for the password
  var requiredKeyString = " ";

  // Added a variable for how long the password can be
  var lengthPass = window.prompt("Enter a number from 8 to 128 for password length.");
  // Used while in order to loop the window if they don't pick a number between 8 and 128
  while (lengthPass < 8 || lengthPass > 128 ) {
    lengthPass= window.prompt ("The password must be between 8 and 128 characters. Please seleect a number between 8 to 128");
  };

  // Ask the user if they want uppercase included in their password
  var includeupperCase = confirm(
    "Do you want to include uppercase characters?"
  );

  // If statement to include uppercase character string to pass
  if (includeupperCase) {
    requiredKeyString = requiredKeyString.concat(
      upperCase
    );
  }

  // Ask the user if they want lowercase included in their password
  var includelowerCase = confirm(
    "Do you want to include lower case characters?"
  );

  // If statement to include lowercase string to password
  if (includelowerCase) {
    requiredKeyString = requiredKeyString.concat(
      lowerCase
    );
  }

  // Ask the user if they want numbers included in their password
  var includenumbers = confirm(
    "Do you want to include numbers?"
  );
  // If statement to include to include numbers string to password
  if (includenumbers) {
    requiredKeyString = requiredKeyString.concat(
      numbers
    );
  }
  // Ask the user if they want special chars included in their password
  var includespecialCharacters = confirm(
    "Do you want to include special characters?"
  );
  // If statement to include to include special characters to password
  if (includespecialCharacters) {
    requiredKeyString = requiredKeyString.concat(
      specialCharacters
    );
  }
  // Added a for in order to generated a random character from the requiredKeyStrings depending on the number the user picked at the start
  for (var i = 0; i < lengthPass; i++) {
    var random = Math.floor(Math.random() * requiredKeyString.length);
    passwordGenerated = passwordGenerated.concat(
      // Used charAt to get the random character from the above variable
      requiredKeyString.charAt(random)
    );
    
  }
// Returns to the top
  return passwordGenerated;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
