/* exported reverse */
function reverse(array) {
  const newArr = [];
  for (let index = array.length - 1; index >= 0; index--) {
    newArr.push(array[index]);
  }
  return newArr;
}
