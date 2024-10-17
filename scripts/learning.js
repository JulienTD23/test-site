const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// Anonymous functions
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch!");
  });
  
document.querySelector("html").addEventListener("click", () => {
    alert("Damn!");
  });

/* setUserName (Long Version)
function setUserName() {
    const myName = prompt("Please enter your name."); 
    localStorage.setItem("name", myName); 
    myHeading.textContent = `Yale is cool, ${myName}`;
    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Yale is cool, ${storedName}`;
      }
  }
prompt: stores user input in a variable from a dialog box
localStorage: API allowing storage in the browser for later
setItem: creates a data item "name" and sets its value to myName
conditional logic: 
      if name data doesn't exist, call setUserName to create it.
      if it does exist, retrieve the name and display it. (for when the user provided it in a previous visit)
*/
