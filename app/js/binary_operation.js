import { division, multiply, subtract, sum } from './arithmetic_functions.js';
/**
 *
 * Performs a binary operation on the input array
 *
 * @param {Array} arr
 * @returns {Number|String} returns the result of the operation or an error message
 *
 * @example
 * // returns 2
 * binary_operation(['1', '+', '1']);
 *
 * @example
 * // returns 0
 * binary_operation(['1', '+']);
 */

function binary_operation(arr) {
  const operations = { '/': division, '*': multiply, '-': subtract, '+': sum };

  if (arr.length !== 3) {
    return 'Invalid input length';
  }

  if (!operations.hasOwnProperty(arr[1])) {
    return 'Invalid operation sign';
  }

  const [number1, arithmeticFunction, number2] = arr;
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Invalid number input';
  }

  return operations[arithmeticFunction](num1, num2);
}

export default binary_operation;
