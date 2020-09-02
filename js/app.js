
//The user hovers their mouse over an element

var mouseEvent = document.getElementById('mouseEvent');
mouseEvent.addEventListener('mouseover', function(){
    mouseEvent.style.color = 'red';
    mouseEvent.style.fontSize = '40px';

});
mouseEvent.addEventListener('mouseout', function(){
    mouseEvent.style.fontSize = '30px';
     mouseEvent.style.color = 'black';
 });

 //The user clicks an element

var headerElement = document.getElementById('keyEvent');
headerElement.addEventListener('click', function () {
    headerElement.style.color = 'green';


});
//The user presses the space key on their keyboard

var bodyElement = document.getElementById("body-content")
bodyElement.addEventListener('keypress', function(eventDetails) {

    if (eventDetails.code == "Space") {
        bodyElement.style.background = 'cornflowerblue';
        alert("You pressed the spacebar");
    }
    
});




