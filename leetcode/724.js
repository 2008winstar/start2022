/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
  let right = nums.reduce((prev, current) => {
    return prev + current;
  }, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (left === right - item) {
      return i;
    }
    left += item;
    right -= item;
  }
  return -1;
};

console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));