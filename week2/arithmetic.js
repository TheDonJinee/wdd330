function firstFunction() {
    const input = document.getElementById('Input1').value;
    const output = document.getElementById('Output1');
    output.innerHTML = 'Your output: ' + input;
}

function secondFunction() {
    const input = document.getElementById('Input2').value;
    const output = document.getElementById('Output2');
    const input2 = parseInt(input);
    if (input2 !== NaN) {
        output.innerHTML = 'total: ' + whileFunction(input2);
    }
}

function whileFunction(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    return result;
}

function addFunction() {
    const number1 = document.getElementById('Number1').value;
    const number2 = document.getElementById('Number2').value;
    const output = document.getElementById('Output3');
    const value1 = parseFloat(number1);
    const value2 = parseFloat(number2);
    if ((value1 !== NaN) & (value2 !== NaN)) {
        const result = value1 + value2;
        output.innerHTML = 'Total: ' + result;
    }
}

function getNum(value) {
    const value1 = document.getElementById(value).value;
    const value2 = parseFloat(value1);
    if (value2 !== NaN) {
        return value2;
    } else return 0;
}

function updateResult(value) {
    const output = document.getElementById('comOutput');
    output.innerHTML = 'Total: ' + value;
}

function addition(value1, value2) {
    return value1 + value2;
}
const substraction = function(value1, value2) {
    return value1 - value2;
};
const multiplication = (value1, value2) => value1 * value2;

function arithmeticOperation(values) {
    const result = values(
        getNum('comNumber1'),
        getNum('comNumber2')
    );
    updateResult(result);
}
firstFunction();
secondFunction();
whileFunction();
addFunction();
getNum();
updateResult();
addFunction();
substraction();
multiplication();
arithmeticOperation();