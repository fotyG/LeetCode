/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const resultArr = [];

  for (kid of candies) {
    if (kid + extraCandies >= max) {
      resultArr.push(true);
    } else {
      resultArr.push(false);
    }
  }

  return resultArr;
};
