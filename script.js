// Click event button alert. part 1
const alertButton = document.getElementById("mybutton");
alertButton.addEventListener("click", function () {
 alert("Button clicked successfully");
});

// Second part

// click event aan de tweede button

const tweedeButtonClickEvent = function() {
 const alertButton = document.getElementById("change-background-button");
 alertButton.addEventListener("click", function() {
  alert(" Second Button Clicked");
 });
};

const tweedeButtonChangeColor = function() {
 const changeToRed = document.getElementById("change-background-button");
 changeToRed.classList.add(".red-background");
 changeToRed.addEventListener("click", function() {
 });
 };

// third part
const toggleColor = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};
const attachEventToChangeColorButton = function() {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        toggleColor();
    });
};
tweedeButtonClickEvent();tweedeButtonChangeColor();
attachEventToChangeColorButton();