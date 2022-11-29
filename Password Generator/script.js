var generator = document.querySelector(".gen");
var finalPassword = document.querySelector("#thepassword")

generator.addEventListener("click", function() {
    var pwLength = prompt("How long do you want your password to be? Pick a number between 8 and 128.")
    var pwLowercase = prompt("Do you want your password to have lowercase letters? Yes or No.")
    var pwUppercase = prompt("Do you want your password to have uppercase letters?")
    var pwNumbers = prompt("Do you want your password to have numbers?")
    var pwSpecialCharacters = prompt("Do you want your password to have special characters?")
    var randomNumber = Math.random()
        finalPassword.textContent = randomNumber
    }
);