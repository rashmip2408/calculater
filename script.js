const calculator = document.querySelector('.calculator');
const result = calculator.querySelector('.result');
const buttons = calculator.querySelectorAll('.button');
const backspaceButton = document.querySelector('.backspace');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            result.value = '';
        } else if (button.classList.contains('equal')) {
            result.value = eval(result.value);
        } else {
            appendNumber(button.value, result);
        }
    });
});

function isOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/';
}

function appendNumber(number, input) {
    if (input.value === '0') {
        input.value = number;
    } else {
        input.value += number;
    }
}

backspaceButton.addEventListener('click', () => {
    let value = result.value;

    // remove the last character from the input value
    result.value = value.substring(0, value.length - 1);
});
