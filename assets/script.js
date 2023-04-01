// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  var randompassword = [];
  var lengthofpwd = prompt("How many characters would you like the password to contain?");

  if (lengthofpwd <8 && lengthofpwd!== null) {
     alert("Password length should atleast be 8 characters");
     writePassword();
  }
  else if (lengthofpwd >128){
      alert("Password length sould be between 8 - 128 characters");
      writePassword();
  }
  else if (lengthofpwd== null){
      alert("Thank you for Trying!!")
  }
  else if(lengthofpwd>=8 || lengthofpwd <=128){
    var confirmspecialcharacters = confirm(" Click ok to confirm including Special Characters");
    var confirmnumbers = confirm(" Click ok to confirm to include numbers");
    var confirmuppercaseletters = confirm(" Click ok to confirm including UPPERcase letters");
    var confirmlowercaseletters = confirm(" Click ok to confirm including lowercase letters");

    if ((!confirmspecialcharacters)&&(!confirmnumbers)&&(!confirmuppercaseletters)&&(!confirmlowercaseletters)){
      alert("Please select atleast one character type");
      writePassword();
    }
    
    var splcharacters = ["!","@","#","$","%","&","*"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var upcaselet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowcaselett = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for (var i=0;i< lengthofpwd; i){
      
      if ((confirmspecialcharacters) && (i<lengthofpwd)){
        var index1= Math.floor(Math.random() * splcharacters.length);
        randompassword.push(splcharacters[index1]);
        i++;
      }
      if ((confirmnumbers) && (i<lengthofpwd)){
         var index2= Math.floor(Math.random() * numbers.length);
        randompassword.push(numbers[index2]);
        i++;
      }
      if ((confirmuppercaseletters) && (i<lengthofpwd)){
        var index3= Math.floor(Math.random() * upcaselet.length);
        randompassword.push(upcaselet[index3]);
        i++;
      }
      if ((confirmlowercaseletters) && (i<lengthofpwd)){
        var index4= Math.floor(Math.random() * lowcaselett.length);
        randompassword.push(lowcaselett[index4]);
        i++;
      }
   }  
  }
return (randompassword.join(""));
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
