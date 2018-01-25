/*
Pyramid slide down
link : https://www.codewars.com/kata/pyramid-slide-down/train/javascript

Task : 

Imagine that you have a plane pyramid built of numbers, like this one here:

 /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3

Let's say that the 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid. You need to find the maximum possible sum.

Solution : 

Let's use greedy approach : starting from the row before last, every number has two "leaves", we add the leaf with greater value to the current number. 
Keep doing this until you hit the top row with a single number. Voila. Very simple.


*/

function longestSlideDown(p) {
  for (var i = p.length - 2; i > -1; i--) {
    for (var j = 0; j < p[i].length; j++) {
      p[i][j] = Math.max(p[i + 1][j] + p[i][j], p[i + 1][j + 1] + p[i][j])
    }
  }
  return p[0][0]
}