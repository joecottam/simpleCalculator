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
    return (Number(b) == 0) ? "Can't divide by 0" : Number(a) / Number(b);
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
        displayPara.textContent += (numberButton.textContent);
        if (displayPara.textContent.charAt(0) == '0') {
            displayPara.textContent = displayPara.textContent.substring(1);
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

let clearButton = document.querySelector('#button_clear');
clearButton.addEventListener('click', () => {
    resetStrings();
    defaultDisplay();
    clearStyle();
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
       
        operatorButton.style = ("text-shadow: 0 0 5px rgb(170, 162, 39); font-weight: bold; background-color: rgb(123, 181, 235);");
        defaultDisplay();

        
        
       
    });
});

let equalsButton = document.querySelector('#button_equals');
equalsButton.addEventListener('click', () => {
    secondNumber = displayPara.textContent;
    displayPara.textContent = operate(operatorString, firstNumber, secondNumber);
    resetStrings();
    clearStyle();
});

function clearStyle() {
    operatorButtons.forEach((operatorButton) => {
        operatorButton.style = ("text-shadow: none; font-weight: normal; background-color: rgb(88, 129, 168);");
    });  
} // removes style from operator buttons
