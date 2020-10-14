var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
let userInput = document.getElementById("userInput");



//Click to Add
addToDoButton.addEventListener('click',function(){
    if (userInput.value.length > 0) {
        addToDoEvent();
    }
})

//funciton to add Event
function addToDoEvent() {
    var paragraph = document.createElement('p')
    paragraph.innerText = userInput.value;
    toDoContainer.appendChild(paragraph);
    userInput.value="";

    paragraph.addEventListener('click',function() {
        if (paragraph.style.textDecoration == "line-through") {
            
            paragraph.style.textDecoration="none";
          //  paragraph.style.background="rgb(162, 204, 193)";
        }
        else {

            paragraph.style.textDecoration="line-through";
         //   paragraph.style.background="lightgray";
            
        }
    })

    paragraph.addEventListener('dblclick',function() {
        toDoContainer.removeChild(paragraph);
        
    }) 
}

//'Enter' keypress
userInput.addEventListener('keypress',function() {
    if (userInput.value.length > 0 && event.which===13) {
        addToDoEvent();
    }
})