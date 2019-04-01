





var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"];
var randomLetter = Math.floor (Math.random()*computerOptions.length);
var computerChoice = computerOptions[randomLetter];
console.log(computerChoice);


var userText = document.getElementById("userChoiceText");
document.onkeyup = function(event) {
 userText.textContent = event.key;
 var userChoice = userText.textContent;
 console.log(userChoice);
};

var wins = 0;
var losses = 0;

if(userChoice === computerChoice){
   wins++;
}
else{
  losses++;
}







 

 

    
