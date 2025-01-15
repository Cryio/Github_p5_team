// script.js
const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
        console.log(`result is ${display.value}`);
    } catch {
        display.value = 'Error';
    }
}


function clearDisplay() {
    display.value = '';
}