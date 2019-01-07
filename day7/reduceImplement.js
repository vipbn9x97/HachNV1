function reducer(array, callback, initialVal) {
    let accumulator = (initialVal === undefined) ? undefined : initialVal;

    for (let i = 0; i < array.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, array[i]);
        }
        else {
            accumulator = array[0];
        }

    }

    return accumulator;
}

const arr = [2, 3, 4];

const sum = (a, b) => a + b;

console.log(reducer(arr, sum,2));