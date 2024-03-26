/* exported getValues */
function getValues(object) {
  let array = [];
  for (let key in object) {
    array.push(object[key]);
  }
  return array;
}
