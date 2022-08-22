function findMissingNumber(list) {
  let checkingTheDifference = list[1] - list[0];
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] - list[i] < checkingTheDifference) {
      let differentNumber = list[i + 1] - list[i];
      let numberInListForSearch = list[i];
      result = numberInListForSearch - differentNumber;
    } else {
      let differentNumber = checkingTheDifference;
      let numberInListForSearch = list[i];
      result = numberInListForSearch - differentNumber;
    }
  }
  return result;
}
