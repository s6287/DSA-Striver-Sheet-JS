var sortColors = function(nums) {
    // Initialize counters to keep track of the number of 0s, 1s, and 2s in the array.
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // First loop: Count occurrences of each number (0, 1, and 2).
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count0++; // Increment count for 0s
        } else if (nums[i] === 1) {
            count1++; // Increment count for 1s
        } else {
            count2++; // Increment count for 2s
        }
    }

    // Second loop: Overwrite the array with sorted values based on the counts.
    for (let i = 0; i < nums.length; i++) {
        if (count0 > 0) { 
            nums[i] = 0;  // Fill the array with 0s first
            count0--;      // Decrease count for 0s
        } else if (count1 > 0) { 
            nums[i] = 1;  // Fill the array with 1s next
            count1--;      // Decrease count for 1s
        } else { 
            nums[i] = 2;  // Fill the array with 2s last
            count2--;      // Decrease count for 2s
        }
    }
};


// Note :- This approach is straightforward and easy to understand, making it helpful for beginners. If you want a more optimized approach, you can implement the Dutch National Flag Algorithm.