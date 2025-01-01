// Edge cases:
// - When zero is at the front of a number

let input = "";
const display = document.getElementById("display");

for (let i = 0; i < 10; i++) {
    const numberButton = document.createElement("button");
    numberButton.innerHTML = i.toString();
    numberButton.addEventListener("click", function() {
        input = input + i.toString();
        display.innerHTML = input;

    })
    document.getElementById('numbers').appendChild(numberButton);
}

function equal() {
    try {
        const result = Function(`'use strict'; return (${input})`)();
        display.innerHTML = result;
        input = result.toString(); 
    } catch (error) {
        display.innerHTML = "Error"; 
        input = "";
    }
}

function operator(op) {
    if (input.length > 0 && !isNaN(input.slice(-1))) {
        input += ` ${op} `;
        display.innerHTML = input;
    }
}

function decimal() {
    input = input + ".";
    display.innerHTML = input;
}

function clearInput() {
    input = input.slice(0, -1);
    display.innerHTML = input;
}