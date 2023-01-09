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
const operatorButtons = Array.from(document.querySelectorAll('operator'));
const currentDisplay = document.getElementById('current');
// const previousDisplay = document.getElementById('previous');


/* Add event listeners for number buttons */

numBtns.forEach(button => {
    button.addEventListener('click', e => {
        const num = e.target.textContent;
        const displayText = currentDisplay.textContent;
        if (displayText == '0') {
            currentDisplay.textContent = num;
        } else {
            currentDisplay.textContent = displayText + num;
        }
    });
});


/* Add event listeners for operator buttons */

let previousNum = null;
let currentOperator = null;

operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        
    });
});