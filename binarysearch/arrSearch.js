function arrSearch(arr, num) {
    let start = 0;
    let end = arr.length-1;
    let mid;
    let rs;
    if (arr.length < 1) {
        return 0;
    }
    if(num>arr[end]){
        return end;
    }
    if(num<arr[start]){
        return 0;
    }
    while (start <= end) {
        debugger;
        mid = Math.floor((start+end)/2);
        if (arr[mid] == num) {
            return mid;
        }
        else if (arr[mid] > num) {
            end = mid - 1;
            rs = mid;
        }
        else {
            start = mid + 1;
            rs = mid + 1;
        }
    }
    return rs;
}
console.log(arrSearch([1,2,3,5,7], 6))

