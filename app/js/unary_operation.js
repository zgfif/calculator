import { percent, changeSign } from './arithmetic_functions.js';
/**
 * this function takes an array of two elements, the first element is a number and the second element is a sign
 *
 * @param {Array} arr the array of two elements, the first element of Array is a number and the second element is a sign (+- or %)
 * @returns {Number|String} returns the result of the unary operation
 *
 * @example
 * unary_operation(['23', '%']) // returns 0.23
 *
 * @example
 * unary_operation(['23', '+-']) // returns -23
 */
function unary_operation(arr) {
  const operations = {
    '%': percent,
    '+-': changeSign,
  };

  if (arr.length !== 2) {
    return 'invalid input';
  }

  const [number, sign] = arr;

  if (isNaN(number)) {
    return 'invalid number';
  }

  return Object.hasOwn(operations, sign) ? operations[sign](parseFloat(number)) : 'operation is not supported';
}

export default unary_operation;
