// on click output prompt for password criteria

let password = [];
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
let finalPass = [];

function passPrompt() {
  alert("Please select the criteria for your password.");
  // prompt user to input password length between 8 and 128
  var passLen = prompt(
    "Please choose a password length between 8 and 128 characters."
  );
  // confirm if password can contain lowercase, uppercase, numeric, and/or special characters
  var upper = confirm("Would you like to include uppercase letters?");
  var lower = confirm("Would you like to include lowercase letters?");
  var numer = confirm("Would you like to include numeric values?");
  var spec = confirm("Would you like to include special characters?");
  switch (upper) {
    case true:
      password = password.concat(uppercase);
      break;
  }
  switch (lower) {
    case true:
      password = password.concat(lowercase);
      break;
  }
  switch (numer) {
    case true:
      password = password.concat(numeric);
      break;
  }
  switch (spec) {
    case true:
      password = password.concat(special);
      break;
  }

  for (var i = 0; i < passLen; i++) {
    finalPass = finalPass.concat(
      password[Math.floor(Math.random() * password.length)]
    );
  }

  return finalPass;
  // if password is outside of required length output an error
  // once all criteria is entered generate and return a password to the page
  // if upper, lower, numer, and spec = true then generate pass with all for with length of passLen

  // }
}