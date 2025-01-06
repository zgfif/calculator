import { devision, multiply, subm, summ, percent, changeSign } from './ariphmetic_functions.js';

export function binary_operation(arr) {
    let result = 0;
    
    if (arr.length == 3) {
        let number1 = parseFloat(arr[0]);
        let mathOperation = arr[1];
        let number2 = parseFloat(arr[2]);

        if (mathOperation == '+') {
            result = summ(number1, number2);
        } else if (mathOperation == '/') {
            result = devision(number1, number2);
        } else if (mathOperation == '*') {
            result = multiply(number1, number2);
        } else if (mathOperation == '-') {
            result = subm(number1, number2);
        }
    };
    return result;
}
