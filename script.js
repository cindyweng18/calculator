// Script for Calculator

let input = "";
const display = document.getElementById("display");

for (let i = 0; i < 10; i++) {
    const numberButton = document.createElement("button");
    numberButton.innerHTML = i.toString();
    numberButton.addEventListener("click", function () {
        appendNumber(i.toString());
    });
    document.getElementById("numbers").appendChild(numberButton);
}

function appendNumber(num) {
    const l = input.split(" ");
    const lastChar = l[l.length - 1];

    if (lastChar === "0" && num !== ".") {
        l[l.length - 1] = num;
    } else {
        l[l.length - 1] += num;
    }

    input = l.join(" ");
    display.innerHTML = input;
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
    const l = input.split(" ");
    const lastChar = l[l.length - 1];

    if (!lastChar.includes(".")) {
        input += ".";
        display.innerHTML = input;
    }
}

function clearInput() {
    input = input.slice(0, -1);
    display.innerHTML = input;
}

function toggleSign() {
    const l = input.split(" ");
    const lastChar = l[l.length - 1];

    if (!isNaN(lastChar) && lastChar !== "") {
        if (lastChar.startsWith("-")) {
            l[l.length - 1] = lastChar.slice(1);
        } else {
            l[l.length - 1] = `-${lastChar}`;
        }

        input = l.join(" ");
        display.innerHTML = input;
    }
}