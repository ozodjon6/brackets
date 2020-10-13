module.exports = function check(str, bracketsConfig) {
  // your solution
  const result = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (let el of str.split``) {
    if(result[0] === el) {
      result.shift();
    } else if (brackets[el]) {
      result.unshift(brackets[el]);
    } else {
      return false;
    }
  }

  return result.length === 0;

}
