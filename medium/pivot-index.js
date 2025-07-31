// Difficulty: Medium
// Description: The pivot index is the index where the sum of the
//              numbers to the left of that index is equal to the
//              sum of the numbers to the right of the index.
//
//              Find the first 10 numbers in the 1, 2, 3..n sequence
//              where left sum equals right sum (excluding pivot)

let count = 0;
let n = 0;

for (let i = 1; count < 10; i++) {
  n++;
  const leftSum = (i * (i - 1)) / 2;
  const rightSum = (n * (n + 1)) / 2 - leftSum - i;

  if (leftSum === rightSum && rightSum != 0) {
    count++;
    console.log(`Found pivot ${count}: ${i} `);
  }

  if (leftSum > rightSum) {
    i--;
  }
}
