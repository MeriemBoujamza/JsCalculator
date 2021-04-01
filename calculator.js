
let digits = Array.from(document.querySelectorAll(".numbers"));
let operations=Array.from(document.querySelectorAll(".operator"))
let screen= document.querySelector('.calculator-screen');
let deleteButton=document.querySelector(".clear");
let AllClearButton=document.querySelector(".all-clear");
let equalButton=document.querySelector(".equal-sign")
let ANS;
digits.forEach(digit => { digit.addEventListener("click", display)})
operations.forEach(operator => { operator.addEventListener("click", display)})
deleteButton.addEventListener("click",clearElement)
AllClearButton.addEventListener("click",AllClear)
equalButton.addEventListener("click",computeValue)
function display(e) {
    screen.value +=  e.target.textContent;
}
function clearElement() {
   screen.value=screen.value.slice(0,-1);
} 
function AllClear() {
    screen.value="";
    ANS=""; //its a string because i am workin with strings lol
}

function computeValue() {
    
}




/* BASIC MATH */ 

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log('ERROR');
            return 'ERROR';
    }
}

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
    if (b == 0 ) return 'UNDEFINED';
    return a / b;
}
