function filtered(array, callback) {
  let rs = [];
  for (let i of array) {
    if (callback(i)) {
      rs.push(i);
    }
  }
  return rs;
}

function filterFuction(i) {
  return (i > 5);
}

console.log(filtered([1, 2, 3, 4, 5, 6,], filterFuction));