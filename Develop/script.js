// Assignment Code

var chrPool = [];

//prompts start

document.getElementById("generate").onclick = generatePassword

function generatePassword(){

var selectLength = prompt("Select a password length between 10 and 128");
console.log(selectLength);
var selectLengthInt = parseInt(selectLength);
console.log(selectLength);

var abcLoweryn = confirm("Do you want lower case letters?");
if (abcLoweryn) {
  var abcLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

  chrPool.push(abcLower);
  console.log(chrPool);
  console.log(chrPool.length);
}

var abcUpperyn = confirm("Do you want upper case letters?");

if (abcUpperyn) {
  var abcUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
  chrPool.push(abcUpper);
  console.log(chrPool);
  console.log(chrPool.length);
}

var numyn = confirm("Do you want numbers?");

if (numyn) {
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  chrPool.push(num);
  console.log(chrPool);
  console.log(chrPool.length);
}

var spChryn = confirm("Do you want special characters?");

if (spChryn) {
  var spChr = ["!", "#", "$", "%", "&", "@"];
  chrPool.push(spChr);
  console.log(chrPool);
  console.log(chrPool.length);
}


for (i = 0; i < (selectLengthInt); i++) {
  var strSelect = (Math.floor(Math.random() * (chrPool.length) ));
  
  //0, 1, 2, 3
  var selection = chrPool[strSelect];
  console.log(selection);
  console.log(selection.length);
  var selectionLength = selection.length;
  
  
  strSelection = (Math.floor(Math.random() *selectionLength));
  console.log(chrPool[strSelect][strSelection]);
  var password = chrPool[strSelect][strSelection];  

  var parElement = document.getElementById("password");
  var textToAdd = document.createTextNode(password);
  parElement.appendChild(textToAdd);

}
}