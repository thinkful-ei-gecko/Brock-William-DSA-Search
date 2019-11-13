const BinarySearchTree = require('./bst');

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
  let newBST = new BinarySearchTree();
  let input = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

  binarySearch(input, 16);

}
main();
