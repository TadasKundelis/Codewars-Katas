Reverse linked list

link : https://www.codewars.com/kata/reverse-linked-list/solutions/javascript


function reverseList(list) {
  var reversed = null;
  while (list) {
    reversed = [list[0], reversed]
    list = list[1]
  }
  return reversed
}


reverseList([1, [2, [3, null]]])  // [3, [2, [1, null]]]
