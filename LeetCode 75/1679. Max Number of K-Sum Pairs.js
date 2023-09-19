/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let operationCounter = 0;
  let localCopy = nums;

  for (let i = 0; i < localCopy.length; i++) {
    for (let j = i + 1; j < localCopy.length; j++) {
      if (k - localCopy[i] === localCopy[j]) {
        operationCounter++;
        localCopy.splice(i, 1);
        localCopy.splice(j - 1, 1);
        i = i - 2;
        j = j - 2;
      }
    }
  }
  return operationCounter;
};

// From solutions:

// var maxOperations = function(nums, k) {
// 	 let count = 0;
// 	let map = new Map();
// 	for(let i=0;i<nums.length;i++){
// 		if(map.get(k-nums[i])){
// 		 if(map.get(k-nums[i]===1)) map.delete(k-nums[i]);
// 		 else map.set(k-nums[i],(map.get(k-nums[i])-1))
// 		 count++;
// 		}else{
// 		map.set(nums[i],(map.get(nums[i])+1 || 1))}
// 	}
// 	return count;
// };
