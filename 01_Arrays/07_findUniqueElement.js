/**
 * @param {number[]} nums - An array of integers where every element appears twice except for one.
 * @return {number} - The unique element in the array.
 */
var findUniqueElement = function(nums) {
    let result = 0; // Initialize result to 0

    // XOR all elements in the array
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]; // Applying XOR operation
    }

    return result; // The remaining number is the unique one
};


