/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const answer = [[], []];

  for (let num of nums1) {
    if (set2.has(num)) continue;
    if (answer[0].some((el) => el === num)) continue;
    else answer[0].push(num);
  }

  for (let num of nums2) {
    if (set1.has(num)) continue;
    if (answer[1].some((el) => el === num)) continue;
    else answer[1].push(num);
  }

  return answer;
};

// From solutions:

// var findDifference = function (nums1, nums2) {
//   nums1 = new Set(nums1);
//   nums2 = new Set(nums2);

//   for (let item of nums1) {
//     if (nums2.has(item)) {
//       nums1.delete(item);
//       nums2.delete(item);
//     }
//   }
//   return [Array.from(nums1), Array.from(nums2)];
// };
