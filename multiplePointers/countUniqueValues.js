function countUniqueValues(arr) {
  // Initialize pointers and count
  let i = 0;
  let j = 1;
  let count = 1;

  // Check for empty array edge case
  if (arr.length === 0) return 0;

  // Iterate through the array
  while (j < arr.length) {
    // Check for new unique value
    if (arr[i] !== arr[j]) {
      count++;
      i = j; // Move slower pointer to the new unique element
    }
    j++; // Move faster pointer to the next element
  }

  // Return the count of unique values
  return count;
}

// Test cases
console.log("Using pointer pattern");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // Output: 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // Output: 7
console.log(countUniqueValues([])); // Output: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // Output: 4

// for loop
function countUniqueValues(arr) {
  // Check for empty array edge case
  if (arr.length === 0) return 0;

  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    // Check for new unique value
    if (arr[i] !== arr[i - 1]) {
      count++;
    }
  }
  return count;
}

// Test cases
console.log("Using for loop");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // Output: 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // Output: 7
console.log(countUniqueValues([])); // Output: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // Output: 4
