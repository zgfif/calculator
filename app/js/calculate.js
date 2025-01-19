import { binary_operation } from './binary_operation.js';
import removeDoubleSigns from './remove_double_signs.js';
import unary_operation from './unary_operation.js';

export default function calculate(arr) {
  arr = removeDoubleSigns(arr);

  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 2) {
    return unary_operation(arr);
  }

  if (arr.length >= 3) {
    const binary_result = binary_operation(arr.slice(0, 3));

    if (binary_result === 'Cannot divide by zero') {
      return binary_result;
    }

    const new_array = [binary_result, ...arr.slice(3)];

    return calculate(new_array);
  }
}
