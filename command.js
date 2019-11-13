const BST = require('./bst');
const Queue = require('./queue');

function nextCommander(bst, result = []){
  const queue = new Queue();
  queue.enqueue(bst);

  while(queue.first !== null) {
    const person = queue.dequeue();
    result.push(person.value);
    if(person.left) {
      queue.enqueue(person.left);
    }
    if(person.right) {
      queue.enqueue(person.right);
    }
  }
  return result;
}

function main() {
  let bst = new BST();

  bst.insert(10, 'Picard');
  bst.insert(9, 'Riker');
  bst.insert(8, 'Data');
  bst.insert(7, 'Worf');
  bst.insert(6 ,'Laforge');
  bst.insert(5, 'Crusher');
  bst.insert(4, 'Security');
  bst.insert(3, 'Selar');

  console.log(JSON.stringify(nextCommander(bst)));

  // Picard, Riker, Data, Worf, Laforge, Crusher, Security, Selar

}
main();