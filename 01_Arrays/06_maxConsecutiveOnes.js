/**
 * Finds the maximum number of consecutive 1's in a binary array.
 * @param {number[]} nums - Input array of 0s and 1s.
 * @return {number} - Maximum consecutive 1s.
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0,
    maxCount = 0;

  for (let num of nums) {
    if (num === 1) {
      count++;
      maxCount = Math.max(maxCount, count); // Update maxCount if count is greater
    } else {
      count = 0; // Reset count on encountering 0
    }
  }

  return maxCount;
};

// Example
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
