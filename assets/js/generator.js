// on click output prompt for password criteria
let generatorElement = document.querySelector("#generate");
let password = [];
// create arrays for lowercase, uppercase, numeric, and special characters
let lowercase = [
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
  "z",
];
let uppercase = [
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
  "Z",
];
let numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "`",
  "~",
  "-",
  "_",
  "+",
  "=",
];
let upper;
let lower;
let numer;
let spec;
generatorElement.addEventListener("click", passPrompt);

function passPrompt() {
  alert("Please select the criteria for your password.");
  // prompt user to input password length between 8 and 128
  let passLen = prompt(
    "Please choose a password length between 8 and 128 characters."
  );
  // if password is outside of required length output an error
  while (passLen < 8 || passLen > 128) {
    passLen = prompt(
      "ERROR! Password length must be between 8 and 128 characters."
    );
  }
  // confirm if password can contain lowercase, uppercase, numeric, and/or special characters
  function prompts() {
    upper = confirm("Would you like to include uppercase letters?");
    lower = confirm("Would you like to include lowercase letters?");
    numer = confirm("Would you like to include numeric values?");
    spec = confirm("Would you like to include special characters?");
  }
  // user must select at least one character type
  prompts();
  while (
    upper === false &&
    lower === false &&
    numer === false &&
    spec === false
  ) {
    alert("You must select at least ONE character type!");
    prompts();
  }
  // evaluate which criteria the user wants and add those to the password array

  if (upper) {
    password = password.concat(uppercase);
  }
  if (lower) {
    password = password.concat(lowercase);
  }
  if (numer) {
    password = password.concat(numeric);
  }
  if (spec) {
    password = password.concat(special);
  }
  //finalPass will be the final password to be output for the user
  let finalPass = "";
  // loop through the password array and choose a random index each time until you hit the length of the password
  for (let i = 0; i < passLen; i++) {
    finalPass += password[Math.floor(Math.random() * password.length)];
  }

  // convert finalPass to a string and remove the commas
  document.getElementById("printPass").innerHTML = finalPass;
}
