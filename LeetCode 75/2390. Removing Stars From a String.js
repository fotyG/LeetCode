/**
 * @param {string} s
 * @return {string}
 */

function findNearest(i, arr) {
  if (arr[i] !== "*" || i === 0) {
    return i;
  } else {
    findNearest(i - 1);
  }
}
var removeStars = function (s) {
  const strArr = [...s];

  for (let i = 0; i < strArr.length; i++) {
    let nearest = i - 1;
    if (strArr[i] === "*" && nearest !== "*") {
      strArr.splice(i - 1, 2);
      i = i - 2;
    } else if (strArr[i] === "*") {
      nearest = findNearest(i - 1, strArr);
      if (nearest <= 0) return strArr.join("");
      strArr.splice(nearest, 1);
      strArr.splice(i - 1, 1);
      i = i - 2;
    }
  }

  return strArr.join("");
};

// My solution works but doesn't pass the speed test.

// From solutions - simple stack implementation:

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];

  // Iterate over each character in the input string
  for (const c of s) {
    // If the current character is a star and the stack is not empty, pop the topmost character
    // from the stack
    if (c === "*" && stack.length) {
      stack.pop();
    }
    // Otherwise, push the current character onto the stack
    else {
      stack.push(c);
    }
  }

  // Convert the stack to a string and return it as the output
  return stack.join("");
};
