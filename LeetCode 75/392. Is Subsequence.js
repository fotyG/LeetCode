/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pointer = 0;
  let found = true;
  if ((s === "" && t.length > 0) || (t === "" && s === "")) return true;
  if (t === "") return false;

  for (let i = 0; i < s.length && found; i++) {
    for (let j = pointer; j < t.length; j++) {
      found = false;
      if (s[i] === t[j]) {
        found = true;
        if (i !== s.length - 1 && j === t.length - 1) return false;
        pointer = j + 1;
        break;
      }
    }
  }

  return found;
};

// From solutions:

// const isSubsequence = (s, t) => {
//   //! Edge case
//   if (s.length > t.length) return false; //! if len of s is greater than len of t, return false because s cant be a subsequence of t
//   `
//   Example:
//     s='Leetcode'
//     t='Code'
//     here we are trying to find if 'Leetcode' is a subsequence of 'Code' which is not possible because 'Leetcode' is longer than 'Code'

//   `;
//   const t_length = t.length;
//   let subsequence = 0;
//   for (let i = 0; i < t_length; i++) {
//     if (s[subsequence] === t[i]) {
//       // ! if it is matching, increment subsequence
//       subsequence++;
//     }
//   }
//   return subsequence === s.length
// };
