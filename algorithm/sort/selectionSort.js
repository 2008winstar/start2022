const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    let minValue = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      // 找最小(大)
      if (nums[j] < minValue) {
        minIndex = j;
        minValue = nums[j];
      }
    }

    if (minIndex !== i) {
      [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
    }
  }

  console.log(nums);
}

selectionSort([7, 3, 5, 1, 9, 4]);