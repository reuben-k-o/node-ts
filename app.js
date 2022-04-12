"use strict";
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const buttonEl = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonEl.addEventListener('click', () => {
    const val1 = num1El.value;
    const val2 = num2El.value;
    const resNumber = add(+val1, +val2);
    const resString = add(val1, val2);
    console.log(resNumber, resString);
    printResult({ val: resNumber, timestamp: new Date() });
});
// console.log(add(1, 6));
// console.log(add('1', '6'));
