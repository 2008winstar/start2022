const decimalToBinary = (num) => {
  const stack = [];
  let decimal = num;
  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  stack.reverse();
  return stack.join('');
}

console.log(decimalToBinary(10));
