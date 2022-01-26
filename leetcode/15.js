/**
 * @file 三数之和
 * @link https://leetcode-cn.com/problems/3sum/submissions/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  if (nums.length < 3) {
    return result;
  }
  let i = 0;
  while (i < nums.length - 2) {
    if (nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        const val = nums[i] + nums[j] + nums[k];
        if (val === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          while (j < k && nums[j] === nums[j + 1]) {
            j += 1;
          }
          while (j < k && nums[k] === nums[k - 1]) {
            k -= 1;
          }
          j += 1;
          k -= 1;
        } else if (val > 0) {
          k -= 1;
        } else {
          j += 1;
        }
      }
    }

    i += 1;
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))