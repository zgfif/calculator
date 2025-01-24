import { percent, changeSign } from './arithmetic_functions.js';

function unary_operation(arr) {
  const operation = {
    '%': percent,
    '+-': changeSign,
  };

  const [number, sign] = arr;

  if (isNaN(number)) {
    return 'invalid number';
  }

  if (Object.hasOwn(operation, sign)) {
    return operation[sign](parseFloat(number));
  } else {
    return 'invalid operation';
  }
}

export default unary_operation;
