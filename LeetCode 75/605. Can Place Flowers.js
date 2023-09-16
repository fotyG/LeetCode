/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let flowersToPlant = n;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
      flowersToPlant--;
      break;
    }

    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        i = i + 1;
        flowersToPlant--;
      } else if (i === 0 && flowerbed[0] === 0 && flowerbed[1] === 0) {
        flowersToPlant--;
        i = i + 1;
      } else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
        flowersToPlant--;
      }
    }
  }

  return flowersToPlant <= 0 ? true : false;
};

// Solution from comments that I liked:

// var canPlaceFlowers = function(flowerbed, n) {
//   for (let i = 0; i < flowerbed.length && n !== 0; i++) {
//     if (
//       flowerbed[i] === 0 &&
//       flowerbed[i - 1] !== 1 &&
//       flowerbed[i + 1] !== 1
//     ) {
//       n--;
//       i++;
//     }
//   }
//   return n === 0;
// };
