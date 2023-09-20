/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxAvg;
  let currSum = 0;
  let currAvg;

  for (let i = 0; i <= k - 1; i++) {
    currSum += nums[i];
    currAvg = currSum / k;
  }

  maxAvg = currSum / k;

  for (let i = 1; i < nums.length; i++) {
    if (i + k > nums.length) break;
    currSum = currSum - nums[i - 1] + nums[i + k - 1];
    currAvg = currSum / k;
    if (currAvg > maxAvg) maxAvg = currAvg;
  }

  return maxAvg;
};
