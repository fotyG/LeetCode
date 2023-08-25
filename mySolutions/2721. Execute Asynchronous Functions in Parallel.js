/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = async function (functions) {
  const results = new Array(functions.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    functions.forEach(async (f, i) => {
      try {
        results[i] = await f();
        count++;
        if (count === functions.length) resolve(results);
      } catch (err) {
        reject(err);
      }
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
