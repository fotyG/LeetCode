/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// var closeStrings = function(word1, word2) {
//     if (word1.length !== word2.length) return false
//     const map1 = {}
//     const map2 = {}

//     for(let i = 0; i < word1.length; i++) {
//         map1[word1[i]] = map1[word1[i]] ? map1[word1[i]] + 1 : 1;
//         map2[word2[i]] = map2[word2[i]] ? map2[word2[i]] + 1 : 1;
//     }

//     const localArr = Object.values(map2);

//     for (let i in map1) {
//         if (!map2[i]) return false;
//         let index = localArr.indexOf(map1[i])
//         if (index == -1) return false
//         localArr.splice(index, 1)
//     }

//     return localArr.length == 0
// };

function getSortedItems(word) {
  const group = {};

  for (let c of word) {
    group[c] = (group[c] || 0) + 1;
  }

  return {
    keys: Object.keys(group).sort(),
    counts: Object.values(group).sort((a, b) => a - b),
  };
}

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const group1 = getSortedItems(word1);
  const group2 = getSortedItems(word2);

  for (let i = 0; i < group1.keys.length; i++) {
    if (
      group1.keys[i] !== group2.keys[i] ||
      group1.counts[i] !== group2.counts[i]
    ) {
      return false;
    }
  }

  return true;
};
