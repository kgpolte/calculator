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


const numBtns = Array.from(document.querySelectorAll('.num-btn'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const currentDisplay = document.getElementById('current');
const previousDisplay = document.getElementById('previous');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

let previousNum = null;
let currentNum = null;
let currentOperator = null;


/* Event listeners for number buttons */

numBtns.forEach(button => {
    button.addEventListener('click', e => {
        const num = e.target.textContent;
        const displayText = currentDisplay.textContent;
        if (currentNum == null) {
            currentDisplay.textContent = num;
        } else {
            currentDisplay.textContent = displayText + num;
        }
        currentNum = parseInt(currentDisplay.textContent);
    });
});


/* Event listeners for operator buttons */

operatorButtons.forEach(button => {
    console.log(button);

    button.addEventListener('click', e => {
        
        if (!currentNum) return;

        if (currentOperator) {
            previousNum = operate(currentOperator, previousNum, currentNum);
        } else {
            previousNum = currentNum;
        }

        currentNum = null;
        currentOperator = e.target.textContent;
        currentDisplay.textContent = '0';
        previousDisplay.textContent = `${previousNum} ${currentOperator}`;
    });
});


/* Event listeners for unique buttons */

equalsBtn.addEventListener('click', e => {

    if(!currentOperator) return;

    currentNum = operate(currentOperator, previousNum, currentNum);
    previousNum = null;
    currentOperator = null;
    previousDisplay.textContent = '=';
    currentDisplay.textContent = currentNum;
});