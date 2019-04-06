


var wins = 0;
var losses = 0;
var guessesLeft =10;
var userText= "";

document.getElementById("winsText").innerText = wins;
document.getElementById("lossesText").innerText = losses;
document.getElementById("guessesLeftText").innerText = guessesLeft;

var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"];
var randomLetter = Math.floor (Math.random()*computerOptions.length);
var computerChoice = computerOptions[randomLetter];
console.log("This is the computer choice=" + computerChoice);





var userText = document.getElementById("userChoiceText");
 document.onkeyup = function(event) {
  userText.innerText = event.key;
  var userChoice = userText.innerText;
   console.log("This is the user choice=" + userChoice);
  
  



  if(userChoice === computerChoice){
    wins++;
    document.getElementById("winsText").innerText = wins;
  }
   else{
   losses++;
   document.getElementById("lossesText").innerText = losses;
   
  }
  if (userChoice){
    guessesLeft--;
    document.getElementById("guessesLeftText").innerText = guessesLeft;

  }

  var reset = function() {
    guessesLeft = 10;
  
    computerChoice = computerOptions[randomLetter];
    win = 0;
    losses = 0;
  };

  if (guessesLeft===0){
    reset();
  
  };



  }





 

 

    
