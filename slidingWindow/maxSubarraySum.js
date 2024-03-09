function maxSubarraySum(array, number) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < number) return null;
  for (let i = 0; i < number; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 3, 9, 2, 1, 8, 5, 6, 3], 5));
