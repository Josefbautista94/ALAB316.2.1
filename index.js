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

// Create the button
let bttn = document.createElement("button");
bttn.style.padding = "5em 10em";
bttn.style.background = "rgb(197, 130, 58)";
bttn.style.borderRadius = "50px"; // Rounded corners
bttn.innerText = "Start Game"; // Fixed innerHTML issue
bttn.style.color = "white";
bttn.style.border = "10px solid rgb(200, 195, 209)";
bttn.onclick = startGame; // This will call startGame() when clicked

mainEl.appendChild(bttn);

// Word list
let words = ["apples", "water", "elephant", "racecar", "drums", "phone"];

// Function to scramble words (Fisher-Yates Shuffle)
function scrambleWords(word) {
    let split = word.split(""); // Convert the word into an array of characters
    for (let i = split.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Pick a random index
        [split[i], split[j]] = [split[j], split[i]]; // Swap characters
    }
    return split.join(""); // Convert back to string
}
// Function to scramble words using Fisher-Yates Shuffle
// Source: GeeksforGeeks - "Shuffle a Given Array Using Fisher-Yates Shuffle Algorithm"
// URL: https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm

console.log(scrambleWords(words[Math.floor(Math.random() * words.length)])); // Test scramble function

// Start game function
function startGame() {
    let randomIndex = Math.floor(Math.random() * words.length);
    let chosenWord = words[randomIndex]; // Pick a random word
    let scrambledWord = scrambleWords(chosenWord); // Scramble it

    alert(`Can you unscramble this word: ${scrambledWord}`);

    let userInput = window.prompt(`Current Word : ${scrambledWord}, What word do you think it is? 👀`);

    if (userInput) { // If the user wrote something
        if (userInput.toLowerCase() === chosenWord) { // Compare with original
            alert("You guessed the word right! ✅");
        } else {
            alert("Wrong Answer!");
        }
    } else {
        alert("You didn’t write anything.");
    }
}
