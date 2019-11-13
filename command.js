const BST = require('./bst');
const Queue = require('./queue');

function nextCommander(bst, result = []){
  const queue = new Queue();
  queue.enqueue(bst);

  while(queue.first !== null)
}

function main() {
  let BST = new BST();

  BST.insert(10, 'Picard'),
  BST.insert(8, 'Riker'),
  BST.insert(12, 'Data'),
  BST.insert(9, 'Worf'),
  BST.insert(14, 'Crusher'),
  BST.insert(1, 'Security'),
  BST.insert(16, 'Selar')

  console.log(nextCommander(BST));

  // Picard, Riker, Data, Worf, Laforge, Crusher, Security, Selar

}
main();