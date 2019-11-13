1a. find middle, 
  is value < middle? yes go left. 
  is value < or > left? yes go left no go right, 
  is value = currnode? yes then print out value.
  4 steps => binarySearch([3,5,6,8,11,12,14,15,17,18]), then binarySearch([3,5,6,8]) , then binarySearch([6,8]), then binarySearch([8])...FOUND

1b. find middle, 
  is value < middle? yes go left. 
  is value < or > left? yes go left no go right, 
  is value = currnode? yes then print out value.
  4 steps => binarySearch([3,5,6,8,11,12,14,15,17,18]) , then binarySearch([12,14,15,17,18]), then binarySearch([17,18]), then binarySearch([17])...NOT FOUND

4.
                    35
                25        79
            15     27         90
          14  19           89    91
          
post order traversal would be: 14, 19, 15, 27, 25, 89, 91, 90, 79, 35



              8
         6        10
      5     7   9     11

preorder traversal would be: 8, 6, 5, 7, 10, 9, 11
