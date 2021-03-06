/*
link : https://www.codewars.com/kata/simple-fun-number-381-find-d-equals-a-plus-b-plus-c-ii/train/javascript

Task : 
You are given a sorted integer array arr. It contains several uniq integers(negative, positive, or zero). 
Your task is to find the largest d such that a + b + c = d, where a, b, c, and d are distinct elements of arr. 
If no such an element d found, return null.

Solution: 

findD function loops through array, each time passing array without current number and the current number as second argument. 
findSum function checks if the sum of any three numbers of the array can be equal to the current number.
To reduce time complexity we move start or end index, depending if current sum is greater or less then the target.

*/

function findD(arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    let a = arr.slice(0, i).concat(arr.slice(i + 1));  //array without the current number
    if (findSum(a, arr[i])) {
      return arr[i]
    }
  }
  return null
}


function findSum(arr, target) {
  let start, end, a, b, c, sum;
  for (let i = 0; i < arr.length - 2; i++) {
    end = arr.length - 1;
    start = i;
    a = arr[start];
    while (start < end - 1) {
      b = arr[start + 1]
      c = arr[end]
      sum = a + b + c;
      if (sum === target) {
        return true
      } else {
        if (sum < target) {
          start++
        } else {
          end--
        }
      }
    }
  }
  return false
}
