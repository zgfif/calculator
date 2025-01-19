import { devision, multiply, subt, summ } from './arithmetic_functions.js';

export function binary_operation(arr) {
  const operations = { '/': devision, '*': multiply, '-': subt, '+': summ };

  if (arr.length != 3) {
    return 0;
  }

  if (!Object.keys(operations).includes(arr[1])) {
    return 'invalid operation sign';
  }

  const [number1, ariphmeticFunction, number2] = arr;

  return operations[ariphmeticFunction](parseFloat(number1), parseFloat(number2));
}
