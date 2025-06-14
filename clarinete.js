let clarinetAudio = null;

function playClarinetSoundByKey(key) {
key = normalizeKey(key);

switch (key) {
    case "1":
    playClarinetSound("sounds/clarinete/Dó.mp3");
    break;
    case "2":
    playClarinetSound("sounds/clarinete/Ré.mp3");
    break;
    case "3":
    playClarinetSound("sounds/clarinete/Mi.mp3");
    break;
    case "4":
    playClarinetSound("sounds/clarinete/Fá.mp3");
    break;
    case "5":
    playClarinetSound("sounds/clarinete/Sol.mp3");
    break;
    case "6":
    playClarinetSound("sounds/clarinete/Lá.mp3");
    break;
    case "7":
    playClarinetSound("sounds/clarinete/Si.mp3");
    break;
}
}

function normalizeKey(key) {
const lowerKey = key.toLowerCase();
const numpadMap = {
    numpad1: "1",
    numpad2: "2",
    numpad3: "3",
    numpad4: "4",
    numpad5: "5",
    numpad6: "6",
    numpad7: "7"
};
return numpadMap[lowerKey] || lowerKey;
}

function playClarinetSound(src) {
if (clarinetAudio) {
    clarinetAudio.pause();
    clarinetAudio.currentTime = 0;
}
clarinetAudio = new Audio(src);
clarinetAudio.play();
}

function animateButton(keyText) {
document.querySelectorAll(".notas").forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === keyText.toLowerCase()) {
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 100);
    }
});
}

// Mapeamento de texto para número de tecla
const noteMap = {
"dó": "1",
"ré": "2",
"mi": "3",
"fá": "4",
"sol": "5",
"lá": "6",
"si": "7"
};

// Clique do mouse
document.querySelectorAll(".notas").forEach(button => {
button.addEventListener("click", function () {
    const note = this.textContent.trim().toLowerCase();
    const key = noteMap[note];
    if (key) {
    playClarinetSoundByKey(key);
    animateButton(note);
    }
});
});

// Teclado
document.addEventListener("keydown", function (event) {
playClarinetSoundByKey(event.key);
animateButtonFromKey(event.key);
});

function animateButtonFromKey(key) {
const normalized = normalizeKey(key);
const note = Object.keys(noteMap).find(n => noteMap[n] === normalized);
if (note) animateButton(note);
}
