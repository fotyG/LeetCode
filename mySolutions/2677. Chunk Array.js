/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let finArr = [];
  let copy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (copy.length === 0) break;
    finArr.push(copy.splice(0, size));
  }
  return finArr;
};
