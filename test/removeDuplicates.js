const removeDuplicates = (nums) => {
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right];
    }
  }

  console.log(nums);
  return left + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));