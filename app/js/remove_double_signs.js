export default function removeDoubleSigns(arr) {
  let new_arr = [];

  for (let x of arr) {
    // if is number
    if (!isNaN(x)) {
      new_arr.push(x);
    } else {
      // is operation sign
      if (new_arr.length > 0) {
        if (isNaN(new_arr[new_arr.length - 1])) {
          new_arr[new_arr.length - 1] = x;
        } else {
          new_arr.push(x);
        }
      }
    }
  }

  if (isNaN(new_arr[new_arr.length - 1]) && new_arr[new_arr.length - 1] != '+-') {
    new_arr.pop();
  }

  return new_arr;
}
