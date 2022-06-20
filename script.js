document.addEventListener('DOMContentLoaded', () => {
// starter to set things in Motion

  // 1. create a variable called magic8Ball and set it equal to an empty object
var magic8Ball = [];
  // 2. set the line of code below equal to an array of 5 different answers
  magic8Ball.listOfAnswers = ["yes", "no", "YES QUEEN", "NO QUEEN", "MID AF"];
  // 3. hide the answer element
document.querySelector("#answer").innerHTML = "";
document.querySelector("#answer").classList.add("hide");
  magic8Ball.askQuestion = function(question) {
    // 4. trigger shake animation
    
document.getElementById("8ball").classList.add("eightBall");
setTimeout(function(){
document.getElementById("8ball").classList.remove("eightBall");
}, 1000);
  
    // 5. change image to answer.png
document.getElementById("8ball").src = "/img/answer.png"
    // 6. fade in the answer

    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];
  
document.querySelector("#answer").innerHTML = answer;
document.getElementById("answer").classList.add("hide");
setTimeout(function(){
document.getElementById("answer").classList.remove("hide");
}, 1000);

    // 7. set the answer element's text to the answer variable
   
  };
  
  var onClick = function() {

    // 8. hide the answer element

document.querySelector("#answer").innerHTML = "";
    
    // 9. change the image back to question.png
    
document.getElementById("8ball").src = "/img/question.png"

    setTimeout(function(){
      var question = prompt("ASK A YES/NO QUESTION!");
      magic8Ball.askQuestion(question);
    }, 500);


  };

  // 10. add a click handler on the question button that calls the function onClick
	document.getElementById("questionButton").addEventListener("click", onClick);

});
