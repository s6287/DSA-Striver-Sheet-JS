class Solution {
    longestSubarray(arr, k) {
        let prefix_sum = 0;
        let max_length = 0;
        let map = new Map();
        // First step to store sum in prefix_sum
        for (let i=0; i<arr.length; i++){
            prefix_sum = prefix_sum + arr[i];
            
            // second step to check if prefix sum === k then put their length in max_length
            if (prefix_sum === k){
                max_length = i + 1;
            }
            
            // third step mko khud ni smjh aya kuch just yad krke put
            if(map.has(prefix_sum - k)){
                max_length = Math.max(max_length , i-map.get(prefix_sum - k))
            }
            
            if(!map.has(prefix_sum)){
                map.set(prefix_sum,i)
            }
        }
        return max_length;
        
    }
}