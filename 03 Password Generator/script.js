var generateBtn = document.querySelector("#generate");
var finalPwd = document.querySelector("#password");

function generatePassword() {
  characters = prompt("How many characters do you want your password to be?", "8");
  charactersInt = parseInt(characters);
  uppercase = prompt ("Do you want uppercase letters?", "Yes");
  special = prompt ("Do you want special characters?", "Yes");
  numbers = prompt ("Do you want numbers?", "Yes");
  lowerList = "abcdefghijklmnopqrstuvwxyz";
  uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  specialList = "!@#$%^&*";
  numbersList = "1234567890";
  upperAndLower = lowerList.concat(uppercaseList);
  lowerAndNumbers = lowerList.concat(numbersList);
  lowerAndSpecial = lowerList.concat(specialList);
  lowerNumbersSpecial = lowerList.concat(numbersList, specialList);
  lettersAndNumbers = upperAndLower.concat(numbersList);
  lettersAndSpecial = upperAndLower.concat(specialList);
  lettersNumbersSpecial = upperAndLower.concat(numbersList, specialList);

  function listToIterate() {
    let list;

    if (uppercase === "Yes" && special === "Yes" && numbers === "Yes") {
      list = lettersNumbersSpecial;
    };

    if (uppercase === "Yes" && special === "Yes" && numbers === "No") {
      list = lettersAndSpecial;
    };

    if (uppercase === "Yes" && special === "No" && numbers === "No") {
      list = upperAndLower;
    };

    if (uppercase === "No" && special === "No" && numbers === "No") {
      list = lowerList;
    };

    if (uppercase === "No" && special === "No" && numbers === "Yes") {
      list = lowerAndNumbers;
    };

    if (uppercase === "No" && special === "Yes" && numbers === "Yes") {
      list = lowerNumbersSpecial;
    };

    if (uppercase === "No" && special === "Yes" && numbers === "No") {
      list = lowerAndSpecial;
    };

    if (uppercase === "Yes" && special === "No" && numbers === "Yes") {
      list = lettersAndNumbers;
    };

    return list;
  }

  password = [];

  for (let i = 0; i < charactersInt; i++) {
    iteratedList = listToIterate();
    randomCharacter = iteratedList.charAt(Math.floor(Math.random() * iteratedList.length));
    password.push(randomCharacter);
  };

  passwordFinal = password.join("");
  
  finalPwd.innerHTML = passwordFinal;
};

generateBtn.addEventListener("click", generatePassword);