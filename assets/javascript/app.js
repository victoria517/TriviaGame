// Make click function for dial button to select one option on each of the four rows;
    // COMPLETED

// Create timer to count and display backwards from 120 seconds to zero
// COMPLETED


$("#startClock").click(function(){
    var counter = 8;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("startClock");
          span.innerHTML = counter;
       }

    //    This is where you display correct and incorrect answers
       if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
        }
      }, 1000);

//     function myFunction(){
//     var myWindow = window.open("", "_self");
//     if (counter === 0) {
//     myWindow.document.innerHTML("<p>Answers Correct: + 'total' </p>");
// }
//     })}}
