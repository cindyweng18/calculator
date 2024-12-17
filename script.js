let input = "";

for (let i = 0; i < 10; i++) {
    const numberButton = document.createElement("button");
    numberButton.innerHTML = i.toString();
    numberButton.addEventListener("click", function() {
        input = input + i.toString();
        const display = document.getElementById("display");
        display.innerHTML = input;

    })
    document.body.appendChild(numberButton);
}


function add() {
    alert("adding");
}

function subtract() {
    alert("subtracting");
}

function multiply() {
    alert("multiplying");
}

function divide() {
    alert("dividing");
}