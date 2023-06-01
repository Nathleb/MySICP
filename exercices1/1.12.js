/**
 * The following pattern of numbers is called Pascal’s triangle.
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
. . .
The numbers at the edge of the triangle are all 1, and each number inside the triangle is the
sum of the two numbers above it.33 Write a function that computes elements of Pascal’s
triangle by means of a recursive process.

 */

function pascal_triangle_recursive(size) {
  compute(size, [1]);
}

function compute(size, previousRow) {
  console.log(previousRow);
  previousRow = [0].concat(previousRow).concat([0]);
  let row = [];
  for (let index = 1; index < previousRow.length; index++) {
    row.push(previousRow[index - 1] + previousRow[index]);
  }
  if (size > 0) compute(size - 1, row);
}

pascal_triangle_recursive(5);
