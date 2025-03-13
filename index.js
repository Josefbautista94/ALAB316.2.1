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
let words = ["apples", "water", "elephant", "racecar", "drums", "phone"]; // creating a random array of words 

// Function to scramble words (Fisher-Yates Shuffle). This will shuffle the letters of a randomly selected word from the array.
// (I needed some assistance, so I cited my resources at the bottom of this function.)
function scrambleWords(word) {
    let wordSplitter = word.split(""); // Convert the word into an array of characters
    for (let i = wordSplitter.length - 1; i > 0; i--) { // for loop is going backwards, i = wordSplitter.length-1 starts at the last letter of the word, to move backwards all the way to the first letter we implemented i >0; i--
        let j = Math.floor(Math.random() * (i + 1)); // Picks a random index in the array of characters, originally Math.random() generates a random number between 0 and 1
        // We're multiplying Math.random() * (i + 1) because Math.random() never reaches 1.
        // If we only used Math.random() * i, the highest possible index would be i - 1, meaning we'd never pick the last element.
        // Example: If `i = 4`, `Math.floor(Math.random() * 4)` only picks `0, 1, 2, 3` (never `4`).
        //Math.floor() removes the decimal and rounds down to the nearest whole number.
        [wordSplitter[i], wordSplitter[j]] = [wordSplitter[j], wordSplitter[i]];
        // This swaps wordSplitter[i] and wordSplitter[j] without needing a temporary variable.
        // Example: If `wordSplitter = ["a", "p", "p", "l", "e"]`, swapping `wordSplitter[4]` and `wordSplitter[2]`
        // changes it to `["a", "p", "e", "l", "p"]

        // This could have also been done like :
        // let split = ["a", "p", "p", "l", "e"];
        // let i = 4, j = 2; // Swap "e" and "p"

        // let temp = split[i]; // Store "e" in temp
        // split[i] = split[j]; // "p" moves to index 4
        // split[j] = temp;     // "e" moves to index 2

        // console.log(split); // ["a", "p", "e", "l", "p"]
    }
    return wordSplitter.join(""); // Convert back to string
}
// Function to scramble words using Fisher-Yates Shuffle
// Source: GeeksforGeeks - "Shuffle a Given Array Using Fisher-Yates Shuffle Algorithm"
// URL: https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm

console.log(scrambleWords(words[Math.floor(Math.random() * words.length)])); // Testing scramble function, we multiply this time by words.length to make sure that last index of the array is included

// Start game function
function startGame() {
    let randomIndex = Math.floor(Math.random() * words.length);
    let chosenWord = words[randomIndex]; // Pick a random word
    let scrambledWord = scrambleWords(chosenWord); // Scramble it

    alert(`Can you unscramble this word: ${scrambledWord}`);

    let userInput = window.prompt(`Current Word : ${scrambledWord}, What word do you think it might be? 👀`);

    if (userInput) { // If the user wrote something
        if (userInput.toLowerCase() === chosenWord) { // Compare with original
            alert("You guessed the word right! ✅");
        } else {
            alert("Wrong Answer!");
        }
    } else {
        alert("You didn’t write anything!");
    }
}
