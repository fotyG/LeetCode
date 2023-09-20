/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Faster one due to sliding window
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowels = 0;
  let currMax = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currMax++;
    }
  }
  maxVowels = currMax;

  for (let i = 1; i <= s.length - k; i++) {
    if (vowels.has(s[i - 1])) {
      currMax--;
    }
    if (vowels.has(s[i + k - 1])) {
      currMax++;
    }
    maxVowels = Math.max(currMax, maxVowels);
  }

  return maxVowels;
};

// Slower one due to nested while loop

// var maxVowels = function(s, k) {
//     const vowels = new Set(["a","e","i","o","u"])
//     let maxVowels = 0;

//     for (let i=0; i <= s.length - k; i++) {
//         let currentMax = 0;
//         let subLen = i + k -1;
//         while (i <= subLen) {
//             if (vowels.has(s[subLen])) {
//                 currentMax++
//                 maxVowels = Math.max(currentMax, maxVowels)
//             }
//             subLen--
//         }
//     }

//     return maxVowels;
// };
