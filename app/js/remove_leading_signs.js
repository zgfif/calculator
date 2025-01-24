function removeLeadingSigns(arr) {
  let i = 0;
  let indexses = [];

  while (i < arr.length) {
    if (isNaN(arr[i])) {
      indexses.push(i);
    } else {
      break;
    }

    i += 1;
  }

  arr.splice(indexses[0], indexses.length);

  return arr;
}

export default removeLeadingSigns;
