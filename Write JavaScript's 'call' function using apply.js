link : https://www.codewars.com/kata/write-javascripts-call-function-using-apply/solutions/javascript

//ES6 spread operator helps to separate the arguments

Function.prototype.call = function(thisArg, ...args) {
  return this.apply(thisArg, args);
}
