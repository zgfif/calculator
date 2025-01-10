import { devision, multiply, subm, summ } from './ariphmetic_functions.js';

export function binary_operation(arr) {
  const operations = { '/': devision, '*': multiply, '-': subm, '+': summ };

  if (arr.length != 3) {
    return 0;
  }

  const [number1, ariphmeticFunction, number2] = arr;

  return operations[ariphmeticFunction](number1, number2);
}
