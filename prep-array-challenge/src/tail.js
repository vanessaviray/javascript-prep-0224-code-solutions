/* exported tail */
function tail(array) {
  const newArr = [];
  for (let index = 1; index < array.length; index++) {
    newArr.push(array[index]);
  }
  return newArr;
}
