// Create a function where you can call it by writing the code:
// fibonacciGenerator (n)
// Where n is the number of items in the sequence.
// So I should be able to call:
// fibonacciGenerator(3) and get [0,1,1] as the output.
// the result should be returned from the function as an output.
// The first two numbers in the sequence must be 0 and 1.
// Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0
// e.g. for (var i = 0; i < 10; i ++)

function fibonacciGenerator(n) {
  let fArrays = [];
  if (n === 1) {
    fArrays = [0];
  } else if (n === 2) {
    fArrays = [0, 1];
  } else {
    fArrays = [0, 1];

    for (let i = 2; i < n; i++) {
      fArrays.push(fArrays[fArrays.length - 2] + fArrays[fArrays.length - 1]);
    }
  }
  return fArrays;
}

const output = fibonacciGenerator(7);
console.log(output);
