module.exports = function check(str, bracketsConfig) {

  const res = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for(let elem of str.split('')) {
    if(res[0] === elem) {
      res.shift();
    } else if (brackets[elem]) {
      res.unshift(brackets[elem])
    } else {
      return false
    }
  }

  return res.length === 0;
}