const solution = (x, n) => {
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
