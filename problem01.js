const solution = (x, n) => {
  if (x < -10000000 || x > 10000000) {
    return "Invalid x value";
  }

  if (n < 1 || n > 1000) {
    return "Invalid n value";
  }

  const output = [];

  for (let i = 1; i <= n; i++) {
    output.push(i * x);
  }

  return output;
};

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
console.log(solution(-10, 10));
console.log(solution(-10000000, 10));
console.log(solution(-10000001, 10));
console.log(solution(10000000, 10));
console.log(solution(10000001, 10));
console.log(solution(-10, 0));
console.log(solution(-5, 1));
console.log(solution(-5, 0));
