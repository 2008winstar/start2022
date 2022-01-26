/**
 * @file 两数之和
 * @link https://leetcode-cn.com/problems/two-sum/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item in hash) {
      return [hash[item], i];
    } else {
      hash[target - item] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));