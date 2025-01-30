// VARIABLES & DATA TYPES
let userName = "John Doe";
let userAge = 25;
let isStudent = true;
let hobbies = ["Reading", "Gaming", "Coding"];
let person = { name: "Alice", age: 22 };

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${userAge} (Type: ${typeof userAge})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// FUNCTION: Simple Calculator
function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        default: result = "Invalid operation";
    }

    document.getElementById("calc-result").textContent = result;
}

// FUNCTION: Check Voting Eligibility
function checkVotingEligibility() {
    let age = parseInt(document.getElementById("ageInput").value);
    let message = age >= 18 ? "✅ You are eligible to vote!" : "❌ You are not old enough to vote.";
    document.getElementById("vote-result").textContent = message;
}

// FUNCTION: Animated Number Counter (Loops)
function startCounting() {
    let counter = document.getElementById("counter");
    counter.textContent = "0";
    let count = 1;

    let interval = setInterval(() => {
        counter.textContent = count;
        count++;
        if (count > 10) clearInterval(interval);
    }, 500);
}

// DOM MANIPULATION: Dynamic Content
document.getElementById("dynamic-content").innerHTML = `
    <p style="color: green;">This content was dynamically added with JavaScript! 🎉</p>
`;

// EVENT LISTENERS FOR INTERACTIONS
document.getElementById("dynamic-content").addEventListener("mouseenter", function() {
    this.style.background = "#d4edda";
    this.style.padding = "10px";
});
document.getElementById("dynamic-content").addEventListener("mouseleave", function() {
    this.style.background = "transparent";
});
