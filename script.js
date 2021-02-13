
// Assignment Code


var generateBtn = document.querySelector("#generate");

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
};

function randomSpecial() {
  var specials = "!@#$%^&*()_+-=[]{};:<>,.?/";
  return specials[Math.floor(Math.random() * specials.length)];
};

function validateLength(length) {
  console.log(length);
  // length = parseInt(length);

  if (isNaN(length)) {
    alert("Please enter a number!");
    return false;
  };

  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128 characters!");
    return false;
  };
  
  return true;
};



// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var length = prompt("How long do you want your password? It should be between 8 and 128 characters.", "10");
  while (!validateLength(length)) {
    length = prompt("How long do you want your password? It should be between 8 and 128 characters.", "10");
  };

  var inclLower = confirm("Should lowercase letters be included?");
  var inclUpper = confirm("Should uppercase letters be included?");
  var inclNumber = confirm("Should numbers be included?");
  var inclSpecial = confirm("Should special characters be included?");




  var password = generatePassword(length, inclLower, inclUpper, inclNumber, inclSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

});

function generatePassword(length, lower, upper, number, special){
  let generatedPassword = "";
  var typesCount = lower + upper + number + special;
  typesArray = [];

  if (lower) {
    typesArray.push("lower");
  };

  if (upper) {
    typesArray.push("upper");
  };
  
  if (number) {
    typesArray.push("number");
  };
  
  if (special) {
    typesArray.push("special");
  };

  console.log(typesArray);

  if(typesCount === 0) {
    return 'nice try. no valid password.';
  };

  for (let i = 0; i < length; i++) {
    var rnd = Math.floor(Math.random() * typesArray.length);
    var nextType = typesArray[rnd];
    console.log(nextType);
    var randomFunct = {
    lower: randomLower(),
    upper: randomUpper(),
    number: randomNumber(),
    special: randomSpecial()
	};
    var char = randomFunct[nextType];
    
    generatedPassword += char;
  };
console.log(generatedPassword);
return generatedPassword.slice(0,length);

}
