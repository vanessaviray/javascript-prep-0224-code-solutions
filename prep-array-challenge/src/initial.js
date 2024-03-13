/* exported initial */
function initial(array) {
  const newArr = [];
  for (let index = 0; index < array.length - 1; index++) {
    newArr.push(array[index]);
  }
  return newArr;
}
