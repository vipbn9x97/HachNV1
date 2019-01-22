function arrSearch(arr, num) {
    let start = 0;
    let mid;
    let rs;
    let end = arr.length;
    if (arr.length < 1) {
        return 0;
    }

    while (start < end) {
        mid = start + Math.floor((end - start) / 2);
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
console.log(arrSearch([1, 3, 5, 8, 8, 16], 0))