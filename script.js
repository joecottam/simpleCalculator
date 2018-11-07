function add(a, b) {
    return Number(a) + Number(b)
}

function substract(a, b) {
    return Number(a) - Number(b)
}
function multiply(a, b) {
    return Number(a) * Number(b)
}
function divide(a, b) {
    return (Number(b) == 0) ? "Cannot divide by zero" : Number(a) / Number(b);
}
function operate(operator, a, b) {
    if (operator == 'button_addition') {
        return add(a, b);
    } else if (operator == 'button_substraction') {
        return substract(a, b);
    } else if (operator == 'button_multiply') {
        return multiply(a, b);
    } else if (operator == 'button_divide') {
        return divide(a, b);
    }

}
let firstNumber;
let secondNumber;
let operatorString;
let numberButtons = document.querySelectorAll('.number_buttons');
let displayPara = document.querySelector('p');

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (displayPara.textContent == '0') {
            clearDisplay();
        }
        displayPara.textContent += (numberButton.textContent);
    });

});

function defaultDisplay() {
    displayPara.textContent = "0";
}

function clearDisplay() {
    displayPara.textContent = "";
}

let clearButton = document.querySelector('#button_clear');
clearButton.addEventListener('click', () => {
    defaultDisplay();
});

let operatorButtons = document.querySelectorAll('.operator_buttons')
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operatorString = operatorButton.id;
        firstNumber = displayPara.textContent;
        defaultDisplay();
    });
});

let equalsButton = document.querySelector('#button_equals');
equalsButton.addEventListener('click', () => {
    secondNumber = displayPara.textContent;
    displayPara.textContent = operate(operatorString, firstNumber, secondNumber);

});

