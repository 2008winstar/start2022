/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  const index = findIndex(arr, x);
  const result = [arr[index]];
  let i = index - 1;
  let j = index + 1;
  while (result.length < k) {
    if (i < 0) {
      result.push(arr[j]);
      j++;
    } else if (j > arr.length - 1) {
      result.unshift(arr[i]);
      i--;
    } else if (compareFn(arr[i], arr[j], x)) {
      result.unshift(arr[i]);
      i--;
    } else {
      result.push(arr[j]);
      j++;
    }
  }
  return result;
};

const findIndex = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let result = null;
  while (result === null) {
    const mid = Math.floor((end - start) / 2) + start;
    if (mid === start) {
      result = compareFn(arr[end], arr[mid], x) ? end : mid;
    } else if (mid === end)  {
      result = compareFn(arr[start], arr[mid], x) ? start: mid;
    }
    if (compareFn(arr[start], arr[mid], x)) {
      end = mid;
    } else if (compareFn(arr[end], arr[mid], x)) {
      start = mid;
    } else {
      if (arr[mid] < x) {
        start = mid;
      } else if (arr[mid] > x) {
        end = mid;
      } else {
        result = mid;
      }
    }
  }
  return result;
}

const compareFn = (a, b, x) => {
  const absA = Math.abs(a - x);
  const absB = Math.abs(b - x);
  return absA < absB || (absA === absB && a < b);
}

console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9))