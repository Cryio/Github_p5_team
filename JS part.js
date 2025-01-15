// script.js
const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function addition() {
    
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}