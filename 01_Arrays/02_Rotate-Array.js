/**
 * 🚀 Leetcode 189: Rotate Array
 * 📌 Problem Statement:
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * - Rotate 1 step: [7,1,2,3,4,5,6]
 * - Rotate 2 steps: [6,7,1,2,3,4,5]
 * - Rotate 3 steps: [5,6,7,1,2,3,4]
 * 
 * Example 2:
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * - Rotate 1 step: [99,-1,-100,3]
 * - Rotate 2 steps: [3,99,-1,-100]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -2^31 <= nums[i] <= 2^31 - 1
 * - 0 <= k <= 10^5
 */

/**
 * 🔥 Approach: Using splice() and unshift()
 * - Extract the last k elements using splice()
 * - Add them at the beginning using unshift()
 * - Handles large k values by using k % nums.length
 *
 * ✅ Time Complexity: O(k + n)
 * ✅ Space Complexity: O(k) (for storing removed elements)
 */

var rotate = function(nums, k) {
    // Step 1: Handle large k values by reducing unnecessary rotations
    k = k % nums.length; // If k > nums.length, rotating more than length is redundant

    // Step 2: Remove the last k elements and store them in removedPart
    let removedPart = nums.splice(nums.length - k); 
    
    // Step 3: Insert the removed elements at the beginning of the array
    nums.unshift(...removedPart); 
    
};

// Example Usage:
// Example: nums = [1,2,3,4,5,6,7], k = 3
// nums.splice(4) removes [5,6,7] and modifies nums to [1,2,3,4]
// removedPart = [5,6,7]
// Moves [5,6,7] to the front
// Final nums = [5,6,7,1,2,3,4]


