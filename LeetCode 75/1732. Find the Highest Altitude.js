/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let prev = 0;

  for (let i = 0; i < gain.length; i++) {
    result = prev + gain[i];
    max = Math.max(result, max);
    prev = result;
  }

  return max;
};
