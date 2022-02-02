const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i];
    for (let j = 0; j < i; j++) {
      if (temp < nums[sorted]) {
        nums[i] = nums[sorted];
        nums[sorted] = temp;
      }
      sorted -= 1;
    }
  }

  console.log(nums);
}

insertionSort([7, 3, 5, 1, 9, 4]);
