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
    const l = input.split(" ");
    const a = parseInt(l[0]);
    const b = parseInt(l[2]);
    let result;
    switch(l[1]) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }
    display.innerHTML = result;
}

function operator(op) {
    input = input + ` ${op} `;
    display.innerHTML = input;
}