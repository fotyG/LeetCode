/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  left = 0;
  right = height.length - 1;

  while (left < right) {
    const shorterSide = Math.min(height[left], height[right]);
    const currentArea = (right - left) * shorterSide;
    if (currentArea > maxArea) maxArea = currentArea;
    if (height[left] > height[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }

  return maxArea;
};
