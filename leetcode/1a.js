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
  // 排序后会导致索引发生变化
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const val = nums[left] + nums[right];
    if (val === target) {
      return [left, right];
    } else if (val > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 22));