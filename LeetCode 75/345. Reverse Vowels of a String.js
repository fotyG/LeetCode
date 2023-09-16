/**
 * @param {string} str
 * @return {string}
 */
var reverseVowels = function (str) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  const vowels = [];
  let newStr = "";

  for (char of str) {
    if (vowelSet.has(char.toLowerCase())) {
      vowels.push(char);
    }
  }

  for (char of str) {
    if (vowelSet.has(char.toLowerCase())) {
      newStr += vowels.pop();
    } else {
      newStr += char;
    }
  }
  return newStr;
};

// Solution from comments which I really liked:

// var reverseVowels = function(s) {
//     const VOWELS = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
//     const arr = s.split('');
//     let i = 0, j = arr.length - 1;
//     while (i < j) {
//         if (VOWELS[arr[i]] && VOWELS[arr[j]]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             i++;
//             j--;
//         } else if (VOWELS[arr[i]]) {
//             j--;
//         } else {
//             i++;
//         }
//     }
//     return arr.join('');
// };
