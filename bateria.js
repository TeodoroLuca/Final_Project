function playSound(key) {
switch (key.toLowerCase()) {
    case "a":
    new Audio("sounds/bateria/crash.mp3").play();
    break;
    case "s":
    new Audio("sounds/bateria/tom1.mp3").play();
    break;
    case "d":
    new Audio("sounds/bateria/snare.mp3").play();
    break;
    case "g":
    new Audio("sounds/bateria/kickbass.mp3").play(); 
    break;
    case "j":
    new Audio("sounds/bateria/tom3.mp3").play(); 
    break;
    case "k":
    new Audio("sounds/bateria/tom2.mp3").play(); 
    break;
    case "l":
    new Audio("sounds/bateria/crash.mp3").play(); 
    break;
}
}

function animateButton(currentKey) {
const activeButton = document.querySelector("." + currentKey.toLowerCase());
if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
    activeButton.classList.remove("pressed");
    }, 100);
}
}

document.querySelectorAll(".drum").forEach(button => {
button.addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
});
});

document.addEventListener("keydown", function (event) {
playSound(event.key);
animateButton(event.key);
});
