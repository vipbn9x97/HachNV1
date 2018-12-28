function range(start,end, step){
  if(!step){
    step=1;
  }
  var r=[];
  if (start<end){
    for (var i = start; i <= end; i+=step){
      r.push(i);
    }
    return r;
  }
  else{
    for (var i = start; i >= end; i-=step){
      r.push(i);
    }
    return r;
  }
}
  function sum(arr){
    var s = 0;
    for (var i = 0; i < arr.length; i++){ 
      s += arr[i];
    }
    return s;
  }
console.log(sum(range(1,10)));