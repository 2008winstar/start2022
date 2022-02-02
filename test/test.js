const test = (nums, k) => {
  const len = nums.length;
  const arr = [...nums];

  for (let i =  0; i < len; i++) {
    const idx = (i + k) % len;
    arr[idx] = nums[i];
  }

  console.log(arr);
}

test([1, 2, 3, 4, 5, 6, 7], 3);

