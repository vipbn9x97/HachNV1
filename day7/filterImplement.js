Array.prototype.mfilter =  function (func) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };
  
  var returnedArr = [1,2,3,4,5,6].mfilter(function(element, index, arr) {
    return element > 5;
  });
  
  console.log(returnedArr);