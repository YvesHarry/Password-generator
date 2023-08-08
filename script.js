// All variables I will use to generate the password

    var Length = 8;
    var choice = [];
    
    var specialChar = ['!', '@','#','$','%','^','&','*','(',')','-','[',']','{','}'];
    var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
    var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z','W'];
    var numeric = ['1','2','3','4','5','6','7','8','9','0'];


// Get references to the #generate element

    var generateBtn = document.querySelector("#generate");


// Add event listener to generate prompts after clicking the button

    generateBtn.addEventListener("click", writePassword);


// Creating a function to pop up the prompts.

    function prompts(){
      choice = []; // Every time I get prompt, I reset the choice array to empty.
    
      Length = parseInt(prompt('How many characters would you like the password to be?'));     
    
      if (isNaN(Length) || Length < 8 || Length > 128) {
        alert ('Character length has to be a number between 8 to 128. Please try again.'); 
        return false; // Making sure the answer is a number, not a string.
      }
    
// The other prompts.   
      
      if (confirm('Would like to include lowercase letters in your password?')) {
          choice = choice.concat(lowercase);
      }
       
      if (confirm('Would like to include uppercase letters in your password?')) {
        choice = choice.concat(uppercase);
      }
    
      if (confirm('Would like to include special characters in your password?')) {
        choice = choice.concat(specialChar);
      }
    
      if (confirm('Would like to include numbers in your password?')) {
        choice = choice.concat(numeric);
      }
    return true;
    }


// Generating password based on the prompts.

    function generatePassword() {
        var password = '';
        // Creating a loop.
        for ( var i = 0; i < Length; i++) {
        var randomValue = Math.floor (Math.random() * choice.length);
          password = password + choice [randomValue];
        }
        return password;
      }


// Writing password to the #password input.

      function writePassword() {
        var rightPrompts = prompts(); // Will be true or false.
        var passwordText = document.querySelector("#password");
      
        if (rightPrompts) {
            var newPassword = generatePassword();
        passwordText.value = newPassword;
      } else {
        passwordText.value = '';
      }
    }
