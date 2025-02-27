 /*
 🔹 Problem: Largest Element in Array
    - Given an array `arr[]`, find and return the largest element.

 🔹 Example:
    Input:  arr = [1, 8, 7, 56, 90]
    Output: 90

 🔹 Initial Attempts (Failed due to Time Complexity):
    ❌ Approach 1: Sorting the array in decreasing order and returning the first element.
       - `arr.sort((a, b) => b - a); return arr[0];`
       - Time Complexity: **O(n log n)** due to sorting.

    ❌ Approach 2: Using `Math.max(...arr)`
       - `return Math.max(...arr);`
       - Time Complexity: **O(n)** but causes issues for **large arrays** due to the spread operator.

 🔹 Optimal Approach (Used Below):
    ✅ Iterate through the array and track the maximum value.
    ✅ Time Complexity: **O(n)** → Single loop to traverse the array.
*/

function findLargest(arr) {
    // Assume the first element is the largest
    let max = arr[0];  

    // Loop through the array and update max if a larger element is found
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

// 🔹 Test Cases
console.log(findLargest([1, 8, 7, 56, 90])); // Output: 90
console.log(findLargest([-5, -1, -8, -3]));  // Output: -1
console.log(findLargest([10]));              // Output: 10
console.log(findLargest([3, 3, 3, 3, 3]));   // Output: 3
console.log(findLargest([100, 200, 500, 50])); // Output: 500


