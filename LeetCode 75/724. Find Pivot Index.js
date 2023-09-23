/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let pivot = 0;
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    debugger;
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    pivot = nums[i];
    if (leftSum === sum - pivot) return i;
    else {
      leftSum += pivot;
      sum -= pivot;
    }
  }

  return -1;
};
