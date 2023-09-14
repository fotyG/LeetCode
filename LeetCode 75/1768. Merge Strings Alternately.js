/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = [];
    let longer = word1.length > word2.length ? word1 : word2
    let shorter;
    longer === word1 ? shorter = word2 : shorter = word1
    for (let i = 0; i < longer.length; i++) {
        if(shorter[i] === undefined) {
            result = [...result, longer.slice(i, longer.length)]
            break;
        }
        result.push(word1[i])
        result.push(word2[i])
    }
    console.log(result)
    return result.join("")
};



// Good solution:

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
 let result = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
};