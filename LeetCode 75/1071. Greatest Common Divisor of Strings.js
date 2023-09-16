/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const len1 = str1.length;
  const len2 = str2.length;

  function euc(x, y) {
    if (y === 0) {
      return x;
    }
    return euc(y, x % y);
  }

  const res = euc(len1, len2);

  return str1.slice(0, res);
};

// Euclidean Algorithm
// JavaScript program to demonstrate
// Basic Euclidean Algorithm

// Function to return
// gcd of a and b
function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}
