function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values, replacing with 0
  b = b === null ? 0 : b; 
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(undefined, 2)); //2
console.log(foo(1,undefined)); //1
console.log(foo(undefined, undefined));//0