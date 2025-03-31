// Add selectors
let numbers = document.querySelector('.numbers');
let operators = document.querySelector('.operators');
let result = document.querySelector('.result');
let display = document.querySelector('.display');
let clearButton = document.querySelector('.clear');
let firstValue = '';
let secondValue = '';
// 0 = number
// 1 = operator
// 2 = result
let typeOfButton = 0;
let selectedButton = {
    type: 0,
    value: ''
};

// Add event listeners
numbers.addEventListener('click', setNumber);
operators.addEventListener('click', setOperator);
result.addEventListener('click', getResult);
clearButton.addEventListener('click', clear);

function getFirstValue() {
    return firstValue;
}

function getSecondValue() {
    return secondValue;
}
// Add functions
function setNumber(event) {
    // IF IS FIRST VALUE => typeOfButton = 0 and firstValue === empty
    // IF IS SECOND VALUE => typeOfButton = 1 and firstValue NOT empty

    firstValue = event.target.innerHTML;
    console.log(firstValue,secondValue,typeOfButton);
    if(firstValue !== '' && typeOfButton === 1) {
        secondValue = event.target.innerHTML;
        console.log('Ningun valor esta vacio', getFirstValue(), getSecondValue());
    }
    let numberToDisplay = event.target.innerText;
    displayNumber(numberToDisplay);
}

function setOperator(event) {
    typeOfButton = 1;
    display.innerHTML += event.target.innerText;
}

function getResult() {
    typeOfButton = 2;
    display.innerHTML = firstValue + secondValue;
}

function displayNumber(text) {
    if(isNumber()) {
        display.innerHTML += `${text}`;
    }
    if (isOperator()) {
        display.innerHTML += `${text}`;
    }
}

function clear() {
    display.innerHTML = '';
}

function isNumber(value) {
    return selectedButton.type === 0;
}

function isOperator() {
    return selectedButton.type === 1;
}