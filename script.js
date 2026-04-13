function checkChar() {
    let ch = document.getElementById("charInput").value;
    let result = document.getElementById("result");

    if (ch === "") {
        result.innerHTML = "Enter a character";
        return;
    }

    // Convert to lowercase for easy checking
    ch = ch.toLowerCase();

    // Check if input is a letter
    if (!/[a-z]/.test(ch)) {
        result.innerHTML = "Please enter a valid alphabet";
    }
    else if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        result.innerHTML = ch + " is a Vowel";
    } 
    else {
        result.innerHTML = ch + " is a Consonant";
    }
}