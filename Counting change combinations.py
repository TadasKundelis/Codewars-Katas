#link : https://www.codewars.com/kata/counting-change-combinations/train/python

# the task is to find out in how many different ways the given sum of money can be composed by using the given coins. For example, if money = 5 and coins = [1,2],
# possible solutions are 1+1+1+1+1, 1+1+1+2 and 1+2+2 (result = 3).


 def count_change(money, coins):
    if money < 0 or len(coins) == 0:
      return 0
    elif money == 0:
      return 1
    else:
      return count_change(money - coins[0], coins) + count_change(money, coins[1:])
