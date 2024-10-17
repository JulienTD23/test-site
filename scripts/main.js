const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sterling.jpg") {
    myImage.setAttribute("src", "images/bass.jpg");
  } else if (mySrc === "images/bass.jpg") {
    myImage.setAttribute("src", "images/sterling.jpg");
  }
};

let myButton = document.getElementById("nameHere");
let mySecondButton = document.getElementById("website");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
}

mySecondButton.onclick = () => {
    goToYale();
}

// condensed version of setUserName
function setUserName() {
  const myName = prompt("What's your name, bro?");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `'cuz Yale rules, ${myName}`;
    myButton.classList.add("hidden");
    mySecondButton.classList.remove("hidden");
  }
}

function goToYale() {
    window.open("https://www.yale.edu/");
}



  