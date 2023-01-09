/* Operation Functions */

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) return 'ZERO DIVISION ERROR';
    return a / b;
}

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
}


function updateDisplay(currentVal, previousVal) {

    currentDisplay.textContent = currentVal;
    previousDisplay.textContent = previousVal;

    if (String(currentVal).includes('.')) {
        decimalBtn.disabled = true;
    } else {
        decimalBtn.disabled = false;
    }
}


const numBtns = Array.from(document.querySelectorAll('.num-btn'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const currentDisplay = document.getElementById('current');
const previousDisplay = document.getElementById('previous');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');
const backspaceBtn = document.getElementById('backspace');

let previousNum = null;
let currentNum = null;
let currentOperator = null;


/* Event listeners for number buttons */

numBtns.forEach(button => {
    button.addEventListener('click', e => {
        const num = e.target.textContent;
        const displayText = currentDisplay.textContent;
        if (currentNum == null) {
            updateDisplay(num, previousDisplay.textContent);
        } else {
            updateDisplay(displayText + num, previousDisplay.textContent);
        }
        currentNum = Number(currentDisplay.textContent);
    });
});


/* Event listeners for operator buttons */

operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        
        if (!currentNum) return;

        if (currentOperator) {
            previousNum = operate(currentOperator, previousNum, currentNum);
        } else {
            previousNum = currentNum;
        }

        currentNum = null;
        currentOperator = e.target.textContent;
        updateDisplay('0', `= ${previousNum} ${currentOperator}`);
    });
});


/* Event listeners for unique buttons */

equalsBtn.addEventListener('click', e => {

    if(!currentOperator) return;

    currentNum = operate(currentOperator, previousNum, currentNum);
    previousNum = null;
    currentOperator = null;
    updateDisplay(currentNum, '=');
});

clearBtn.addEventListener('click', e => {
    previousNum = null;
    currentNum = null;
    currentOperator = null;
    updateDisplay('0', '=');
});

decimalBtn.addEventListener('click', e => {
    if (!currentNum) {
        currentNum = 0;
    }
    updateDisplay(currentNum + '.', previousDisplay.textContent);
    currentDisplay.textContent = currentNum + '.';
});

backspaceBtn.addEventListener('click', e => {
    if (currentNum == null) return;

    if (currentDisplay.textContent.length <= 1) {
        currentNum = null;
        updateDisplay('0', previousDisplay.textContent);
    } else {
        const newText = currentDisplay.textContent.slice(0,
                        currentDisplay.textContent.length - 1);
        currentNum = Number(newText);
        updateDisplay(newText, previousDisplay.textContent);
    }
});