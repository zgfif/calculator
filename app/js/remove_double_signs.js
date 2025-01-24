/**
 * this function removes double signs from an array in any place of the array
 *
 * @param {Array} arr
 * @returns Array without double signs
 *
 * @example
 * // returns ['33']
 * removeDoubleSigns(['*', '+-', '/', '*', '33']);
 *
 * @example
 * // returns ['13', '*', '33']
 * removeDoubleSigns(['*', '+-', '13', '*', '33']);
 */

function removeDoubleSigns(arr) {
  let resultArray = [];

  for (let x of arr) {
    // if is number
    if (!isNaN(x)) {
      resultArray.push(x);
    } else {
      // is operation sign
      if (resultArray.length > 0) {
        if (isNaN(resultArray[resultArray.length - 1])) {
          resultArray[resultArray.length - 1] = x;
        } else {
          resultArray.push(x);
        }
      }
    }
  }

  if (isNaN(resultArray[resultArray.length - 1]) && resultArray[resultArray.length - 1] != '+-') {
    resultArray.pop();
  }

  return resultArray;
}

export default removeDoubleSigns;
