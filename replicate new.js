/*
replicate new operator
link : http://www.codewars.com/kata/replicate-new/train/javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

*/


function nouveau(Constr) {
  const args = [].slice.call(arguments, 1); // get arguments array if they were passed in
  const thisValue = Object.create(Constr.prototype); // create a new object inheriting from the prototype of the constructor function
  const result = Constr.apply(thisValue, args); 
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result; //if constructor return a functon or an object, return it
  }
  return thisValue;
}