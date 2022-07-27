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
    if (b === 0) {
        return 'Can\'t divide by zero';
    }
    return a / b;
}


function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
    else {
        return b;
    }
}


function getResult() {
    let resultString = document.querySelector('#result');
    return resultString.textContent;
}


function setResult(result) {
    let resultString = document.querySelector('#result');
    resultString.textContent = result;
}


function pressButton(event) {
    if (event.target.className === 'digit') {
        if (newLine === false && pointIsPressed === false) {
            currentNumber = Number(`${currentNumber}${event.target.id}`);
            setResult(currentNumber);
        }
        else if (newLine === false && pointIsPressed === true) {
            currentNumber = Number(`${currentNumber}.${event.target.id}`);
            pointIsPressed = false;
            setResult(currentNumber);
        }
        else {
            lastNumber = currentNumber;
            currentNumber = Number(`${event.target.id}`);
            newLine = false;
            setResult(currentNumber);
        }
    }

    else if (event.target.className == 'operator') {
        if (operatorIsPressed === false) {
            lastNumber = currentNumber;
            operator = event.target.textContent;
            currentNumber = 0;
            newLine = false;
            operatorIsPressed = true;
            setResult(currentNumber);
        }
        else {
            calculate();
            lastNumber = currentNumber;
            currentNumber = 0;
            operator = event.target.textContent;
            newLine = false;
            operatorIsPressed = true;
        }
    }
}


function calculate() {    
    let result = operate(lastNumber, currentNumber, operator);
    currentNumber = result;
    setResult(result);
    operator = null;
    newLine = true;
    operatorIsPressed = false;
}


function deleteAll() {
    operatorIsPressed = false;
    lastNumber = 0;
    currentNumber = 0;
    newLine = false;
    setResult(currentNumber);
}


function switchPoint() {
    if (currentNumber % 1 === 0) {
        pointIsPressed = true;
    }
}


let operator = null;
let lastNumber = 0;
let currentNumber = 0;
let newLine = false;
let operatorIsPressed = false;
let pointIsPressed = false;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', pressButton));

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', calculate);

const pointButton = document.querySelector('#point');
pointButton.addEventListener('click', switchPoint);

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', deleteAll);
