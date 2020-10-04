//Parent Array
var chrPool = [];

//This adds the click function to the Generate Password Button in the HTML
document.getElementById("generate").onclick = generatePassword


//This function generates the password
function generatePassword(){

  //Prompt 1 selects password length
var selectLength = prompt("Select a password length between 8 and 128");
console.log(selectLength);
var selectLengthInt = parseInt(selectLength);
console.log(selectLength);


  //Confirm 2 adds lowercase letters if boolean is true
var abcLoweryn = confirm("Do you want lower case letters?");
if (abcLoweryn) {
  var abcLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

  chrPool.push(abcLower);
  console.log(chrPool);
  console.log(chrPool.length);
}

  //Confirm 3 adds uppercase letters if boolean is true
var abcUpperyn = confirm("Do you want upper case letters?");

if (abcUpperyn) {
  var abcUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
  chrPool.push(abcUpper);
  console.log(chrPool);
  console.log(chrPool.length);
}


  //Confirm 4 adds numbers if boolean is true
var numyn = confirm("Do you want numbers?");

if (numyn) {
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  chrPool.push(num);
  console.log(chrPool);
  console.log(chrPool.length);
}

  //Confirm 5 adds special characters if boolean is true
var spChryn = confirm("Do you want special characters?");

if (spChryn) {
  var spChr = ["!", "#", "$", "%", "&", "@"];
  chrPool.push(spChr);
  console.log(chrPool);
  console.log(chrPool.length);
}

  //Generates random number between 0 and chrPool.length to select from the 4 possible arrays in the parent array "chrPool"
for (i = 0; i < (selectLengthInt); i++) {
  var strSelect = (Math.floor(Math.random() * (chrPool.length) ));
  
    //Generates a number to select the position in chrPool
  var selection = chrPool[strSelect];
  console.log(selection);
  console.log(selection.length);
  var selectionLength = selection.length;
  
    //Generates a number between 0 and the length of the child arrays (abcLower, abcUpper, num, spChr)
  strSelection = (Math.floor(Math.random() *selectionLength));
  console.log(chrPool[strSelect][strSelection]);
  var password = chrPool[strSelect][strSelection];  

    //Selects the location with the Id #password in the HTML
  var parElement = document.getElementById("password");
    //Creates the password as text to be added to the HTML
  var textToAdd = document.createTextNode(password);
    //Adds the created text to the HTML
  parElement.appendChild(textToAdd);

}
}