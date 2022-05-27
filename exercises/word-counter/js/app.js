
const textInput = document.getElementById('text');
const statsSection = document.getElementById('stat');


textAreaInput.addEventListener('keyup', function (){
  
  //variables
  var textArea = textInput.value;
  var wordCounter = 0;
  var charactersCounter = -1;

  //testing counter
  for (var i = 0; i <= textArea.length; i++){
    if (textArea.charAt(i) == ' '){
      wordCounter++;
      charactersCounter++;
    }
    else{
      charactersCounter++;
    }
  }
// results
  statsSection.innerText = "What you have written: " + wordCounter + ". This is how many characters the word(s) have: " + charactersCounter;
});