/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (!nums.includes(0)) return nums.length - 1;

  let notDeletedState = 0;
  let deletedState = 0;
  let max = 0;

  for (const num of nums) {
    if (num == 0) {
      deletedState = notDeletedState;
      notDeletedState = 0;
    } else {
      notDeletedState++;
      deletedState++;
    }

    max = Math.max(deletedState, max);
  }

  return max;
};
