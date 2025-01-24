// Arithmetic functions: division, multiplication, subtraction, addition, percentage, change sign

/**
 * Divides two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number|string} The quotient or an error message if division by zero.
 *
 *  @example
 * // returns 5
 * division(10, 2);
 */
const division = (a, b) => {
  return b !== 0 ? a / b : 'Cannot divide by zero';
};

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product.
 *
 * @example
 * // returns 10
 * multiply(5, 2);
 */
const multiply = (a, b) => a * b;

/**
 * Subtracts the second number from the first.
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference.
 *
 * @example
 * // returns 7
 * subtract(10, 3);
 */
const subtract = (a, b) => a - b;

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum.
 *
 * @example
 * // returns 5
 * sum(2, 3);
 */
const sum = (a, b) => a + b;

/**
 * Converts a number to its percentage.
 * @param {number} a - The number.
 * @returns {number} The percentage.
 *
 * @example
 * // returns 0.5
 * percent(50);
 */
const percent = (a) => a / 100;

/**
 * Changes the sign of a number.
 * @param {number} a - The number.
 * @returns {number} The number with its sign changed.
 *
 * @example
 * // returns -5
 * changeSign(5);
 */
const changeSign = (a) => -a;

export { division, multiply, subtract, sum, percent, changeSign };
