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
    return (Number(b) == 0) ? "Cannot divide by 0" : Number(a) / Number(b);
}
function operate(operator, a, b) {

    if (operator == 'button_substraction') {
        return substract(a, b);
    } else if (operator == 'button_multiply') {
        return multiply(a, b);
    } else if (operator == 'button_divide') {
        return divide(a, b);
    } else if (operator == 'button_addition') {
        return add(a, b);
    }

}
let firstNumber = '';
let secondNumber = '';
let operatorString = '';
let numberButtons = document.querySelectorAll('.number_buttons');
let displayPara = document.querySelector('p');

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        decimalPointCheck();
        displayPara.textContent += (numberButton.textContent);
        decimalPointCheck();
        if (displayPara.textContent.charAt(0) == '0') {
            displayPara.textContent = displayPara.textContent.substring(1);
        }
        if (displayPara.textContent.length > 14) {
            displayPara.textContent = displayPara.textContent.substring(0, displayPara.textContent.length - 1);
        }
    });
});

function defaultDisplay() {
    displayPara.textContent = "0";
}

function resetStrings() {
    operatorString = '';
    firstNumber = '';
    secondNumber = '';
} // resets strings calculator uses for calcs to default values ''.

let displayDiv = document.querySelector('#display');

let clearButton = document.querySelector('#button_clear');
clearButton.addEventListener('click', () => {
    displayDiv.style = 'font-size: 50px'
    resetStrings();
    defaultDisplay();
    clearStyle();
    decimalPointCheck();
});

let operatorButtons = document.querySelectorAll('.operator_buttons')
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (firstNumber == '') {
            firstNumber = displayPara.textContent;
        } else if (firstNumber !== '') {
            firstNumber = operate(operatorString, firstNumber, displayPara.textContent);
            clearStyle()
        }
        operatorString = operatorButton.id;

        operatorButton.classList.add('operator_buttons_select');
        defaultDisplay();
        decimalPointCheck();




    });
});

let equalsButton = document.querySelector('#button_equals');
equalsButton.addEventListener('click', () => {
    secondNumber = displayPara.textContent;
    if (operatorString === '' && firstNumber === '') {
        displayPara.textContent = secondNumber;
    } else {
        displayPara.textContent = rounding(operate(operatorString, firstNumber, secondNumber));
    }
    if (displayPara.textContent == "Cannot divide by 0") {
        displayDiv.style = 'font-size: 25px';
    } else if (displayPara.textContent.length > 14) {
        displayPara.textContent = 'Too many chars to display. Press clear button to continue';
        displayDiv.style = 'font-size: 25px';
    }
  
    resetStrings();
    clearStyle();
});

function clearStyle() {
    operatorButtons.forEach((operatorButton) => {
        operatorButton.classList.remove('operator_buttons_select');


    });
} // removed style from operator buttons

function rounding(num) {
    let maxChars = 13;
    let roundedNumber;
    let numString = num.toString();
    if (numString.includes('.')) {
        let numStringArr = numString.split('.');
        maxChars -= numStringArr[0].length;
        roundedNumber = +num.toFixed(maxChars);
    } else {
        roundedNumber = num;
    }
    return roundedNumber

} // rounds numbers to dynamic number of decimal places ensuring that the maximum characters of display is always 14



function decimalPointCheck() {
    let decimalButton = document.getElementById('button_decimal');
    if (displayPara.textContent.includes('.')) {
        decimalButton.disabled = true;
    } else {
        decimalButton.disabled = false;
    }
} // disables decimal button if display already contains decimal point

let backspaceButton = document.querySelector('#button_backspace');
backspaceButton.addEventListener('click', () => {
    if (displayPara.textContent.length === 1) {
        displayPara.textContent = 0;
    } else {
        displayPara.textContent = displayPara.textContent.substring(0, displayPara.textContent.length - 1);
    } 
  });

