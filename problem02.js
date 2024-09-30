const solution = (phone_number) => {
  if (phone_number.length < 4 || phone_number.length > 20) {
    return "Invalid phone number value";
  }

  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
};

console.log(solution("01033334444"));
console.log(solution("027778888"));
console.log(solution("01086"));
console.log(solution("0101"));
console.log(solution("010"));
console.log(solution("123456789123456789000"));
