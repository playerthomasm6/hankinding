// Assignment Code

var Chrpool = {
arrayOne: [],
arrayTwo: [],
arrayThree: [],
arrayFour: []
};













//prompts start

var selectlength = prompt("Select a password length between 10 and 128");

var abcloweryn = confirm("Do you want lower case letters?");
  if (abcloweryn) {
    var abclower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", 
                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", "z"];
    Chrpools.arrayOne.push(abclower);
    console.log(chrpool);
    }

var abcupperyn = confirm("Do you want upper case letters?");

  if (abcupperyn){
    var abcupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
                "U", "V", "W", "X", "Y", "Z"];
    Chrpool.push(abcupper);
    console.log(chrpool);
    }

var numyn = confirm("Do you want numbers?");

if (numyn) {
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  Chrpool.push(num);
  console.log(chrpool);
  }

var spchryn = confirm("Do you want special characters?");

if (spchr) {
  var spchr = ["!", "#", "$", "%", "&", "@"];
  Chrpool.push(spchr);
  console.log(chrpool);
  }

  for (i=0; i < (selectlength + 1); i++){
  var strselect = (Math.floor(Math.random() *(Chrpool.length)));
  console.log(strselect);

  console.log(Chrpool[strselect])

  }