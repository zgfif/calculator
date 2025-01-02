import './styles.css';

document.addEventListener('DOMContentLoaded', function() {
    const resultBlock = document.querySelector('#input_field');
    const btns = document.querySelectorAll('.btn');
    let expression = [];
    let currentNumber = '';

    
    for (const btn of btns) {
        btn.addEventListener('click', function(event) {
            let typeOfButton = event.target.getAttribute('data-type'),
                value = event.target.getAttribute('data-value');
                       
            if (typeOfButton == 'operation') {
                if (currentNumber != '') {
                    expression.push(currentNumber);
                    expression.push(value);
                    currentNumber = '';
                }

                console.log('expression: ', expression);

            } else if (typeOfButton == 'number') {
                currentNumber += value;
                console.log(currentNumber);
                console.log('expression: ', expression);
            
            } else if (typeOfButton == 'point') {
                if (currentNumber !='' && !currentNumber.includes('.')) {
                    currentNumber+= value;
                    console.log(currentNumber);
                    console.log('expression: ', expression);
                }

            } else if (typeOfButton == 'eval') {
                expression.push(currentNumber);
                console.log('expression: ', expression);
                let result 
                result = calculate(expression);
                expression = [];
                currentNumber = '';
                
                if (result != 0) {
                    resultBlock.textContent = result;
                }
                

            } else if (typeOfButton == 'ac') {
                expression = [];
                currentNumber = '';
                console.log('expression: ', expression);
                resultBlock.textContent = 0;
            }

        });
    }

});


function clearInput() {
    document.querySelector('#input_field').textContent = '0';
}


function calculate(arr) {
    let result = 0;
    
    if (arr.length == 3) {
        let mathOperation = arr[1];
        let number1 = parseFloat(arr[0]);
        let number2 = parseFloat(arr[2]);

        if (mathOperation == 'plus') {
            result = summ(number1, number2);
        } else if (mathOperation == 'devision') {
            result = devision(number1, number2);
        } else if (mathOperation == 'multiply') {
            result = multiply(number1, number2);
        } else if (mathOperation == 'minus') {
            result = subm(number1, number2);
        }
    };

    return result;
}


// / * - + % change_sign

function devision(a, b) {
    if (b != 0) {
        return a / b
    } else {
        return 'you can not divide on zero'
    }
};

function multiply(a, b) {
    return a * b
};

function subm(a, b) {
    return a - b
};

function summ(a, b) {
    return a + b
}

function percent(a, b) {
    return a % b;
};

function changeSign(a) {
    return -a;
};