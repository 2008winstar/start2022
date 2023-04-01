/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];
  const dfs = (ipList, index) => {
    if (ipList.length === 4 && index === s.length) {
      result.push(ipList.join('.'));
      return;
    }
    if (ipList.length === 4 && index < s.length) {
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (index + 1 > s.length) {
        return;
      }
      const str = s.substring(index, index + i);
      if (Number(str) > 255) {
        return;
      }
      if (str.length > 1 && str.startsWith('0')) {
        return;
      }
      ipList.push(str);
      dfs(ipList, index + 1);
      ipList.pop();
    }
  }
  dfs([], 0);
  return result;
};

console.log(restoreIpAddresses('25525511135'));