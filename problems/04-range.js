/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.
***********************************************************************/
function range(start, end) {
  debugger

  //If the end number is less than the start, return an empty array.

    if(start < end) {
      return [start, ...range(start + 1, end)]
    }
    return [];
  }

  // let rangeArr = [];

  // if(end < start) return []

  // if(rangeArr.length === end - 1) return rangeArr;

  // else if(start < end) {
  //   rangeArr.push(start)
  //   start++;
  //   return range(start, end)
  // }
  // return rangeArr;
// };


console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
