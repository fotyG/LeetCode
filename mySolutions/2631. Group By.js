/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const final = {};

  for (let i = 0; i < this.length; i++) {
    console.log(final);
    const key = fn(this[i]);
    if (!final[key]) {
      final[key] = [this[i]];
    } else {
      final[key].push(this[i]);
    }
  }
  return final;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
