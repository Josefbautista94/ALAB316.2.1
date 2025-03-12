// Create your game here!

let mainEl = document.querySelector("body");

mainEl.style.background = "linear-gradient(#001F3F, #1A2A6C)";
mainEl.style.height = "100vh"; // Full viewport height
mainEl.style.margin = "0";
mainEl.style.backgroundSize = "cover";
mainEl.style.display = "flex";
mainEl.style.justifyContent = "center"; // Centers content horizontally
mainEl.style.alignItems = "center"; // Centers content vertically
mainEl.style.flexDirection = "column"; // Stacks items vertically

let bttn = document.createElement("BUTTON");
bttn.style.padding = "5em 10em";
bttn.style.background = "rgb(197, 130, 58)";
bttn.style.borderRadius = "50px"; // Rounded corners
bttn.innerHTML = "<h1>Start<br> Game</h1>"; // giving mainEl a h1
bttn.style.color = "white";
bttn.style.border = "10px solid rgb(200, 195, 209)";
bttn.onclick = startGame; // This will call startGame() when clicked

mainEl.appendChild(bttn);

let words = ["apples", "water", "elephant","racecar","drums","phone"];
let original = [...words]

function scrambleWords (word){
let split = ""
}

function startGame() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    alert(`Can you get this word right: ${randomWord}`);

    let userInput = window.prompt("What word do you think it is? 👀");

    if (userInput) { // If the user wrote something
        if (userInput.toLowerCase() === randomWord) {
            alert("You guessed the word right! ✅");
        } else {
            alert("Wrong Answer!");
        }
    } else {
        alert("You didn’t write anything.");
    }
}

