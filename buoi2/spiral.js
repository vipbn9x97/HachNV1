var spiral=(n)=>{
  var result=[];
  var colS=0;
  var colE=n-1;
  var rowS=0;
  var rowE=n-1;
  var val=1;
  for (let i = 0; i < n; i++) {
    let inner = new Array(n);
    inner.fill(0);
    result.push(inner);
  }
  while(rowS<=rowE && colS<=colE){
    for(i=colS; i<=colE
      ;i++){
      result[rowS][i]=val;
      val++;
    }
    rowS++;
    for(i=rowS;i<=rowE;i++){
      result[i][colE]=val;
      val++;
    }
    colE--;
    for(i=colE;i>=colS;i--){
      result[rowE][i]=val;
      val++;
    }
    rowE--;
    for(i=rowE;i>=rowS;i--){
      result[i][colS]=val;
      val++;
    }
    colS++;
  };
  return result;
}
console.log(spiral(5));