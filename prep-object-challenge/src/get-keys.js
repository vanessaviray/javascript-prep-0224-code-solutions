/* exported getKeys */
function getKeys(object) {
  let array = [];
  for (let key in object) {
    array.push(key);
  }
  return array;
}
