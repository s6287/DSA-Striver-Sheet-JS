/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // Step 1: Get all non-zero elements using filter()
  let nonzero = nums.filter(function (num) {
    return num !== 0;
  });

  // Step 2: Store the original length and reset the array
  let count = nums.length;
  nums.length = 0; // Empty the original array
  nums.push(...nonzero); // Push all non-zero elements back

  // Step 3: Push the remaining required zeros to maintain the original length
  for (let i = nums.length; i < count; i++) {
    nums.push(0);
  }
};
