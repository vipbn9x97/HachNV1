Array.prototype.myReduce = function(callback, initialVal) {
    var accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

//tests
var numbers3 = [20, 20, 2, 3];
var total = numbers3.myReduce(function(a, b) {
    return a + b;
}, 10);
console.log(total); // 55

var flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened); //[ 0, 1, 2, 3, 4, 5 ]