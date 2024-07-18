// The Fibonacci series (or Fibonacci sequence) is a sequence of numbers in which each number (called a Fibonacci
// number) is the sum of the two preceding ones. The sequence typically starts with 0 and 1, and each subsequent
// number in the sequence is the sum of the previous two.

let n = 20;
let a = 0
let b = 1
let next;

console.log(a + " ");

for (var i = 1; i < n; i++) {
    console.log(b + " ");
    next = a + b;
    a = b;
    b = next;
}