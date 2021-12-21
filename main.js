const clearBtn = document.querySelector(".clear");
const topNumber = document.querySelector(".top-number");
const mathSymbol = document.querySelector(".math-symbol");
const bottomNumber = document.querySelector(".bottom-number");
const equal = document.querySelector(".equals");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let result = '';

function clearScreen() {
    topNumber.innerHTML = '';
    mathSymbol.innerHTML = '';
    bottomNumber.innerHTML = '';
}

function displayNumber() {
    if(this.textContent === '.' && bottomNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && bottomNumber.innerHTML === '') return bottomNumber.innerHTML = '.0';
        bottomNumber.innerHTML += this.textContent;
    
}

function displayOperator() {
    if(bottomNumber.innerHTML === '' && this.textContent === '-'){
        bottomNumber.innerHTML = '-';
        return;
    } else if (bottomNumber.innerHTML === ''){
        return;
    }

    if(mathSymbol.innerHTML !== ''){
        seeResult();
    }


    topNumber.innerHTML = bottomNumber.textContent;
    mathSymbol.innerHTML = this.textContent;
    bottomNumber.textContent = "";
}

function seeResult() {
    let a = Number(topNumber.textContent);
    let b = Number(bottomNumber.textContent);
    let sign = mathSymbol.textContent;

    switch(sign){
        case '+':
            result = a + b;
        break;
        case '-':
            result = a - b;
        break;
        case '*':
            result = a * b;
        break;
        case '/':
            result = a / b;
        break;
        case 'x^':
            result = a ** b;
        break;
    }

    topNumber.textContent = "";
    mathSymbol.textContent = "";
    bottomNumber.textContent = "";

    bottomNumber.innerHTML = result;
}
    

clearBtn.addEventListener("click", clearScreen);
numbers.forEach((number) => number.addEventListener("click", displayNumber));
operators.forEach((operator) => operator.addEventListener("click", displayOperator));
equal.addEventListener("click", seeResult);





