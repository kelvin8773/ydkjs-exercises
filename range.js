function range(start, end) {
  if (end !== undefined) {
    const arr = [];
    if (end < start) return [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  } else {
    return function (finish) {
      return range(start, finish);
    };
  }
}

console.log(
  range(3, 3), // [3]
  range(3, 8), // [3,4,5,6,7,8]
  range(3, 0) // []
);

var start3 = range(3);
var start4 = range(4);

console.log(
  start3(3), // [3]
  start3(8), // [3,4,5,6,7,8]
  start3(0), // []
  start4(6) // [4,5,6]
);
