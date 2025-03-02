// Given an array, arr[] sorted in ascending order and an integer k. Return true if k is present in the array, otherwise, false.

class Solution {

    searchInSorted(arr, k) {
        for(let i=0; i<arr.length; i++){
            if(arr[i] === k){
                return true;
            }else{
                false;
            }
        }
    }
}

// We can also use .includes(). it takes only 0.18 second while loop consume more time.

class Solution {

    searchInSorted(arr, k) {
        if(arr.includes(k)){
            return true;
        }else{ false}
    }
}


