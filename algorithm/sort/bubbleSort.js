const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // 若前后两个"乱序"，则交换
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
      }
    }
  }

  console.log(nums);
}

bubbleSort([7, 3, 5, 1, 9, 4]);

