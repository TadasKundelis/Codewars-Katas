Link : https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter/train/javascript

Array.prototype.filter = function(callback, ctx) {
  var l = this.length;
  var res = [];
  for (var i = 0; i < l; i++) {
    if (i in this && callback.call(ctx, this[i], i, this)) {
      res.push(this[i])
    }
  }
  return res
}


