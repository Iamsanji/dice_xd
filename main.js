function rollDice() {
  var diceElement1 = document.getElementById('dice1');
  var diceElement2 = document.getElementById('dice2');
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  diceElement1.textContent = randomNumber1;
  diceElement2.textContent = randomNumber2;
  

window.onload = rollDice;
  
  
  diceElement1.style.backgroundColor = 'black';
  diceElement1.style.borderColor = 'white';
  diceElement1.style.color = 'white';
  diceElement2.style.backgroundColor = 'black';
  diceElement2.style.borderColor = 'white';
  diceElement2.style.color = 'white';
}


const changeColorButton = document.getElementById('changeColor');
const body = document.body;

changeColorButton.addEventListener('click', function() {
    body.style.backgroundColor = 'black'; 
});


changeColorButton.addEventListener('click', function() {
  body.style.color = "white";
  
});



