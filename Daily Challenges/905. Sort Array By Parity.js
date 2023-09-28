/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let local = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      local.unshift(nums[i]);
    } else {
      local.push(nums[i]);
    }
  }

  return local;
};
