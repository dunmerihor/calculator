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


function pressButton(event) {
    if (event.target.id === 'one') {

    }
    else if (event.target.id === 'two') {

    }
    else if (event.target.id === 'three') {
        
    }
    else if (event.target.id === 'four') {
        
    }
    else if (event.target.id === 'five') {
        
    }
    else if (event.target.id === 'six') {
        
    }
    else if (event.target.id === 'seven') {
        
    }
    else if (event.target.id === 'eight') {
        
    }
    else if (event.target.id === 'nine') {
        
    }
    else if (event.target.id === 'zero') {
        
    }
}


function calculate() {
    let equationString = '';
    const buttons = Array.from(document.querySelector('button'));
    buttons.forEach(button => button.addEventListener('click', pressButton));
}
