


// // Make click function for dial button to select one option on each of the four rows;
//     // COMPLETED

// // Create timer to count and display backwards from 120 seconds to zero
// // COMPLETED

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// Make click function for dial button to select one option on each of the four rows;
    // COMPLETED

// Create timer to count and display backwards from 120 seconds to zero
// COMPLETED


$("#startClock").click(function(){
    var counter = 60;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("startClock");
          span.innerHTML = counter;
       }
      }, 1000);
    })

    function check() {
        var answer1 = document.quiz.answer1.value;
        var answer2 = document.quiz.answer2.value;
        var answer3 = document.quiz.answer3.value;
        var answer4 = document.quiz.answer4.value;
        var correct = 0;

        if (answer1 == "A") {
            correct++;
        }
        if (answer2 == "C") {
            correct++;
        }
        if (answer3 == "A") {
            correct++;
        }
        if (answer4 == "D") {
            correct++;
        }
        var messages = ["You're a star!", "You're out of this world!!", "Are you lost in space?"];
        var images = ["assets/images/first.gif", "assets/images/second.gif", "assets/images/third.gif"]
        
        var range;
            if (correct < 1) {
                range = 2;
            }
            if (correct > 0 && correct < 3) {
                range = 1;
            }
            if (correct > 3) {
                range = 0;
            }
        document.getElementById("after_submit").style.visibility = "visible";
        
        document.getElementById("message").innerHTML = messages[range];
        document.getElementById("number_correct").innerHTML = "You answered " + correct + " correct.";
        document.getElementById("picture").src = images[range];
    }
