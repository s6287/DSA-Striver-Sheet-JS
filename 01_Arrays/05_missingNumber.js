// Function to find the missing number in the given array
var missingNumber = function (nums) {
  let n = nums.length; // Find the length of the array (which represents n)

  // Calculate the expected sum of numbers from 0 to n using the formula
  let expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of all elements in the given array
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i]; // Add each element to actualSum
  }

  // The missing number is the difference between expectedSum and actualSum
  return expectedSum - actualSum;
};
