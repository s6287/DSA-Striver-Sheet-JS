class Solution {
    findUnion(a, b) {
        let arr1 = a.concat(b);  // Merge both arrays
        let sett = new Set(arr1); // Remove duplicates
        let arr2 = Array.from(sett).sort((x, y) => x - y); // Convert to array & sort
        return arr2;
    }
}