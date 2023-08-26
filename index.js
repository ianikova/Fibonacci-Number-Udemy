function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output[(0, 1)];

    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}

output = fibonacciGenerator(10);
console.log(output);

/* 
Another solution

let fibonacciGenerator = function (n) {
  if (n === 0 || n === 1) return n;

  let first = 0, second = 1;
  let sum = first + second;

  for (let i = 2; i < n; i++) {
    first = second;
    second = sum;

    sum = first + second;
  }

  return sum
};

*/
