/* exported getValue */
function getValue(object, key) {
  if (object.hasOwnProperty(key)) {
    return object[key];
  }
}
