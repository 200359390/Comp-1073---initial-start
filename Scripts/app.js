/*JavaScript Lives here*/ 
console.log("App Started - Way to keep up!");
//create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");  

//add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click)

//click function - used as an event handler
function Click() {
    console.log("clicked!")
}