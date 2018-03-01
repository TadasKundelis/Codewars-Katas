Link : https://www.codewars.com/kata/maximum-subarray-sum/train/python

This is Kadane's algorithm implementation in python, time complexity is O(N). 

At every index, we need to find out if the current element or the current element + current sum is greater, than compare it with global max.
For example, if we have the list [-2, 1, -3, 4, -1, 2, 1, -5, 4], the algorithm works like that:

index 0: num = 0, cur_sum = 0 because 0 > 0 + (-2), max_sum = 0
index 1: num = 1, cur_sum = 1 because 0 + 1 > 0, max_sum = 1 because 1 > 0
index 2: num = -3, cur_sum = -2 because -2 > 1 + (-3), max_sum = 1 because 1 > -2
index 3: num = 4, cur_sum = 4 because 4 > 4 + (-2), max_sum = 4 because 4 > 1

etc...

until we reach the end of the list and the max subarray sum.


def maxSequence(arr):
    max_sum = 0
    cur_sum = 0
    for num in arr:
      cur_sum = max(num + cur_sum, num)
      max_sum = max(cur_sum, max_sum) 
    return max_sum
