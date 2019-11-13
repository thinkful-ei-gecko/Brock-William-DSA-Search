const BST = require('./bst');

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

function preOrder(BST){
  console.log(BST.key);
  if(BST.left){
    preOrder(BST.left);
  }
  if(BST.right){
    preOrder(BST.right);
  }
}

function inOrder(BST){
  if(BST.left){
    inOrder(BST.left);
  }
  console.log(BST.key);
  if(BST.right){
    inOrder(BST.right);
  }
}

function postOrder(BST){
  if(BST.left){
    postOrder(BST.left);
  }
  if(BST.right){
    postOrder(BST.right);
  }
  console.log(BST.key);
}

function main() {
  let newBST = new BST();
  let input = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

  input.forEach(item => newBST.insert(item));
  //console.log(newBST);
  postOrder(newBST);


}
main();
