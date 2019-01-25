function getMax(arr,n) 
{ 
    var max = -Infinity; 
    for (let i = 0; i < n; i++)  
        if (arr[i] > max) 
            max = arr[i];  
    return max; 
} 
  
// return the sum of the elements in the array 
function getSum(arr,n) 
{ 
    var total = 0; 
    for (let i = 0; i < n; i++) 
        total += arr[i]; 
    return total; 
} 
  
// find minimum required painters for given maxlen 
// which is the maximum length a painter can paint 
function numberOfPainters(arr, n, maxLen) 
{ 
    var total = 0, numPainters = 1; 
  
    for (let i = 0; i < n; i++) { 
        total += arr[i]; 
  
        if (total > maxLen) { 
  
            // for next count 
            total = arr[i]; 
            numPainters++; 
        } 
    } 
  
    return numPainters; 
} 
  
function partition(arr,n,k,l) 
{ 
    var lo = getMax(arr, n); 
    var hi = getSum(arr, n); 
  
    while (lo < hi) { 
        let mid = Math.floor(lo + (hi - lo) / 2); 
        let requiredPainters = numberOfPainters(arr, n, mid); 
  
        // find better optimum in lower half 
        // here mid is included because we 
        // may not get anything better 
        if (requiredPainters <= k) 
            hi = mid; 
  
        // find better optimum in upper half 
        // here mid is excluded because it gives  
        // required Painters > k, which is invalid 
        else
            lo = mid + 1; 
    } 
  
    // required 
    return lo*l; 
} 
var arr = [20,80,10,5]; 
    var n = arr.length;
    var k = 2; 
    var l = 5;
   console.log(partition(arr, n, k,l))