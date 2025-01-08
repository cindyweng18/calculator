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
        const result = eval(input);
        input = result.toString();
        display.innerHTML = input;
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

let clearTimer;

function clearInput() {
    if (clearTimer) {
        input = ""; 
        clearTimer = null;
    } else {
        input = input.slice(0, -1);
    }
    display.innerHTML = input;
}

document.getElementById("clear").addEventListener("mousedown", () => {
    clearTimer = setTimeout(() => {
        clearInput();
        clearTimer = null;
    }, 500); 
});

document.getElementById("clear").addEventListener("mouseup", () => {
    if (clearTimer) {
        clearInput(); 
        clearTimer = null;
    }
});
function toggleSign() {
    if (!input) return;
    if (input.startsWith("-")) {
        input = input.slice(1);
    } else if (!isNaN(input)) {
        input = `-${input}`;
    }
    display.innerHTML = input;
}

document.addEventListener("keydown", function (event) {
    if (!isNaN(event.key)) {
        input += event.key;
    } else if ("+-*/".includes(event.key)) {
        operator(event.key);
    } else if (event.key === "Enter") {
        equal();
    } else if (event.key === "Backspace") {
        input = input.slice(0, -1);
    } else if (event.key === ".") {
        decimal();
    }
    display.innerHTML = input;
});