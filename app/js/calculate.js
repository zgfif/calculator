import { binary_operation } from './binary_operation.js';

export function calculate(arr) {
  const array_length = arr.length;

  if (array_length == 1) {
    return arr[0];
  }

  if (array_length == 3) {
    return binary_operation(arr);
  }

  if (array_length > 3) {
    if (array_length % 2 == 0) {
      arr.pop();
    }

    const binaryResult = binary_operation(arr.slice(0, 3));

    const new_array = [binaryResult, ...arr.slice(3)];

    return calculate(new_array);
  }
}
