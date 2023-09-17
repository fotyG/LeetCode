/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let steps = 0;
  for (let i = 0; i < nums.length; i++) {
    if (steps === nums.length) return;
    steps += 1;
    if (nums[i] === 0) {
      nums.splice(nums.length, 0, nums.splice(i, 1)[0]);
      i--;
    }
  }

  return nums;
};

// From solutions:

// var moveZeroes = function(nums) {
//     let pointer = 0
//     for (let i in nums){
//         if (nums[i] !== 0){
//             [nums[pointer], nums[i]] = [nums[i], nums[pointer]]  <-- array destructuring assignment
//             pointer++
//         }
//     }
//     return nums
// };
