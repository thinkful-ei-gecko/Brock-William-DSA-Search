const BinarySearchTree = require("./bst");

function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } 
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } 
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

function main() {
  
}
main();
