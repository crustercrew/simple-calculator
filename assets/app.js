const screen = document.querySelector(".calculator-screen");

const updateScreen = (number)=>{
    screen.value = number;
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
    }) 
});

const inputOperator = (operators) =>{
    if (calculationOperation === '') {
        prevNumber = currentNumber;
    }
    calculationOperation = operators;
    currentNumber = '0';
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener('click',() =>{
    calculate();
    updateScreen(currentNumber);
});

const number = document.querySelectorAll(".number");

number.forEach((numbers)=>{
    numbers.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

let prevNumber = '';
let calculationOperation = '';
let currentNumber = '0';

const inputNumber = (number)=>{
    if(currentNumber === '0'){
        currentNumber = number;
    } else{
        currentNumber += number;
    }
}

const calculate = ()=>{
    let result = '';
    switch(calculationOperation){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperation = '';
}

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click',()=>{
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = ()=>{
    prevNumber = '';
    calculationOperation = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
const inputDecimal = (dot) =>{
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click',()=>{
    inputPercentage(currentNumber);
    updateScreen(currentNumber);
});
const inputPercentage = ()=>{
    if (currentNumber === 0) {
        return;
    }
    currentNumber /= 100;
}
const remove = document.querySelector('.delete');
remove.addEventListener('click',()=>{
    removecurrent();
    updateScreen(currentNumber);
})

const removecurrent = ()=>{
    currentNumber = '0';
}
const pangkat = document.querySelector('.perpangkatan');
pangkat.addEventListener('click',()=>{
    hitungpangkat(currentNumber);
    updateScreen(currentNumber);
})
const hitungpangkat = ()=>{
    if (currentNumber === 0) {
        return;
    }
    currentNumber **= 2;
}
const pecahanan = document.querySelector('.pecahan');
pecahanan.addEventListener('click',()=>{
    updateScreen(hitungpecahan(currentNumber));
})
const hitungpecahan = ()=>{
    let pecahan = 1 / currentNumber;
    return pecahan;
}

const akarpangkat = document.querySelector('.akar-pangkat');
akarpangkat.addEventListener('click',()=>{
    updateScreen(hitungakar(currentNumber));
})
const hitungakar = ()=>{
    let akar = Math.sqrt(currentNumber);
    return akar;
}