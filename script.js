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
        return subtract(a, b);
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

function setResult(result) {
    let resultString = document.querySelector('#result');
    resultString.textContent = result;
}


function pressButton(event) {
    if (event.target.id === 'one') {
        equationString += '1';
        setEquation();
    }
    else if (event.target.id === 'two') {
        equationString += '2';
        setEquation();
    }
    else if (event.target.id === 'three') {
        equationString += '3';
        setEquation();
    }
    else if (event.target.id === 'four') {
        equationString += '4';
        setEquation();
    }
    else if (event.target.id === 'five') {
        equationString += '5';
        setEquation();
    }
    else if (event.target.id === 'six') {
        equationString += '6';
        setEquation();
    }
    else if (event.target.id === 'seven') {
        equationString += '7';
        setEquation();
    }
    else if (event.target.id === 'eight') {
        equationString += '8';
        setEquation();
    }
    else if (event.target.id === 'nine') {
        equationString += '9';
        setEquation();
    }
    else if (event.target.id === 'zero') {
        equationString += '0';
        setEquation();
    }

    else if (event.target.id == 'add') {
        if (operatorIsPressed === false) {
            operatorIsPressed = true;
            equationString += '+';
            setEquation();
        }
        else {

        }
    }
    else if (event.target.id == 'subtract') {
        if (operatorIsPressed === false) {
            operatorIsPressed = true;
            equationString += '-';
            setEquation();
        }
        else {

        }
    }
    else if (event.target.id == 'multiply') {
        if (operatorIsPressed === false) {
            operatorIsPressed = true;
            equationString += '*';
            setEquation();
        }
        else {

        }
    }
    else if (event.target.id == 'divide') {
        if (operatorIsPressed === false) {
            operatorIsPressed = true;
            equationString += '/';
            setEquation();
        }
        else {

        }
    }
}


function calculate() {
    const numbers = equationString.match(/\d+/g);
    const operator = equationString.match(/[-+*/]/);
    
    if (numbers !== null) {
        if (numbers[1] !== undefined) {
            if (operator[0] === '+') {
                let result = Number(numbers[0]) + Number(numbers[1]);
                setResult(result);
                setDefaultState();
            }

            if (operator[0] === '-') {
                let result = Number(numbers[0]) - Number(numbers[1]);
                setResult(result);
                setDefaultState();
            }

            if (operator[0] === '*') {
                let result = Number(numbers[0]) * Number(numbers[1]);
                setResult(result);
                setDefaultState();
            }

            if (operator[0] === '/') {
                if (Number(numbers[1]) !== 0) {
                    let result = Number(numbers[0]) / Number(numbers[1]);
                    setResult(result);
                    setDefaultState();
                }
                else {
                    setResult('Can\'t divide by zero');
                    setDefaultState();
                }
            }
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

