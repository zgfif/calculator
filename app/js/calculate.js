import { binary_operation } from './binary_operation.js';

export function calculate(arr) {
  let result = 0;
  const array_length = arr.length;

  if (array_length == 1) {
    result = arr[0];
  } else if (array_length == 3) {
    result = binary_operation(arr);
  } else if (array_length > 3) {
    if (array_length % 2 == 0) {
      arr.pop();
    }

    let res = 0;
    res = binary_operation(arr.slice(0, 3));
    let new_array;
    new_array = [res, ...arr.slice(3)];
    result = calculate(new_array);
  }

  return result;
}
