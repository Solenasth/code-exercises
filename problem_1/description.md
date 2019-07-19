#Problem 1

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

##Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

##Input/Output

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000.

[output] array.integer

Sorted array a with all the trees untouched.

##Example Test Cases:

Input: a: [-1, 150, 190, 170, -1, -1, 160, 180]
Expected Output: [-1, 150, 160, 170, -1, -1, 180, 190]

Input: a: [-1, -1, -1, -1, -1]
Expected Output: [-1, -1, -1, -1, -1]

Input: a: [-1]
Expected Output: [-1]

Input: a: [4, 2, 9, 11, 2, 16]
Expected Output: [2, 2, 4, 9, 11, 16]

Input: a: [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
Expected Output: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]

Input: a: [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]
Expected Output: [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]

