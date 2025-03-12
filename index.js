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
mainEl.appendChild(bttn);

let words = ["apples", "water", "elephant","racecar","drums","phone"];
let scramble = []


bttn.addEventListener("click", () => {
    let randomWord = words[Math.floor(Math.random()*words.length)]
    alert(`Can you get this word right : ${randomWord}`)
    let userInput = window.prompt("What word do you think it is ? 👀")
    if (userInput) {// If the user wrote something down
        if (userInput.toLowerCase() === randomWord) {
            alert(`You guessed the word right! ✅`)
        }
        else {
            alert(`Wrong Answer!`)
        }

    }
    else {
        alert(`You didnt't write anything`)
    }
});


