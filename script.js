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
}


function getEquation() {
    let equation = document.querySelector('#equation');
    return equation.textContent;
}


function setEquation() {
    let equation = document.querySelector('#equation');
    equation.textContent = equationString;
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
        equationString += event.target.id;
        setEquation();
    }

    else if (event.target.className == 'operator') {
        if (operatorIsPressed === false) {
            operatorIsPressed = true;
            equationString += event.target.textContent;
            setEquation();
        }
        else {
            calculate();
            equationString = getResult() + event.target.textContent;
            operatorIsPressed = true;
            setEquation();
        }
    }
}


function calculate() {
    const numbers = equationString.match(/\d+/g);
    const operator = equationString.match(/[-+*/]/);
    
    if (numbers !== null) {
        if (numbers[1] !== undefined) {
            let result = operate(Number(numbers[0]), Number(numbers[1]), operator[0])
            setResult(result);
            setDefaultState();
        }

        else {
            setResult(numbers[0]);
            setDefaultState();
        }
    }
}

function setDefaultState() {
    equationString = '';
    setEquation();
    operatorIsPressed = false;
}


let equationString = '';
let operatorIsPressed = false;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', pressButton));
const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', calculate);

