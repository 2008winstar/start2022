const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const smaller = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item <= pivot) {
      smaller.push(item);
    } else {
      greater.push(item);
    }
  }
  return [...quickSort(smaller), pivot, ...quickSort(greater)];
}

console.log(quickSort([7, 3, 5, 4, 9, 1]));